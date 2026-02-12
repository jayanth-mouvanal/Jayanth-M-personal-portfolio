"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Globe } from "lucide-react";

export default function TerminalHero() {
    const [text, setText] = useState("");
    const fullText = `> INITIALIZING SYSTEM...
> LOADING PROFILE: JAYANTH...
> DETECTING SKILLS: PEGA, ENTERPRISE ARCHITECTURE...
> PIVOTING TO: AI & AGENTIC WORKFLOWS...
> STATUS: ONLINE.
> WELCOME TO THE FUTURE.`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 40);
        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-slate-100 p-4">

            {/* Background Grid & Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute top-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#020617_100%)] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-4xl"
            >
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/80">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                            <Terminal className="w-3 h-3" />
                            <span>agent_log.tsx</span>
                        </div>
                        <div className="w-8" />
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 md:p-10 font-mono text-sm md:text-base lg:text-lg min-h-[300px] text-green-400">
                        <pre className="whitespace-pre-wrap leading-relaxed">
                            {text}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2.5 h-5 ml-1 align-middle bg-green-400"
                            />
                        </pre>

                        {text.length === fullText.length && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                                    <Code2 className="w-4 h-4" />
                                    <span>Next.js Architect</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-purple-500/50 hover:text-purple-400 transition-colors cursor-default">
                                    <Cpu className="w-4 h-4" />
                                    <span>Agentic AI</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
                                    <Globe className="w-4 h-4" />
                                    <span>Enterprise Systems</span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Hero Title Overlay - optional, maybe for below */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 text-center z-10"
            >
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
                    JAYANTH M
                </h1>
                <p className="text-slate-400 mt-2 text-lg">Bridging Enterprise & AI</p>
            </motion.div>

        </section>
    );
}
