"use server";

import prisma from "@/lib/prisma";
import { Page, Site, User } from "@prisma/client";
import { revalidateTag } from "next/cache";

import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7,
); // 7-character random string

export const createSite = async (formData: FormData) => {

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const subdomain = formData.get("subdomain") as string;
  try {
    const response = await prisma.site.create({
      data: {
        name,
        description,
        subdomain
      }
    });
    await revalidateTag(
      `${subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-metadata`,
    );
    return response;
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        error: `This subdomain is already taken`,
      };
    } else {
      return {
        error: error.message,
      };
    }
  }
};

export const updateSite = async function () {
  
}

export const deleteSite = async function () {}

export const getSiteFromPostId = async (postId: string) => {
  const post = await prisma.page.findUnique({
    where: {
      id: postId,
    },
    select: {
      siteId: true,
    },
  });
  return post?.siteId;
};

export const createPage = async function () {
  
}

// creating a separate function for this because we're not using FormData
export const updatePost = async (data: Page) => {

  const page = await prisma.page.findUnique({
    where: {
      id: data.id,
    },
    include: {
      site: true,
    },
  });

  try {
    const response = await prisma.page.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
      },
    });

    await revalidateTag(
      `${page?.site?.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-posts`,
    );
    await revalidateTag(
      `${page?.site?.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-${page?.slug}`,
    );

    // if the site has a custom domain, we need to revalidate those tags too
    page?.site?.customDomain &&
      (await revalidateTag(`${page.site?.customDomain}-posts`),
      await revalidateTag(`${page.site?.customDomain}-${page.slug}`));

    return response;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const updatePostMetadata = async function () {}

export const deletePost = async function () {}

export const editUser = async (
  formData: FormData,
  _id: unknown,
  key: string,
) => {

  const value = formData.get(key) as string;

  try {
    const response = await prisma.user.update({
      where: {
        id: '',
      },
      data: {
        [key]: value,
      },
    });
    return response;
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        error: `This ${key} is already in use`,
      };
    } else {
      return {
        error: error.message,
      };
    }
  }
};


export const createUser = async function (data: User) {

  try {
    const response = await prisma.user.create({
      data: data,
    });

    return response;
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        error: `user exist`,
      };
    } else {
      return {
        error: error.message,
      };
    }
  }
} 
