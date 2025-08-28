import { getCollection, type CollectionEntry } from "astro:content";
import type { Category } from "../content/config";

export async function getAllPosts() {
  const posts = await getCollection("posts", (p) => !p.data.draft);
  return posts.sort((a, b) => +b.data.date - +a.data.date);
}

export async function getPostsByCategory(category: Category) {
  const posts = await getCollection("posts", (p) => !p.data.draft && p.data.category === category);
  return posts.sort((a, b) => +b.data.date - +a.data.date);
}
