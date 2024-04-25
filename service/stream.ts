import fetch from "node-fetch";
import { TypeChatLanguageModel, createJsonTranslator, processRequests, success } from "@/typechat";
import { createTypeScriptJsonValidator } from "@/typechat/ts";

import { createZodJsonValidator } from "@/typechat/zod";
import Schema, {schemaType} from './generate/index';

const OPENAI_API_KEY = process.env['OPENAI_KEY'];
const OPENAI_ENDPOINT = process.env['OPENAI_BASE_URL'];
const model: TypeChatLanguageModel = {
    complete: createStreamingCompleter(s => {
        // console.log('*******', s);
    })
};

export interface SentimentResponse {
    sentiment: "positive" | "negative" | "neutral";
}
const schema = `export interface SentimentResponse {
    sentiment: "positive" | "negative" | "neutral";
}`;
// const validator = createTypeScriptJsonValidator<SentimentResponse>(schema, "SentimentResponse");
const validator = createZodJsonValidator(Schema['AdvantagesStoreSchema'], "data");


function createStreamingCompleter(onContent: (content: string) => void) {
    return async function complete(prompt: string) {
        const response = await fetch("https://api.openai-proxy.org/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENAI_API_KEY}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                model: 'gpt-4',
                stream: true,
                temperature: 0,
                n: 1,
                messages: [
                    {
                      role: 'user',
                      content: 'You are a service that translates user requests into JSON objects of type "data" according to the following TypeScript definitions:\n' +
                        '```\n' +
                        '// The following is a schema definition for sell shop app.\n' +
                        'interface data {\n' +
                        '    list: ({\n' +
                        '        icon: "https://static.thenounproject.com/png/6785279-200.png";\n' +
                        '        title: "Wide Selection" | "Wide Range of Options" | "Wide variety of options" | "Wide Variety of Designs" | "Wide variety of choices" | string;\n' +
                        '        description: string; //  Generate Advantage description. The number of words is between 15 and 25. Required\n' +
                        '    } | {\n' +
                        '        icon: "https://static.thenounproject.com/png/6785279-200.png";\n' +
                        '        title: "Superior Quality" | "Quality ingredients" | "Quality Assurance";\n' +
                        '        description: string; // Generate Advantage description. The number of words is between 15 and 25. Required\n' +
                        '    } | {\n' +
                        '        icon: "https://static.thenounproject.com/png/6785279-200.png";\n' +
                        '        title: "Competitive Prices";\n' +
                        '        description: string; // Generate Advantage description. The number of words is between 15 and 25. Required\n' +
                        '    } | {\n' +
                        '        icon: "https://static.thenounproject.com/png/6785279-200.png";\n' +
                        '        title: string;\n' +
                        '        description: string; // Generate Advantage description. The number of words is between 15 and 25. Required\n' +
                        '    })[]; // Generate four advantages, the first must be WideAdvantage\n' +
                        '}\n' +
                        '```\n' +
                        'The following is a user request:\n' +
                        '"""\n' +
                        'cup shop\n' +
                        '"""\n' +
                        'The following is the user request translated into a JSON object with 2 spaces of indentation and no properties with the value undefined:\n'
                    }
                  ],
            })
        });

        let result = "";
        for await (const data of parseDataEvents(response.body)) {
            const deltaContent = JSON.parse(data).choices[0].delta.content;
            if (deltaContent !== undefined) {
                onContent(deltaContent);
            }
            result += deltaContent;
        }
        return success(result);
    }
}

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

export async function generateStream(req: string, socket: { enqueue: (v: any) => any },)  {
    function noticeHost(data: Record<any, any>) {
        if (socket.enqueue) {
            socket.enqueue(encoder.encode(`${JSON.stringify(data)}\n`));
        }
    }
    noticeHost({success: 1})
    const translator = createJsonTranslator(model, validator);

    const result = await translator.translate(req);
    console.log("\n------\n");
    if (result.success) {
        console.log(result.data);
        noticeHost(result.data)
    }
    else {
        console.log("Uh oh!", result);
    }
}