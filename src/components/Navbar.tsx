"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LogoutButton from "./LogoutButton";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";

const Navbar = () => {
  const { user } = useKindeBrowserClient();

  const pathname = usePathname();

  return (
    <nav className="py-6 px-8 flex justify-between items-center border-b border-b-slate-200">
      <section>
        <Link
          className="text-white bg-black py-2 px-4 rounded-md"
          href="/"
          passHref
        >
          Blog
        </Link>
      </section>

      <nav className="flex gap-4 items-center">
        <Link
          className={
            pathname === "/"
              ? "text-indigo-500 text-lg font-semibold underline underline-offset-4 decoration-4 decoration-indigo-600"
              : "text-lg font-semibold text-slate-500"
          }
          href={"/"}
          passHref
        >
          Home
        </Link>
        <Link
          className={
            pathname === "/posts"
              ? "text-indigo-500 text-lg font-semibold underline underline-offset-4 decoration-4 decoration-indigo-600"
              : "text-lg font-semibold text-slate-500"
          }
          href={"/posts"}
          passHref
        >
          Posts
        </Link>
        <Link
          className={
            pathname === "/new"
              ? "text-indigo-500 text-lg font-semibold underline underline-offset-4 decoration-4 decoration-indigo-600"
              : "text-lg font-semibold text-slate-500"
          }
          href={"/new"}
          passHref
        >
          NewPost
        </Link>
        {user && (
          <>
            <Link
              className={
                pathname === "/profile"
                  ? "text-indigo-700 text-lg font-semibold underline underline-offset-4 decoration-4 decoration-indigo-600"
                  : "text-lg font-semibold text-slate-400"
              }
              href={"/profile"}
              passHref
            >
              <Image
                className="w-auto h-auto rounded-3xl"
                src={user?.picture as string}
                width={40}
                height={100}
                alt="logo"
              />{" "}
            </Link>

            <LogoutButton />
          </>
        )}
        <ModeToggle />
      </nav>
    </nav>
  );
};

export default Navbar;
