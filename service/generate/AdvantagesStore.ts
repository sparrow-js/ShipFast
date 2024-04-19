import { z } from "zod";

const Wide = z.string().describe(`
Generate multiple choice titles for products
E.g.

text: sell cookies.
Wide variety of choices
`);

const WideAdvantage = z.object(
    {
        icon: z.string().describe('Font Awesome for icons. E.g. "fa fa-birthday-cake"'),
        title: z.union([z.literal('Wide Selection'), z.literal('Wide Range of Options'), z.literal('Wide variety of options'), z.literal('Wide Variety of Designs'), z.literal('Wide variety of choices'), Wide]),
        description: z.string().describe(' Generate Advantage description. The number of words is between 15 and 25. Required')
    }
);

const QualityAdvantage = z.object({
    icon: z.string().describe('Font Awesome for icons. E.g. "fa fa-birthday-cake"'),
    title: z.union([z.literal('Superior Quality'), z.literal('Quality ingredients' ), z.literal('Quality Assurance')]),
    description: z.string().describe('Generate Advantage description. The number of words is between 15 and 25. Required')
})


const PricesAdvantage = z.object({
    icon: z.literal('fa fa-dollar-sign'),
    title: z.literal('Competitive Prices'),
    description: z.string().describe('Generate Advantage description. The number of words is between 15 and 25. Required')
})

const CharacteristicAdvantage = z.object({
    icon: z.literal('https://static.thenounproject.com/png/6785279-200.png'),
    title: z.string(),
    description: z.string().describe('Generate Advantage description. The number of words is between 15 and 25. Required')
}).describe('Generate advantages based on product characteristics')

export const AdvantagesStore = z.object({
    list: z.union([WideAdvantage, QualityAdvantage, PricesAdvantage, CharacteristicAdvantage]).array().describe('Generate four advantages, the first must be WideAdvantage')
});

export const AdvantagesStoreSchema = {
    data: AdvantagesStore.describe('The following is a schema definition for sell shop app.')
};