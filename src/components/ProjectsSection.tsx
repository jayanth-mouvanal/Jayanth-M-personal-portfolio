"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Jayanth M Portfolio",
            description: "A professional, high-performance portfolio website built by vibe coding with Antigravity, featuring glassmorphism and smooth motion animations.",
            tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
            link: "https://jayanth-m-personal-portfolio.vercel.app/",
            github: "https://github.com/jayanth-mouvanal/Jayanth-M-personal-portfolio"
        },
        {
            title: "Antigravity Learning Agent",
            description: "An experimental agentic workflow using LLMs to self-correct code in real-time. Built with Python and LangChain.",
            tags: ["Python", "LangChain", "AI"],
            link: "#",
            github: "#"
        },
        {
            title: "Enterprise Pega Solution",
            description: "A large-scale case management system for a global financial institution, handling 1M+ transactions daily.",
            tags: ["Pega", "Java", "Oracle"],
            link: "#",
            github: "#"
        },
        {
            title: "AI Resume Builder",
            description: "Next.js application that uses OpenAI to generate tailored resumes based on job descriptions.",
            tags: ["Next.js", "OpenAI API", "Tailwind"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                        <span className="block h-1 w-20 bg-cyan-500 mt-2 mx-auto" />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-500/50 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <Folder className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
