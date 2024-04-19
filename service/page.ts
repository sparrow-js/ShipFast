import { getUserPages } from "@/models/page";

export async function getUserPageList(email: string) {
    const res = await getUserPages(email);
    return res;
}