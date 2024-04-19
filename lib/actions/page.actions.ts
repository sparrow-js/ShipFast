import prisma from "@/lib/prisma";
import { Page, Site, User } from "@prisma/client";
import { revalidateTag } from "next/cache";

import requestMarketJson from '@/service/market';
import {initStoreSchema, initLandingpageSchema} from '@/service/schema';
import { getUserCredits, consumeCredits } from "@/service/order";
import requestLandingpageJson from '@/service/landing-page';
import { getSession } from "@/lib/auth";


export const publishPage = async function (params: any) {
  params.publish_schema_data = params.schema_data;
  params.published = true;
  const res = await updatePage(params);
  return res;
}

export const createPageByGenerateId = async function (data: any, generateId: string, siteId: string) {
    const { prompt } = data; 

    const session = await getSession();
    if (!session?.user.id) {
      return {
        error: "Not authenticated",
      };
    }

    const id = session.user.id;
    
    let page;
    let schema;
    if (generateId === 'store') {
      page = await requestMarketJson(prompt);
      schema = initStoreSchema(page);
    } else {
      schema = initLandingpageSchema();
    }

    const site = await prisma.site.findUnique({
        where: {
          id: siteId,
        },
      });


      if (!site || site.userId !== id) {
        return "Not authorized";
      }
  

    const response = await createPage({
        siteId: site.id,
        userId: id,
        prompt: prompt,
        schema_data: schema,
        type: 'home'
    }, site, id);
    return response;
}


export const createTryPage = async function (prompt: any, generateId: string) {
  let schema;
  if (generateId === 'store') {
    schema = initStoreSchema();
  } else {
    schema = initLandingpageSchema();
  }
  return schema;
}

export const createPage = async (data: any, site: Site, userId: string) => {
    const response = await prisma.page.create({
        data: data,
      });
    
      await revalidateTag(
        `${site.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-site`,
      );
      site.customDomain && (await revalidateTag(`${site.customDomain}-site`));
    
      return response;
}

export const updatePage = async (data: {
  id: string;
  [k: string]: any
}) => {
  const session = await getSession();
  if (!session?.user.id) {
    return {
      error: "Not authenticated",
    };
  }


  const userId = session.user.id;
  const post = await prisma.page.findFirst({
    where: {
      slug: data.id,
    },
    include: {
      site: true,
    },
  });
  if (!post || post.userId !== userId) {
    return {
      error: "Page not found",
    };
  }
  const { id, ...params} = data;
  try {
    const response = await prisma.page.update({
      where: {
        id: post.id,
      },
      data: {
        ...params
      },
    });

    await revalidateTag(
      `${post.site?.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-site`,
    );

    await revalidateTag(
      `${post.site?.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-home`,
    );

    await revalidateTag(
      `${post.site?.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-${post.slug}`,
    );

    // if the site has a custom domain, we need to revalidate those tags too
    post.site?.customDomain &&
      (await revalidateTag(`${post.site?.customDomain}-site`),
      await revalidateTag(`${post.site?.customDomain}-${post.slug}`),
      await revalidateTag(`${post.site?.customDomain}-home`));

    return response;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};