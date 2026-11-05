import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectsCollection = defineCollection({
    loader: glob({ pattern: "**/**/*.md", base: "./src/content/projects" }),

    // Project card schema
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        banner: image(),
        modalBanner: image(),
        tags: z.array(
            z.object({
                name: z.string(),
                class: z.string()
            })
        )
    })
});

export const collections = {
    'projects': projectsCollection,
};