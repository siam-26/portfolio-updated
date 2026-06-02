"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [blink, setBlink] = useState(true);

  const navItems = ["Home", "About", "Projects", "Contact"];

  // blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <h1 className="text-sm font-bold text-white md:text-2xl">
            Siam
            <span className="text-cyan-400">
              {blink ? "_" : " "}
            </span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 transition hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white md:hidden"
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[280px] bg-zinc-950/95 backdrop-blur-xl border-l border-white/10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <h2 className="text-lg font-semibold text-white">Menu</h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col p-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block border-b border-white/10 py-4 text-lg text-gray-300 transition hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}