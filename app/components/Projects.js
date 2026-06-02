"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Review Dei",
    desc: "ReviewDei Is a review and rating platform where users can check company reviews and ratings before purchasing products or services online. Users can share their experiences through ratings and reviews, helping others make informed decisions based on real customer feedback.",
    img: "/reviewdei.png",
    tech: ["TypeScript", "Next.js", "Tailwind CSS","Express.js","MongoDB","Mongoose ORM", "Next Auth"],
    frontend: "",
    backend: "",
    live: "https://www.reviewdei.com/",
  },
  {
    title: "ILM Review",
    desc: "An Islamic online course review platform where users can discover academies by filtering coursesbased on topic, gender, and language. Users can submit ratings and reviews, with separate review systemsfor male, female, and kids. The platform also includes an admin dashboard to manage academies, reviews,and platform content.",
    img: "/ilmreview.png",
    tech: ["TypeScript", "Next.js", "Tailwind CSS","Shadcn ui","Express.js","MongoDB","Mongoose ORM"],
    frontend: "https://github.com/siam-26/Islamic-Product-List-Next-ClientSide",
    backend: "https://github.com/siam-26/Islamic-Product-server",
    live: "https://ilmreview.vercel.app/",
  },
  {
    title: "Disney Plus Clone",
    desc: "A movie streaming platform clone featuring secure Firebase authentication for user signup and login, interactive hover-triggered background videos to enhance engagement, and a fully responsivedesign optimized for mobile, tablet, and desktop experiences.",
    img: "/disneyplus.png",
    tech: ["React", "Redux", "Styled Components", "Firebase Firestore"],
    frontend: "https://github.com/siam-26/Disney-plus-clone",
    backend: "",
    live: "https://disney-plus-clone-fd976.web.app/",
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isCarousel = projects.length > 3; // 🔥 MAIN LOGIC

  useEffect(() => {
    if (!isCarousel) return;

    const el = scrollRef.current;

    const handleScroll = () => {
      if (!el) return;

      const scrollLeft = el.scrollLeft;
      const width = el.offsetWidth;
      const index = Math.round(scrollLeft / width);

      setActiveIndex(index);
    };

    el?.addEventListener("scroll", handleScroll);

    return () => el?.removeEventListener("scroll", handleScroll);
  }, [isCarousel]);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        {/* GRID (LG when <=3 projects) */}
        {!isCarousel && (
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}

        {/* CAROUSEL (SM/MD always + LG when >3) */}
        {isCarousel && (
          <>
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth lg:flex lg:grid-cols-none no-scrollbar">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[280px] lg:min-w-[320px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {/* Indicator */}
            <div className="mt-6 text-center text-sm text-gray-400">
              {activeIndex + 1} / {projects.length} Projects
            </div>
          </>
        )}

      </div>
    </section>
  );
}

/* ------------------ CARD COMPONENT ------------------ */

function ProjectCard({ project }) {
  return (
    <>
      <div className="relative">
        <img
          src={project.img}
          alt={project.title}
          className="h-48 w-full object-cover opacity-90"
        />

        {/* Always visible links */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
  {project.frontend && (
    <Link
      href={project.frontend}
      target="_blank"
      className="rounded-full border-2 border-cyan-400 bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-300"
    >
      Frontend
    </Link>
  )}

  {project.backend && (
    <Link
      href={project.backend}
      target="_blank"
      className="rounded-full border-2 border-cyan-400 bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-300"
    >
      Backend
    </Link>
  )}

  {project.live && (
    <Link
      href={project.live}
      target="_blank"
      className="rounded-full border-2 border-cyan-400 bg-cyan-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
    >
      Live
    </Link>
  )}
</div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="mt-2 text-sm text-gray-400">
          {project.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
  {project.tech.map((t) => (
    <span
      key={t}
      className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.15)]"
    >
      {t}
    </span>
  ))}
</div>
      </div>
    </>
  );
}