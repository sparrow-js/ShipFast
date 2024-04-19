import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

export async function getPageDataByDomain(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
  ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
  : null;

  return await unstable_cache(
    async () => {
      const data = await prisma.page.findFirst({
        where: {
          site: subdomain ? { subdomain } : { customDomain: domain },
          published: true,
          type: 'home'
        },
        include: {
          site: {
            include: {
              user: true,
            },
          },
        },
      });

      if (!data) return null;
      
      return {
        ...data,
      };
    },
    [`${domain}-home`],
    {
      revalidate: 900, // 15 minutes
      tags: [`${domain}-home`],
    },
  )();
}


export async function getPageData(domain: string, slug: string) {
  const data = await prisma.page.findFirst({
    where: {
      slug,
    },
    include: {
      site: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!data) return null;
  
  return {
    ...data,
  };
}

export async function getWebsiteHome(siteId: string) {
  const home = await prisma.page.findFirst({
      where: {
          siteId,
          type: 'home'
      },
      select: {
        slug: true,
        title: true,
        createdAt: true,
        description: true,
        image: true,
        imageBlurhash: true,
        published: true,
        site: true,
      },
      
  });

  return {
    home
  }
}

export async function getWebsiteDashboard(siteId: string) {
    const home = await prisma.page.findFirst({
        where: {
            siteId,
            type: 'home'
        },
        select: {
          slug: true,
          title: true,
          createdAt: true,
          description: true,
          image: true,
          imageBlurhash: true,
          published: true,
          site: true,
        },
        
    });

    return {
      home
    }
}