import { respData, respErr } from "@/lib/resp";
import {getAIComponent} from '@/service/generate/main';
export const runtime = 'edge';

export async function POST(req: Request) {
    const {prompt, data} = await req.json();
    const res = await getAIComponent(prompt, data);
    return respData(res);
}