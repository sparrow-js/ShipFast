import {createTryPage} from '@/lib/actions/page.actions';
import { respData, respErr } from "@/lib/resp";

export async function POST(req: Request) {
    const { prompt, generateId } =  await req.json();
    
    const resPage = await createTryPage(prompt, generateId);
    return respData({
        schema_data: resPage
    });
}