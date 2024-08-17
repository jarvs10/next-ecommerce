'use server'

import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPost = async (formData: FormData) => {

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const published = formData.get('published') === 'on';

  await prisma.blogs.create({
    data: {
      title,
      description,
      published
    }
  })

  revalidatePath('/posts')
  
  redirect('/posts');
  
}

export const deletePost = async (id: number) => {

  console.log(id);
  
  await prisma.blogs.delete({
    where: {
      id
    }
  })
  
  redirect('/posts');
}