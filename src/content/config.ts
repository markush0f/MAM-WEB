import { defineCollection, z } from "astro:content";

const informationSchema = z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
});

export const informationCollection = defineCollection({
    schema: informationSchema,
});