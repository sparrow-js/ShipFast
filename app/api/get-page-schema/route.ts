import { respData, respErr } from "@/lib/resp";
import {getPageSchema} from '@/models/page';
import { getPageData } from "@/lib/fetchers/page.fetchers";
import { getSsktImage } from '@/lib/sskt';
export async function POST(req: Request) {
    try {
        const {domain, id} = await req.json();
        const pageInfo = await getPageData(domain, id);
        return respData(pageInfo)
    } catch (e) {
        console.log("get page info failed");
        return respErr("get page info failed");
    }
}