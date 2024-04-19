import { respData, respErr } from "@/lib/resp";
import {getPublishPage} from '@/models/page';

export async function POST(req: Request) {
    try {
        const { subPath } = await req.json();
        const pageInfo = await getPublishPage(subPath);
        return respData(pageInfo)
    } catch (e) {
        console.log("get page info failed");
        return respErr("get page info failed");
    }
}