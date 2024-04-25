import fetch from "node-fetch";
import { TypeChatLanguageModel, createJsonTranslator, processRequests, success } from "@/typechat";
import { createTypeScriptJsonValidator } from "@/typechat/ts";

import { createZodJsonValidator } from "@/typechat/zod";
import Schema, {schemaType} from './index';

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
                messages: prompt
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
    noticeHost({
        success: 1
    });

    const validator = createZodJsonValidator(Schema[data['schema']], "data");

    const translator = createJsonTranslator(model, validator);

    const result = await translator.translate(req);
    console.log("\n------\n");
    if (result.success) {
        console.log(result.data);
        noticeHost(result.data);
    }
    else {
        console.log("Uh oh!", result);
    }
}