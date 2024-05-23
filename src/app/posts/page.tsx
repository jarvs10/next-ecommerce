import axios from 'axios'
import Link from 'next/link';
import React from 'react'

const Posts = async () => {

  const results = await axios.get('https://dummyjson.com/posts?limit=10');

  return (
    <div className='text-center pt-20 px-5'>
      <h1 className='text-4xl font-bold mb-8'>All posts</h1>

      <section>
        {results.data.posts.map((post: any) => {
          return (
            <div key={post.id} className='p-2 mb-4'>
              <Link className='hover:underline underline-offset-2' href={`/posts/${post.id}`} passHref>
                <h2 className='text-lg font-medium mb-2'>{post.title}</h2>
              </Link>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Posts

