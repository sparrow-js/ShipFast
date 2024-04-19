import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

export async function getSites(id: string, limit?: number) {

    const sites = await prisma.site.findMany({
        where: {
          user: {
            id,
          },
        },
        orderBy: {
          createdAt: "asc",
        },
        ...(limit ? { take: limit } : {}),
    });
    return sites;
}
