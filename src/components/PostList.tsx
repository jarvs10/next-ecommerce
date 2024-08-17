import prisma from "@/libs/prisma";
import React from "react";
import DeleteButton from "./DeleteButton";
import { Blogs } from "@prisma/client";

interface Params {
  params: {
    id: string;
  };
}

const PostList = async ({ params }: Params) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const postId = await prisma.blogs.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return (
    <>
      <h1 className="text-4xl font-black mb-6">{postId?.title}</h1>
      <p className="w-[60%] mx-auto font-semibold mb-2 leading-7">
        {postId?.description}
      </p>
      <p>Published: <span>{postId?.published ?  "Yes" : "No"}</span></p>
      <DeleteButton postId={postId as Blogs} />
    </>
  );
};

export default PostList;
