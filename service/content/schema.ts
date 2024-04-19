import { z } from "zod";

export const Page = z.object({
    content: z.string().describe("Generate description. The number of words is between 15 and 25.")
});

export const ContentSchema = {
    Page: Page.describe("The following is a schema definition for landing page app."),
};