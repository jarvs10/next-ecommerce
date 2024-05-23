'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className="py-6 px-8 flex justify-between items-center border-b border-b-slate-200">
      <section>
        <Link className="text-white bg-black py-2 px-4 rounded-md" href="/" passHref>
          J
        </Link>
      </section>

      <nav className="flex gap-4">
        <Link className={pathname === '/' ? 'text-black text-lg font-semibold underline underline-offset-4 decoration-4 decoration-indigo-600' : 'text-lg font-semibold text-slate-400'} href={"/"} passHref>
          Home
        </Link>
        <Link className={pathname === '/posts' ? 'text-black text-lg font-semibold underline underline-offset-4 decoration-4 decoration-indigo-600' : 'text-lg font-semibold text-slate-400'} href={"/posts"} passHref>
          Posts
        </Link>
        <Link className={pathname === '/new' ? 'text-black text-lg font-semibold underline underline-offset-4 decoration-4 decoration-indigo-600' : 'text-lg font-semibold text-slate-400'} href={"/new"} passHref>
          NewPost
        </Link>
      </nav>
    </nav>
  );
};

export default Navbar;
