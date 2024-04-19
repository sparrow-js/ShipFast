import { z } from "zod";


export const Features = z.object({
    title: z.string().describe('feature title'),
    description: z.string().describe('feature description, The number of words is between 15 and 25. Required'),
    list: z.array(z.object(
        {
            icon: z.string().describe('Font Awesome for icons. like "fa fa-robot", "fa fa-birthday-cake"'),
            title: z.string().describe('the real feature title needs to be output, and cannot be replaced by Feature 1.'),
            description: z.string().describe('Generate Feature description. The number of words is between 15 and 25. Required')
        }
    )).describe('Generate 5 list real Feature')
})


export const FeatureSchema = {
    data: Features.describe('Lists feature information about user-supplied products for landing page app.')
};