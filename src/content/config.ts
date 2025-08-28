import { defineCollection, z } from "astro:content";

export const categories = ["politica", "crecimiento", "literatura"] as const;
export type Category = (typeof categories)[number];

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(5),
    description: z.string().min(20),
    date: z.date(), // fecha de publicación
    updated: z.date().optional(), // última edición
    cover: z.string().optional(), // ruta a imagen importada (assets) o pública
    author: z.string().default("Versocracia"),
    category: z.enum(categories),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // SEO opcional
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
  }),
});

const authors = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    links: z
      .object({
        x: z.string().url().optional(),
        ig: z.string().url().optional(),
        web: z.string().url().optional(),
      })
      .partial(),
  }),
});

export const collections = { posts, authors };
