"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  
  const { user } = useKindeBrowserClient();

  return (
    <div className="flex justify-center items-center py-20 flex-col text-center">
      {
        user === null ? (
          <Link
            className="text-slate-800 hover:font-semibold font-medium"
            href={"/api/auth/login?post_login_redirect_url=/new"}
          >
            Please log in to view your posts.
          </Link>
        ) : (
          <>
            <p className="font-bold uppercase text-xl mb-2">{user?.given_name}</p>
            <p className="font-bold text-xl mb-2">{user?.email}</p>
            <Image
              className="w-auto h-auto rounded-3xl"
              src={user?.picture as string}
              width={80}
              height={100}
              alt="logo"
            />
          </>
        )
      }
    </div>
  );
};

export default ProfilePage;
