import React from 'react'

export default function PostList({ resource }) {
  const posts = resource.read()

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}><a href={post.url}>{post.title}</a></li>
      ))}
    </ul>
  )
}