import React, { useEffect, useRef } from "react";
import { Github, Mail, Linkedin, ChevronDown } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import useScrollAnimation from "./hooks/useScrollAnimation";
import user from "./user.png";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const { animate } = useScrollAnimation();

  useEffect(() => {
    animate();
  }, [animate]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen">
      <section className="min-h-screen relative flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className="text-6xl md:text-8xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
            data-animate="true"
          >
            Hello, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Vishal
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out"
            data-animate="true"
          >
            Full Stack Developer & Coding Enthusiast
          </p>
          <div
            className="flex justify-center gap-6 opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out"
            data-animate="true"
          >
            <a
              href="https://github.com/vishal-gohil12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-gohil-446390230/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vishalgohil3631@gmail.com"
              className="hover:text-purple-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold mb-12 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
            data-animate="true"
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className="opacity-0 transform translate-y-8 transition-all duration-1000 delay-200 ease-out"
              data-animate="true"
            >
              <img
                src={user}
                alt="Profile"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              className="opacity-0 transform translate-y-8 transition-all duration-1000 delay-400 ease-out"
              data-animate="true"
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                Hello! I’m Vishal, a passionate full-stack web developer and
                software enthusiast with a knack for crafting innovative and
                user-friendly digital experiences. With hands-on expertise in
                React, Node.js, and Tailwind CSS, I’ve built dynamic
                applications that solve real-world problems. During my journey,
                I’ve had the privilege of working on diverse projects, from
                developing scalable REST APIs to creating engaging SaaS
                platforms powered by AI.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section ref={projectsRef} className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold mb-12 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
            data-animate="true"
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Alex. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
