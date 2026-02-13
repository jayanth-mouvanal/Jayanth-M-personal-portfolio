"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Heart } from "lucide-react";

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z" />
    </svg>
);

const PegaIcon = () => (
    <svg viewBox="0 0 250 250" fill="currentColor" className="w-6 h-6 scale-110">
        <path d="m128.5 48.5c-2.4 9.8-2.8 20.1-1.1 30.1-2.7-.5-5.3-1.1-7.8-1.5-57.8-9.4-75.1 19-68.4 41.9-17.6 6.6-34.7 14.5-51.2 23.5 22.6-54.2 71.6-101.9 112.9-108.1 13.6-1.8 17.4 6.9 15.6 14.1zm121 43.5s-2.6 4.5-3.7 6.2c-2.1 2.1-5.2 2.6-7.8 1.2-6-3.7-12.6-6.3-19.4-7.8-25.3 2.3-32.2-8.2-33-9.1s-2.3-.5-1.2 1.3c5.5 9.5 21.9 14 21.9 14 2.4 5.6 3.9 11.5 4.6 17.5-4.3-3.3-8.9-6.1-13.7-8.4-18.8-12.3-39.6-21.2-61.5-26.3 1.6-22.3 12.9-54.7 65.4-46.9 6.2 1.1 12.2 3.4 17.7 6.6l-3.9 4c-1 .6-1.3 1.9-.7 2.9.2.3.4.5.7.7l11.7 8.7c-.4 3.8 1 7.5 3.7 10.1 3.5 4.1 16.9 18.3 18.7 20.2 1.1 1.4 1.3 3.4.5 5.1zm-26.4-31.3c-2.2-.9-4.7-.4-6.4 1.3h-.4l5.8 2.8z" />
        <path d="m133.3 98.3c-28.1 3.4-55.7 10.4-82.1 20.8-6.6-23 10.6-51.3 68.1-41.9 2.8.4 5.5.9 7.8 1.5 1.3 6.7 3.4 13.3 6.2 19.6zm3.2 0c20.7-2.4 41.8.6 61 8.7-18.8-12.3-39.6-21.2-61.5-26.3-.4 5.8-.2 11.6.5 17.3z" />
    </svg>
);

export default function ContactSection() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Get In Touch
                        <span className="block h-1 w-20 bg-cyan-500 mt-2 mx-auto" />
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
                        Although I’m not currently looking for any new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Contact Details Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                                <Mail className="w-6 h-6 text-cyan-400" />
                            </div>
                            <a href="mailto:jayofficial113@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors text-lg font-medium">
                                jayofficial113@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                                <MapPin className="w-6 h-6 text-cyan-400" />
                            </div>
                            <p className="text-slate-400 text-lg">Bangalore, India</p>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-widest opacity-50">Follow Me</h3>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/jayanth-mouvanal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                                    title="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jayanth-mouvanal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                                    title="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://accounts.pega.com/profile/JAYANTHMOUVANAL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                                    title="Pegasystems"
                                >
                                    <PegaIcon />
                                </a>
                                <a
                                    href="https://x.com/jayofficial113"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                                    title="X (Twitter)"
                                >
                                    <XIcon />
                                </a>
                                <a
                                    href="https://www.instagram.com/jayanthmouvanal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                                    title="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    suppressHydrationWarning
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    suppressHydrationWarning
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans"
                                />
                            </div>

                            <div>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Your Message"
                                    suppressHydrationWarning
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none font-sans"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                suppressHydrationWarning
                                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-900/20"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Text */}
                <div className="mt-24 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
                    <p className="flex items-center justify-center gap-1.5">
                        &copy; {year || 2026} Jayanth M. All rights reserved. Built with Passion & Antigravity.
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    </p>
                </div>

            </div>
        </section>
    );
}
