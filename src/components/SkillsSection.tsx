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
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Technical Arsenal
                        <span className="block h-1 w-20 bg-cyan-500 mt-2 mx-auto" />
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg">
                        The specialized tools and technologies I use to build the future.
                    </p>
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
                            <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-4 pb-2 border-b border-slate-800/50">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="text-slate-300 flex items-center gap-2 font-mono text-sm leading-relaxed">
                                        <span className="text-cyan-500/50 text-[10px]">▹</span>
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
