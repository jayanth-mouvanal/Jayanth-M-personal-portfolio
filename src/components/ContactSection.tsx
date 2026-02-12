"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactSection() {
    return (
        <footer id="contact" className="bg-slate-900 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-2">Let&apos;s Build Something Intelligent</h2>
                    <p className="text-slate-400">Open for opportunities in Agentic AI & Enterprise Architecture.</p>
                </motion.div>

                <div className="flex justify-center gap-6 mb-8">
                    <a href="mailto:contact@jayanthm.dev" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-cyan-600 transition-all">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-[#0077b5] transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-400 transition-all">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>

                <div className="text-slate-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Jayanth M. Built with Next.js, Tailwind, & Antigravity.</p>
                </div>
            </div>
        </footer>
    );
}
