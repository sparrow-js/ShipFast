import { z } from "zod";

export const BannerStore = z.object({
        slogan: z.string().describe('The slogan of the text'),
        description: z.string().describe('Output a description to the app. The number of words is between 25 and 40. Required'),
        image: z.literal('/banner.jpg')
});

export const BannerStoreSchema = {
    data: BannerStore.describe('The following is a schema definition for sell shop app.')
};