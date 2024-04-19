import {createSite} from '@/lib/actions/site.actions';
import {createPageByGenerateId} from '@/lib/actions/page.actions';
import { respData, respErr } from "@/lib/resp";

export async function POST(req: Request) {
    const { data, generateId } =  await req.json();
    
    const res = await createSite(data);
    if (typeof res === 'string') {
        return respErr(res);
    }
    const resPage = await createPageByGenerateId(data, generateId, res.id);
    return respData({
        siteId: res.id,
        page: resPage
    })
}