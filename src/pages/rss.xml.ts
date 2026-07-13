import { SITE } from '@/consts'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getAllPosts } from '@/lib/data-utils'
import { getCollection } from 'astro:content'

export async function GET(context: APIContext) {
  try {
    const [posts, learningPosts, projects] = await Promise.all([
      getAllPosts(),
      getCollection('learningPosts'),
      getCollection('projects'),
    ])

    const items = [
      ...posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${post.id}/`,
      })),
      ...learningPosts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/learning/courses/${post.id.replace('/index.mdx', '')}/`,
      })),
      ...projects.map((project) => ({
        title: project.data.title,
        description: project.data.description,
        pubDate: project.data.date,
        link: `/learning/projects/${project.id.split('/').slice(-2, -1)[0]}/`,
      })),
    ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf())

    return rss({
      title: SITE.title,
      description: SITE.description,
      site: context.site ?? SITE.href,
      items,
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new Response('Error generating RSS feed', { status: 500 })
  }
}
