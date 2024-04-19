import { z } from "zod";

export const Style = z.object({
    mode: z.enum(['light', 'dark']),
    theme: z.enum(['zinc', 'stone', 'gray', 'neutral', 'red', 'rose', 'orange', 'green', 'blue', 'yellow', 'violet']).describe('Choose a theme color that suits your app')
});

export const StyleSchema = {
    data: Style.describe('The following is a schema definition for landing page app.')
};