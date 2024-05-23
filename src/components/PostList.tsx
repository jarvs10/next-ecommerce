import axios from "axios";
import React from "react";

interface Params {
  params: {
    id: string;
  };
}

const PostList = async ({ params }: Params) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  
  const postId = await axios.get(`https://dummyjson.com/posts/${params.id}`);

  return (
    <>
      <h1 className="text-4xl font-black mb-6">{postId.data.title}</h1>
      <p className="w-[60%] mx-auto font-semibold mb-2 leading-7">
        {postId.data.body}
      </p>
      <p className="font-semibold text-lg mb-2">
        Tags:
        {postId.data.tags.map((tag: any, i: number) => {
          return (
            <span className="flex flex-col font-medium" key={i}>
              {tag}
            </span>
          );
        })}
      </p>
      <p className="text-lg font-semibold">
        Reactions: <span className="font-medium">{postId.data.reactions}</span>
      </p>
    </>
  );
};

export default PostList;
