"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Server, Brain } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                        From Enterprise to Sentiment
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        With over a decade of architecting rigid, high-scale enterprise systems in Pega, I&apos;ve pivoted to building fluid, intelligent, and agentic workflows that power the next generation of software.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Enterprise Foundation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                            <Server className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-200 mb-3">Enterprise Architect</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            10+ years mastering Pega (CSSA/CLSA), designing robust case management systems, and handling complex enterprise integrations for global clients.
                        </p>
                    </motion.div>

                    {/* Transition Arrow (Desktop Only Visualization) */}
                    <div className="hidden md:flex items-center justify-center text-slate-700">
                        <ArrowRight className="w-8 h-8 animate-pulse" />
                    </div>

                    {/* Card 2: AI Evolution */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors relative z-10">
                            <Brain className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 relative z-10">AI & Antigravity</h3>
                        <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                            Building agentic workflows, exploring LLM capabilities, and creating "Antigravity" – a new paradigm of intelligent, self-correcting software.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
