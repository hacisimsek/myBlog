import React from 'react'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'

const PostPage = ({ post }) => {
  console.log(post)
  return (
    <div className="site-container">
      <article>
        <h1 className="text-4xl font-bold my-6">{post.frontMatter.title}</h1>
        <p>{post.frontMatter.excerpt}</p>
        <hr  className="my-4"/>
        <div className="prose">{post.content}</div>
      </article>
    </div>
  )
}
export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      post
    }
  }
}

export default PostPage
