import prisma from "@/libs/prisma";
import { Blogs } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Posts = async () => {
  const results = await prisma.blogs.findMany();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="text-center pt-20 px-5">
      <h1 className="text-4xl font-bold mb-8">All posts</h1>

      <section>
        {
          user === null? (
            <Link className="text-slate-800 hover:font-semibold font-medium" href={'/api/auth/login?post_login_redirect_url=/new'}>
              Please log in to view your posts.
            </Link>
          ) : (
            results.length === 0 ? (
              <p>No posts found.</p>
            ) : (
              results.map((post: Blogs) => {
                return (
                  <div key={post.id} className="p-2 mb-4">
                    <Link
                      className="hover:underline underline-offset-2"
                      href={`/posts/${post.id}`}
                      passHref
                    >
                      <h2 className="text-lg font-medium mb-2">{post.title}</h2>
                    </Link>
                  </div>
                );
              })
            )
          )
        }
      </section>
    </div>
  );
};

export default Posts;
