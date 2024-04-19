import { respData, respErr } from "@/lib/resp";

import { genUuid } from "@/lib";
import { getUserCredits } from "@/service/order";
import {createUser} from '@/lib/actions';
import { User } from "@prisma/client";
import {getUserById} from '@/lib/fetchers/user.fetchers';
import { getSession } from "@/lib/auth";


export async function POST(req: Request) {
  const session = await getSession();
  if (!session) {
      return respErr("not login");
  }

  // try {
  //   const email = session.user.email;
  //   const id = session.user.id;
  //   const nickname = session.user.username;
  //   const avatarUrl = session.user.image;

  //   let userInfo: User = {
  //     id,
  //     email: email,
  //     name: nickname || "",
  //     username: nickname || "",
  //     avatarUrl: avatarUrl,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   };

  //   const existUser = await getUserById(id);
  //   if (!existUser) {
  //     await createUser(userInfo);
  //   }

  //   return respData({
  //     ...userInfo,
  //   });
  // } catch (e) {
  //   console.log("get user info failed");
  //   return respErr("get user info failed");
  // }
}
