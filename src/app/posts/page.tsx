import prisma from '@/libs/prisma'
import axios from 'axios'
import Link from 'next/link';
import React from 'react'

const Posts = async () => {

  const results = await axios.get('https://dummyjson.com/posts?limit=12');

  return (
    <div className='text-center pt-32 px-5'>
      <h1 className='text-4xl font-bold mb-8'>All posts</h1>

      <section>
        {results.data.posts.map((post) => {
          return (
            <div key={post.id} className='p-2 mb-5'>
              <Link href={``} passHref>
                <h2 className='text-xl font-medium mb-2'>{post.title}</h2>
              </Link>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Posts

