import { useEffect, useState } from 'react'
import { Grid, Spinner, Text } from '@chakra-ui/react'
import { BlogCard } from '@/components'
import type { BlogPost } from '@/interfaces'

const MAX_POSTS_TO_SHOW = 3
export const BlogPreview: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const { href } = new URL('https://blog.soliditylang.org/feed.xml')
        const response = await fetch(href)
        if (!response.ok) throw new Error('Failed to fetch blog feed')
        const feed = await response.text()
        const data = new window.DOMParser().parseFromString(feed, 'text/xml')
        const items = data.querySelectorAll('item')
        const posts: BlogPost[] = []
        items.forEach((e, i) => {
          if (i >= MAX_POSTS_TO_SHOW) return
          const title = e.querySelector('title')?.innerHTML as string
          const content = e.querySelector('description')?.innerHTML as string
          const date = e.querySelector('pubDate')?.innerHTML as string
          const href = e.querySelector('link')?.innerHTML as string
          const author = e.querySelector('author')?.innerHTML as string
          if (!title || !content || !date || !href) return
          posts.push({ title, content, date, href, author })
        })
        setBlogPosts(posts)
      } catch (error) {
        console.warn(error)
        setBlogPosts([])
      } finally {
        setLoading(false)
      }
    })()
  }, [])
  return (
    <Grid templateColumns={['1fr', null, 'repeat(3, 1fr)']} gap={4}>
      {loading ? (
        <Spinner />
      ) : !blogPosts ? (
        <Text>Oops, had a hard time getting our latest posts!</Text>
      ) : (
        blogPosts.map((blogPost: BlogPost) => (
          <BlogCard blogPost={blogPost} key={blogPost.href} />
        ))
      )}
    </Grid>
  )
}
