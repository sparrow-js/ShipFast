import { z } from "zod";



export const HeaderStore = z.object({
    name: z.string().describe(`
Give it a name app. Required
E.g.

text: sell coffee.
Majestic Coffee Beans Co.

text: cookies
Sweet Delice
    `)
});

export const HeaderStoreSchema = {
    data: HeaderStore.describe('The following is a schema definition for landing page app.')
};