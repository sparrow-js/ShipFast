import { createJsonTranslator, createLanguageModel } from "../../typechat";
import { createZodJsonValidator } from "../../typechat/zod";
import Schema, {schemaType} from './index';
import {getUnsplashImage} from '@/lib/unsplash';
import {getNounImage} from '@/lib/noun';
import {ImageResult} from '@/lib/types/image'


const model = createLanguageModel({
    OPENAI_MODEL: 'gpt-4',
    OPENAI_API_KEY: process.env['OPENAI_KEY'],
    OPENAI_ENDPOINT: process.env['OPENAI_BASE_URL']
});



export async function getAIComponent(request: string, data: {
    id: string,
    schema: schemaType,
    type: 'schema' | 'const',
    operate: string
}) {
    if (data.operate === 'fetchIcon') {
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
        
    }
    const validator = createZodJsonValidator(Schema[data.schema], "data");
    const translator = createJsonTranslator(model, validator);

    const response = await translator.translate(request);
    if (!response.success) {
        console.log(response.message);
        return;
    }
    const cart = response.data;
    if (data.operate === 'fetchImage') {
        const imageRes = await getUnsplashImage(request);
        const imageList = imageRes && imageRes.images ? imageRes.images : []
        if ("list" in cart) {
            cart.list.map((item: any, index) => {
                if (imageList[index]) {
                    item.image = imageList[index].url
                }
                return item;
            })
        }

    }

   

    // if (data.operate === 'fetchIcon') {
    //     const imageRes = await getNounImage(request);
    //     const imageList = imageRes && imageRes.images ? imageRes.images : []
    //     if ("list" in cart) {
    //         cart.list.map((item: any, index) => {
    //             if (imageList[index]) {
    //                 item.icon = imageList[index].url
    //             }
    //             return item;
    //         })
    //     }
    // }
    return cart;
}