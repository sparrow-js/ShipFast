import {
  OpenAIStream,
  StreamingTextResponse,
  Tool,
  ToolCallPayload,
  experimental_StreamData,
} from 'ai';
import OpenAI from 'openai';
import {AdvantagesStoreSchema} from '@/service/generate/AdvantagesStore';
import zodToJsonSchema from 'zod-to-json-schema';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
  baseURL: 'https://api.openai-proxy.org/v1',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

const tools: Tool[] = [
  {
    type: 'function',
    function: {
      name: 'get_advantagesStore',
      description: 'The following is a schema definition for sell shop app. Generate 6 products',
      parameters: zodToJsonSchema(AdvantagesStoreSchema.data),
    }
  },
];

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 10000)
  })
}

export async function POST(req: Request) {
  // const { messages } = await req.json();
  const messages: any = [
    {
      role: "system",
      content: "You are a helpful assistant designed to output JSON.",
    },
    {"role": "user", "content": "cup shop"}
  ];
    const uri = "https://www.onesteps.shop/api/get-image-info";
    const params = {
      type: 'icon',
      prompt: 'cup'
    };
    const resp = await fetch(uri, {
      method: "POST",
      body: JSON.stringify(params),
    });

    if (resp.ok) {
        const res = await resp.json();
        if (res.data) {
            console.log('**************', res.data);
            // const imageList = res.data && res.data.images ? res.data.images : []
            // if ("list" in cart) {
            //     cart.list.map((item: any, index) => {
            //         if (imageList[index]) {
            //             item.icon = imageList[index].url
            //         }
            //         return item;
            //     })
            // }
        }
    }

    const sleepres = await sleep();
    

  const model = 'gpt-4-turbo';
  // console.log('**********',  zodToJsonSchema(ProductsStoreSchema.data));

  const response = await openai.chat.completions.create({
    model,
    stream: true,
    messages: messages,
    tools,
    tool_choice: 'auto',
    response_format: { type: "json_object" }
  });

  const data = new experimental_StreamData();
  const stream = OpenAIStream(response, {
    experimental_onToolCall: async (
      call: ToolCallPayload,
      appendToolCallMessage,
    ) => {
      for (const toolCall of call.tools) {
        // Note: this is a very simple example of a tool call handler
        // that only supports a single tool call function.
        // if (toolCall.func.name === 'get_current_weather') {
        //   console.log('********', toolCall)
        //   // Call a weather API here
        //   const weatherData = {
        //     temperature: 20,
        //     unit: toolCall.func.arguments.format === 'celsius' ? 'C' : 'F',
        //   };

        //   const newMessages = appendToolCallMessage({
        //     tool_call_id: toolCall.id,
        //     function_name: 'get_current_weather',
        //     tool_call_result: weatherData,
        //   });

        //   return openai.chat.completions.create({
        //     messages: [...messages, ...newMessages],
        //     model,
        //     stream: true,
        //     tools,
        //     tool_choice: 'auto',
        //   });
        // }
      }
    },
    onCompletion(completion) {
      console.log('completion', completion);
    },
    onFinal(completion) {
      data.close();
    },
    experimental_streamData: true,
  });

  // data.append({
  //   text: 'Hello, how are you?',
  // });

  return new StreamingTextResponse(stream, {}, data);
}
