import { respData, respErr } from "@/lib/resp";
import {getAIContent} from '@/service/content';

export async function POST(req: Request) {
    const {prompt} = await req.json();
    const res = await getAIContent(prompt);
    return respData(res);
}