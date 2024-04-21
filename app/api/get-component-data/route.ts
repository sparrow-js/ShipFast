import { respData, respErr } from "@/lib/resp";
import {getAIComponent} from '@/service/generate/main';
// import { getSession } from "@/lib/auth";
export const runtime = 'edge';

export async function POST(req: Request) {
    // const session = await getSession();
    // if (!session?.user.id) {
    //   return respErr("Not authenticated");
    // }

    const {prompt, data} = await req.json();
    const res: any = await getAIComponent(prompt, data);
    return respData(res);
}