"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
    const technologies = [
        "TypeScript", "Python", "Agentic AI",
        "AI Workflows", "Pega Blueprint", "Antigravity"
    ];

    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors duration-500">
                            <Image
                                src="/jayanth-profile-v2.jpg"
                                alt="Jayanth M"
                                fill
                                sizes="(max-width: 768px) 100vw, 320px"
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Animated decorative frame */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-500/20 rounded-2xl -z-10 group-hover:-bottom-2 group-hover:-right-2 transition-all duration-500" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            About Me
                            <span className="block h-1 w-20 bg-cyan-500 mt-2" />
                        </h2>

                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Hello! My name is <span className="text-cyan-400 font-medium">Jayanth</span>. I’m a technical architect with a passion for building complex, intelligent systems that live at the scale of the internet. My journey began in 2015, driven by the challenge of architecting high-performance enterprise applications.
                            </p>

                            <p>
                                Throughout my career, I’ve had the privilege of engineering critical solutions for industry leaders like <span className="text-slate-200 uppercase text-sm tracking-widest font-bold">TCS, Infosys, Optum, and CBA</span>. These experiences refined my ability to navigate the intricacies of global-scale infrastructure.
                            </p>

                            <p>
                                Today, I am focused on the cutting edge of <span className="text-purple-400 font-medium italic">Agentic AI</span>. I specialize in rapid software orchestration, bridging the gap between traditional enterprise architecture and the limitless potential of autonomous AI workflows using the <span className="text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-4">Antigravity</span> paradigm.
                            </p>

                            <p>Here are a few technologies I’ve been working with recently:</p>
                        </div>

                        <ul className="grid grid-cols-2 gap-3 mt-8">
                            {technologies.map((tech) => (
                                <li key={tech} className="flex items-center gap-2 text-slate-300 font-mono text-sm">
                                    <span className="text-cyan-500">▹</span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
