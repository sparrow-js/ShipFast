import { z } from "zod";

export type Image = string;

const Product = z.object({
    category: z.object({
        name: z.enum(['quality', 'cost-effectiveness', 'surprise'])
    }),
    name: z.string().describe('Generate product name, The number of words is between 5 and 15. Required'),
    price: z.string().describe('E.g. $16.23, Prices range from 10.00 to 500.00, Required'),
    image: z.string().describe(' For images, use placeholder images from https://placehold.co and include a detailed description of the image in the alt text so that an image generation AI can generate the image later.'),
    url: z.literal('https://www.ancodeai.com/')
})

const products = z.object({
    list: Product.array().describe('Generate 6 products')
})

export const ProductsStoreSchema = {
    data: products.describe('The following is a schema definition for landing page app.')
};

