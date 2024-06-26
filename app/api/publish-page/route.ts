import { publishPage } from "@/lib/actions/page.actions";
import { respData, respErr } from "@/lib/resp";

export async function POST(req: Request) {
    const { data } =  await req.json();
    const res = await publishPage(data);
    if ('error' in res) {
        return respErr(res.error)
    } else {
        return respData(res);
    }
}