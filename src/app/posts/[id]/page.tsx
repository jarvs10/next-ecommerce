import PostList from "@/components/PostList";
import React, { Suspense } from "react";
import Loading from "../loading";

const PostDetail = ({params}: {params: {id: string}}) => {

  return (
    <div className="pt-20 mb-4 text-center">

      <Suspense fallback={<Loading />}>
        <PostList params={params} />
      </Suspense>
    </div>
  );
};

export default PostDetail;
