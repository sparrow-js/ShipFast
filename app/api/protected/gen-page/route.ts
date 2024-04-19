
import requestMarketJson from '@/service/market';
import { respData, respErr } from "@/lib/resp";
import {initStoreSchema, initLandingpageSchema} from '@/service/schema';
import { insertPage } from "@/models/page";
import { Page } from "@/types/page";
import { getUserCredits, consumeCredits } from "@/service/order";
import requestLandingpageJson from '@/service/landing-page';
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) {
      return respErr("not login");
  }
    
    // const { content, generateId } =  await req.json();
  

    // const user_email = session.user.email;
    // const user_credits = await getUserCredits(user_email);
    // if (!user_credits || user_credits.left_credits < 1) {https://ppt.iyf.tv/c/c?position=PB&i=623&r=14
    //   return respErr("credits not enough");
    // }

    // let page;
    // let schema;
    // if (generateId === 'store') {
    //   page = await requestMarketJson(content);
    //   schema = initStoreSchema(page);
    // } else {
    //   page = await requestLandingpageJson(content);
    //   schema = initLandingpageSchema(page);
    // }

    // const pageData: Page = {
    //     user_email: user_email,
    //     llm_name: 'gpt-4',
    //     schema_data: schema,
    //     created_at: new Date().toISOString(),
    // }
    // const res = await insertPage(pageData);

    // await consumeCredits(user_email);

    // return respData({...res})
}