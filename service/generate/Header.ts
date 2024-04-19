import { z } from "zod";

export const HeaderLogin = z.object({
    logo: z.literal('/icon.png'),
    name: z.string().describe('Output an eye-catching name, a word. Required'),
    links: z.array(z.union([
        z.object({
            title: z.literal('Features'),
            link: z.literal('/#features')
        }),
        z.object({
            title: z.literal('Pricing'),
            link: z.literal('/#pricing')
        }),
        z.object({
            title: z.literal('Faqs'),
            link: z.literal('/#faqs')
        })
    ])).describe('Required'),
    operates: z.array(z.object({
        text: z.literal('Get Started'),
        link: z.literal('/'),
    })).describe('Required')
});

export const HeaderSchema = {
    data: HeaderLogin.describe('The following is a schema definition for landing page app.')
};