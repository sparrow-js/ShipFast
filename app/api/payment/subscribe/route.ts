import { respData, respErr } from "@/lib/resp";
import {axios} from '@/lib/axios'
import { getSession } from "@/lib/auth";

export async function POST(request: Request) {
    const session = await getSession();
    if (!session) {
        return respErr("not login");
    }
      
    const checkout = await axios.post(
        `${process.env.LEMON_SQUEEZY_HOST}/checkouts`,
        {  
          data: {
            type: "checkouts",
            attributes: { 
              checkout_data: { 
                custom: { 
                  email: session.user.email, 
                  userId: session.user.id, 
                  username: session.user.username, 
                  type: 'single' 
                } 
              } 
            },
            relationships: {
              store: { 
                data: { 
                  type: "stores",
                   id: process.env.LEMON_SQUEEZY_STORE_ID 
                  } 
                },
              variant: { 
                data: { type: "variants", id: '255600' } },
            },
          }
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
            Accept: 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
          }
        }
    );
    const {data} = checkout;
    return respData(data.attributes);
}