
import { z } from "zod";

export const  Faqs = z.object(
    {
        title: z.literal('Frequently asked questions'),
        description: z.literal('If you have anything else you want to ask,'),
        link: z.literal('mailto:info@example.com'),
        list: z.object({
            title: z.string().describe('Generate faq title.'),
            description: z.string().describe('Generate Feature description. The number of words is between 15 and 25. Required')
        }).array().describe('Generate 4 Faq')
    }
)

export const FaqsSchema = {
    data: Faqs.describe('The following is a schema definition for landing page app.')
};