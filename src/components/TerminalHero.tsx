"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, ArrowRight, Database } from "lucide-react";
import Link from "next/link";

export default function TerminalHero() {
    return (
        <section className="relative pt-32 pb-20 min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-slate-100 p-4">

            {/* Background Grid & Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute top-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#020617_100%)] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-5xl text-center">

                {/* Greeting */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6"
                >
                    Hi, my name is
                </motion.span>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-6 tracking-tight"
                >
                    Jayanth M
                </motion.h1>

                {/* Role */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl md:text-3xl font-medium text-cyan-400/90 mb-8 font-sans"
                >
                    Lead Software Engineer & Tech Enthusiast
                </motion.h2>

                {/* Biography / Expertise */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-4xl mx-auto text-slate-400 text-lg md:text-2xl leading-relaxed mb-12"
                >
                    Architecting <span className="text-white font-semibold">robust enterprise systems</span> and
                    pioneering <span className="text-cyan-400 font-semibold">autonomous AI workflows</span>.
                    I transform complex legacy challenges into scalable, future-ready digital realities.
                </motion.p>

                {/* Tech Pills */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all group">
                        <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Pega Architect</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:border-purple-500/50 hover:text-purple-400 transition-all group">
                        <Cpu className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Agentic AI</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:border-orange-500/50 hover:text-orange-400 transition-all group">
                        <Database className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">AWS</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all group">
                        <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Enterprise Solutions</span>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link
                        href="#projects"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-cyan-400 transition-colors group"
                    >
                        View My Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

        </section>
    );
}
