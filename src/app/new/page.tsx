import { createPost } from '@/actions/actions'
import React from 'react'

const CreatePosts = () => {
  return (
    <div className='pt-20 text-center'>
      <h1 className='text-5xl font-bold mb-10'>Create Post</h1>

      <form action={createPost} className='text-center bg-white p-4 flex gap-2 justify-center items-center'>
        <div className="flex justify-center items-center gap-2">
          <input type="text" className="py-2 outline outline-1 rounded-md outline-slate-300 px-2" name='title' id="title" placeholder='Title' />
        </div>
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 py-2 px-5 rounded-md text-white font-bold">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreatePosts
