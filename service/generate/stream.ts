import { TypeChatLanguageModel, createJsonTranslator, processRequests, success } from "@/typechat";
import { createTypeScriptJsonValidator } from "@/typechat/ts";

import { createZodJsonValidator } from "@/typechat/zod";
import Schema, {schemaType} from './index';
import OpenAI from 'openai';
import {getUnsplashImage} from '@/lib/unsplash';
import {getNounImage} from '@/lib/noun';


const OPENAI_API_KEY = process.env['OPENAI_KEY'];
const OPENAI_ENDPOINT = process.env['OPENAI_BASE_URL'];
const model: TypeChatLanguageModel = {
    complete: createStreamingCompleter(s => {
        console.log('*******', s);
    })
};

// const validator = createTypeScriptJsonValidator<SentimentResponse>(schema, "SentimentResponse");


function createStreamingCompleter(onContent: (content: string) => void) {
    return async function complete(prompt: any) {
        const openai = new OpenAI({
            apiKey: OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
            baseURL: 'https://api.openai-proxy.org/v1',
          });
        
          const stream = await openai.chat.completions.create({
                model: 'gpt-4',
                stream: true,
                temperature: 0,
                n: 1,
                messages: prompt
          });
          let full_response = '';
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            full_response += content;
            onContent(content);
          }
        // const response = await fetch("https://api.openai-proxy.org/v1/chat/completions", {
        //     method: "POST",
        //     headers: {
        //         "Authorization": `Bearer ${OPENAI_API_KEY}`,
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         model: 'gpt-4',
        //         stream: true,
        //         temperature: 0,
        //         n: 1,
        //         messages: prompt
        //     })
        // });
        // const textDecoderStream = new TextDecoderStream();
        // if (response.body) {
        //     const stream = response.body.pipeThrough(textDecoderStream);
    
        //     for await (const chunk of stream) {
        //         // Do something with each chunk
        //         console.log(chunk);
        //     }
        // } 

        let result = "";
        // for await (const data of parseDataEvents(response.body)) {
        //     console.log('*******81118', data);
        //     const deltaContent = JSON.parse(data).choices[0].delta.content;
        //     if (deltaContent !== undefined) {
        //         onContent(deltaContent);
        //     }
        //     result += deltaContent;
        // }
        return success(full_response);
    }
}
const textDecoder = new TextDecoder('utf-8');
/**
 * @param {AsyncIterable<Buffer | string>} stream 
 */
async function* parseDataEvents(stream: any) {
    let tmp = ""
    for await (let part of stream) {
        part = part.toString();
        let start = 0;
        let end = 0;
        while ((end = part.indexOf("\n\n", start)) >= 0) {
            tmp += part.slice(start, end);
            if (tmp.startsWith("data: ")) {
                tmp = tmp.slice("data: ".length);
                if (tmp === "[DONE]") {
                    break;
                }
                yield tmp;
            }
            tmp = "";
            start = end + 2
        }
    }
}
const encoder = new TextEncoder();

export async function generateStream(
    req: string, 
    socket: { enqueue: (v: any) => any },
    data: {
        id: string,
        schema: schemaType,
        type: 'schema' | 'const',
        nodeId: string;
        operate: string
    }
)  {
    function noticeHost(data: Record<any, any>) {
        if (socket.enqueue) {
            socket.enqueue(encoder.encode(`${JSON.stringify(data)}\n`));
        }
    }
    // noticeHost({
    //     success: 1
    // });

    const validator = createZodJsonValidator(Schema[data['schema']], "data");

    const translator = createJsonTranslator(model, validator);

    const result = await translator.translate(req);
    if (result.success) {
        if (data.operate === 'fetchImage') {
            const imageRes = await getUnsplashImage(req);
            const imageList = imageRes && imageRes.images ? imageRes.images : []
            if ("list" in result.data) {
                result.data.list.map((item: any, index) => {
                    if (imageList[index]) {
                        item.image = imageList[index].url
                    }
                    return item;
                })
            }
    
        }
    
       
        if (data.operate === 'fetchIcon') {
            const uri = "https://www.onesteps.shop/api/get-image-info";
            const params = {
              type: 'icon',
              prompt: req
            };
            const resp = await fetch(uri, {
              method: "POST",
              body: JSON.stringify(params),
            });
    
            if (resp.ok) {
                const res = await resp.json();
                if (res.data) {
                    const imageList = res.data && res.data.images ? res.data.images : []
                    if ("list" in result.data) {
                        result.data.list.map((item: any, index) => {
                            if (imageList[index]) {
                                item.icon = imageList[index].url
                            }
                            return item;
                        })
                    }
                }
            }
            
        }
        noticeHost(result.data);
    }
    else {
        console.log("Uh oh!", result);
    }
}