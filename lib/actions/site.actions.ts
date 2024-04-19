"use server";

import prisma from "@/lib/prisma";
import { Page, Site, User } from "@prisma/client";
import { revalidateTag } from "next/cache";
import { withPageAuth, withSiteAuth } from "../auth";
import {
  addDomainToVercel,
  // getApexDomain,
  removeDomainFromVercelProject,
  // removeDomainFromVercelTeam,
  validDomainRegex,
} from "@/lib/domains";
import { customAlphabet } from "nanoid";
import { getSession } from "@/lib/auth";

const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7,
); // 7-character random string

export const createSite = async (data: any) => {
    const {name, description, subdomain, prompt} = data;
    const session = await getSession();
    if (!session?.user.id) {
      return {
        error: "Not authenticated",
      };
    }

    try {
      const response = await prisma.site.create({
        data: {
          name,
          description,
          subdomain: subdomain || name,
          prompt,
          user: {
            connect: {
              id: session.user.id,
            },
          },
        }
      });
      await revalidateTag(
        `${subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-metadata`,
      );
      return response;
    } catch (error: any) {
      if (error.code === "P2002") {
        return `This subdomain is already taken`;
      } else {
        return error.message;
      }
    }
  };

  
  export const updateSite = withSiteAuth(
    async (formData: FormData, site: Site, key: string) => {
      const value = formData.get(key) as string;
      try {
        let response;
  
        if (key === "customDomain") {
          if (value.includes("vercel.pub")) {
            return {
              error: "Cannot use vercel.pub subdomain as your custom domain",
            };
  
            // if the custom domain is valid, we need to add it to Vercel
          } else if (validDomainRegex.test(value)) {
            response = await prisma.site.update({
              where: {
                id: site.id,
              },
              data: {
                customDomain: value,
              },
            });
            await Promise.all([
              addDomainToVercel(value),
              // Optional: add www subdomain as well and redirect to apex domain
              // addDomainToVercel(`www.${value}`),
            ]);
  
            // empty value means the user wants to remove the custom domain
          } else if (value === "") {
            response = await prisma.site.update({
              where: {
                id: site.id,
              },
              data: {
                customDomain: null,
              },
            });
          }
  
          // if the site had a different customDomain before, we need to remove it from Vercel
          if (site.customDomain && site.customDomain !== value) {
            response = await removeDomainFromVercelProject(site.customDomain);
  
            /* Optional: remove domain from Vercel team 
  
            // first, we need to check if the apex domain is being used by other sites
            const apexDomain = getApexDomain(`https://${site.customDomain}`);
            const domainCount = await prisma.site.count({
              where: {
                OR: [
                  {
                    customDomain: apexDomain,
                  },
                  {
                    customDomain: {
                      endsWith: `.${apexDomain}`,
                    },
                  },
                ],
              },
            });
  
            // if the apex domain is being used by other sites
            // we should only remove it from our Vercel project
            if (domainCount >= 1) {
              await removeDomainFromVercelProject(site.customDomain);
            } else {
              // this is the only site using this apex domain
              // so we can remove it entirely from our Vercel team
              await removeDomainFromVercelTeam(
                site.customDomain
              );
            }
            
            */
          }
        } 
        // else if (key === "image" || key === "logo") {
          // todo: upload image
          // if (!process.env.BLOB_READ_WRITE_TOKEN) {
          //   return {
          //     error:
          //       "Missing BLOB_READ_WRITE_TOKEN token. Note: Vercel Blob is currently in beta – please fill out this form for access: https://tally.so/r/nPDMNd",
          //   };
          // }
  
          // const file = formData.get(key) as File;
          // const filename = `${nanoid()}.${file.type.split("/")[1]}`;
  
          // const { url } = await put(filename, file, {
          //   access: "public",
          // });
  
          // const blurhash = key === "image" ? await getBlurDataURL(url) : null;
  
          // response = await prisma.site.update({
          //   where: {
          //     id: site.id,
          //   },
          //   data: {
          //     [key]: url,
          //     ...(blurhash && { imageBlurhash: blurhash }),
          //   },
          // });
        // } 
        else {
          response = await prisma.site.update({
            where: {
              id: site.id,
            },
            data: {
              [key]: value,
            },
          });
        }
        console.log(
          "Updated site data! Revalidating tags: ",
          `${site.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-metadata`,
          `${site.customDomain}-metadata`,
        );
        await revalidateTag(
          `${site.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-metadata`,
        );
        site.customDomain &&
          (await revalidateTag(`${site.customDomain}-metadata`));
  
        return response;
      } catch (error: any) {
        if (error.code === "P2002") {
          return {
            error: `This ${key} is already taken`,
          };
        } else {
          return {
            error: error.message,
          };
        }
      }
    },
  );
  
  
  export const deleteSite = withSiteAuth(async (_: FormData, site: Site) => {
    try {
      const response = await prisma.site.delete({
        where: {
          id: site.id,
        },
      });
      await revalidateTag(
        `${site.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-metadata`,
      );
      response.customDomain &&
        (await revalidateTag(`${site.customDomain}-metadata`));
      return response;
    } catch (error: any) {
      return {
        error: error.message,
      };
    }
  });