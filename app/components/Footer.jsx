"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6">

        {/* Name */}
        <h2 className="text-3xl font-bold md:text-4xl">
          Syed Siam
        </h2>

        {/* Divider */}
<div className="my-6 h-px w-96 bg-white/20" />        {/* Social Icons */}
        <div className="flex gap-6">
          <Link
            href="https://github.com/siam-26"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white hover:text-black"
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/sayed-siam/"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white hover:text-black"
          >
            <FaLinkedinIn size={20} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-sm text-gray-400">
          © 2026 Siam Sayed. All rights reserved.
        </p>

      </div>
    </footer>
  );
}