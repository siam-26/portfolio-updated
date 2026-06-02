"use client";

import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="lg:pr-12">
            <h2 className="text-4xl font-bold">About Me</h2>

            <p className="mt-6 text-gray-400 text-xl leading-relaxed">
              I am a dedicated Web Application Developer with strong expertise in JavaScript and React.js, focused on building modern, scalable, and high-performance web applications. I have a strong interest in creating smooth user experiences and clean, maintainable code.
<br/><br/>
I enjoy turning ideas into real-world applications through thoughtful UI design and efficient development practices. Problem-solving is a core part of my mindset, and I constantly challenge myself to learn new technologies, improve my skills, and stay aligned with industry trends in web development. 
            </p>

            <div className="mt-8">
              <Link
  href="https://drive.google.com/file/d/1TMOHKxlxRk3eFhYz1MipZZnJ6ChDVNAA/view?usp=sharing"
  target="_blank"
  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium bg-[#cb450c] text-white transition hover:bg-white hover:text-black"
>
  Get Resume
</Link>
            </div>
          </div>

          {/* RIGHT SKILLS */}
<div className="lg:pl-12 lg:border-l lg:border-white/20">            <h3 className="text-2xl font-semibold">Skills</h3>

            {/* Languages */}
            <div className="mt-6">
              <h4 className="text-lg font-medium text-gray-300">
                Language:
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "C", "C++"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1  text-cyan-300 hover:bg-cyan-500/20 transition font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="mt-6">
              <h4 className="text-lg font-medium text-gray-300">
                Frontend:
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {["React", "Next.js", "Redux", "Tailwind CSS", "Shadcn Ui"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1  text-cyan-300 hover:bg-cyan-500/20 transition font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="mt-6">
              <h4 className="text-lg font-medium text-gray-300">
                Backend:
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Node.js", "Express", "MongoDB", "Mongoose"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1  text-cyan-300 hover:bg-cyan-500/20 transition font-semibold"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Tools */}
            <div className="mt-6">
              <h4 className="text-lg font-medium text-gray-300">
                Tools:
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {["GitHub", "Firebase", "Next Auth", "Chrome Dev Tools","VS Code", "Postman"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-cyan-300 hover:bg-cyan-500/20 transition font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}