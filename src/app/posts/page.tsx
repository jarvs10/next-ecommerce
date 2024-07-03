import prisma from '@/libs/prisma';
import { Blogs } from '@prisma/client';
import Link from 'next/link';
import React from 'react'

const Posts = async () => {

  const results = await prisma.blogs.findMany();

  return (
    <div className='text-center pt-20 px-5'>
      <h1 className='text-4xl font-bold mb-8'>All posts</h1>

      <section>
        {results.map((post: Blogs) => {
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

