"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Core", items: ["Java", "Python", "TypeScript", "SQL"] },
    { category: "Enterprise", items: ["Pega Platform (CLSA)", "Oracle", "AWS", "Microservices"] },
    { category: "Modern Web", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
    { category: "AI & Agentic", items: ["Antigravity", "OpenClaw", "Vector DBs", "Claude"] },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-slate-950 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">
                        TECHNICAL ARSENAL
                    </h2>
                    <p className="text-slate-400">The tools I use to build the future.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-slate-800 pb-2">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="text-slate-300 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
