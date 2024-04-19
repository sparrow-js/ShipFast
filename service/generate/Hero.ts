import { z } from "zod";

export const  Hero = z.object(
    {
        title: z.string(),
        announcement: z.string().describe('The announcement of the hero, The number of words is between 3 and 5. Required'),
        description: z.string().describe('Generate Advantage description. The number of words is between 25 and 40. Required'),
        image: z.enum(['/Comment-review.png', '/up.png', '/CV.png', '/Like.png']),
    
        action: z.object({
            title: z.literal('Sign up'),
            link: z.literal('/sing-up')
        })
    }
)

export const HeroSchema = {
    data: Hero.describe('The following is a schema definition for landing page app.')
};