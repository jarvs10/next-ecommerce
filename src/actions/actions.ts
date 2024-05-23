'use server'

import prisma from "@/libs/prisma";

export const createPost = async (formData: FormData) => {
  const title = formData.get('title') as string;

  await prisma.blogs.create({
    data: {
      title
    }
  })
  
}