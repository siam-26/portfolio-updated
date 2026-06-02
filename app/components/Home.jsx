"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

export default function Home() {
  const roles = [
    "Web Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const current = roles[index % roles.length];

    const updateText = () => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        setSpeed(120);

        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        setSpeed(60);

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(updateText, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed, roles]);

  return (
    <section id="home" className="min-h-[calc(100vh-80px)]">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:items-center">

          {/* Illustration */}
          <div className="order-1 flex justify-center lg:order-2">
            <img
              src="/profile.png"
              alt="Developer Illustration"
              className="h-80 w-80 md:h-[420px] md:w-[420px] lg:h-[480px] lg:w-[480px] object-cover rounded-full lg:border-2 lg:border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.3)]"
            />
          </div>

          {/* Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Syed Siam
            </h1>

            <h2 className="mt-4 text-xl font-medium text-[#cb450c] md:text-2xl">
              {text}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-400 lg:mx-0 mx-auto">
Creating digital solutions that transform and improve user experiences.            </p>

            <div className="mt-8">
              <Link
  href="https://drive.google.com/file/d/1YL4vEqD_lval17gRaiHq5ogA_rnTzJcl/view?usp=drive_link"
  target="_blank"
  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium bg-[#cb450c] text-white transition hover:bg-white hover:text-black"
>
  Get Resume
</Link>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <Link
                href="https://www.linkedin.com/in/sayed-siam/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black"
              >
                <FaLinkedinIn size={22} />
              </Link>

              <Link
                href="https://github.com/siam-26"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black"
              >
                <FaGithub size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}