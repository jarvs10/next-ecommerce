'use client'
import { deletePost } from '@/actions/actions'
import { Blogs } from '@prisma/client'
import React from 'react'

const DeleteButton = ({postId}: {postId: Blogs}) => {
  
  return (
    <>
      <button onClick={() => deletePost(postId?.id)} className="mt-2 bg-red-600 hover:bg-red-800 py-2 px-3 rounded-md text-white">Delete</button>
    </>
  )
}

export default DeleteButton
