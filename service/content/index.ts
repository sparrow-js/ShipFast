import { createJsonTranslator, createLanguageModel } from "../../typechat";
import { createZodJsonValidator } from "../../typechat/zod";
import { z } from "zod";
import { ContentSchema } from "./schema";


const model = createLanguageModel({
    OPENAI_MODEL: 'gpt-4',
    OPENAI_API_KEY: process.env['OPENAI_KEY'],
    OPENAI_ENDPOINT: process.env['OPENAI_BASE_URL']
});



export async function getAIContent(request: string) {
    const validator = createZodJsonValidator(ContentSchema, "Page");
    const translator = createJsonTranslator(model, validator);

    const response = await translator.translate(request);
    if (!response.success) {
        console.log(response.message);
        return;
    }
    const cart = response.data;
    console.log(JSON.stringify(cart, undefined, 2));
    return cart;
}