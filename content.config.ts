import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        links: defineCollection({
            type: "page",
            source: "links.md",
        }),
        blog: defineCollection({
            type: "page",
            source: "blog/*.md",
            schema: z.object({
                title: z.string(),
                date: z.string(),
                is_published: z.boolean().default(true),
                description: z.string().optional(),
                readingTime: z.object({ text: z.string(), minutes: z.number(), time: z.number(), words: z.number() }).optional(),
            }),
        }),
    },
});
