import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', p => !p.data.draft);
  return rss({
    title: 'Versocracia',
    description: 'La república del argumento',
    site: context.site,
    items: posts
      .sort((a, b) => +b.data.date - +a.data.date)
      .map(p => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.date,
        link: `/${p.data.category}/${p.slug}/`
      }))
  });
}

