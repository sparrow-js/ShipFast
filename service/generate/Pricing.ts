import { z } from "zod";

export const  Pricing = z.object(
    {
        title: z.literal('Pricing'),
        description: z.string().describe('Description reflects the advantages of the product, The number of words is between 15 and 25.'),    
        cards: z.array(z.discriminatedUnion('type',[
            z.object({
                type: z.literal('order'),
                price: z.literal('$7'),
                description: z.string(),
                buttonText: z.literal('Buy'),
                priority: z.boolean().default(false),
                features: z.string().array().describe('Generate 4 feature'),
            }).required(),
            z.object({
                type: z.literal('Subscribe'),
                price: z.literal('$99'),
                description: z.string(),
                buttonText: z.literal('Subscribe'),
                priority: z.boolean().default(true),
                features: z.string().array().describe('Generate 7 feature'),
            }).required()
        ]))
    }
)

export const PricingSchema = {
    data: Pricing.describe('The following is a schema definition for landing page app.')
};