import {getSsktImage} from '@/lib/sskt';
import { respData, respErr } from "@/lib/resp";
import {getNounImage} from '@/lib/noun';
import {getUnsplashImage} from '@/lib/unsplash';

export async function POST(req: Request) {
    const {type, prompt} = await req.json();
    if (type === 'icon') {
        const noun = await getNounImage(prompt);
        return respData(noun);
    } if (type === 'unsplash') {
        const unsplash = await getUnsplashImage(prompt);
        return respData(unsplash);
    } else {
        const res = await getSsktImage(true)
        return respData(res);
    }
}