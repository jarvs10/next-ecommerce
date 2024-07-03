import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const CreatePosts = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/new");
  }

  return (
    <div className="pt-20 text-center">
      <h1 className="text-5xl font-bold mb-10">Create Post</h1>

      <form
        action={createPost}
        className="text-center bg-white p-4 mb-4 w-[35%] mx-auto"
      >
        <div>
          <input
            type="text"
            className="py-2 outline outline-1 rounded-md outline-slate-300 px-2 w-full mb-4 overflow-hidden"
            name="title"
            id="title"
            placeholder="Title"
          />
          <textarea
            className="py-2 outline outline-1 rounded-md outline-slate-300 px-2 w-full mb-4 overflow-hidden"
            name="description"
            id="description"
            placeholder="Description"
            rows={5}
          ></textarea>

          <div className="flex justify-center gap-2 items-center mb-2">
            <label>Published</label>
            <input type="checkbox" name="published" />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 py-2 px-5 rounded-md text-white font-bold w-full"
          >
            Submit
          </button>
        </div>
      </form>

      <LogoutLink className="bg-black hover:bg-black/80 py-2 px-5 text-white font-bold rounded-md">
        Logout
      </LogoutLink>
    </div>
  );
};

export default CreatePosts;
