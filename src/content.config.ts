import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notebooks = defineCollection({
    loader: glob({ pattern: "*.md", base: "src/pages/notebooks" }),
});

export const collections = { notebooks };