"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, User, Code, Briefcase, Mail, Award } from "lucide-react";
import Link from "next/link";

const Logo = () => (
    <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-12 h-12 flex items-center justify-center group"
    >
        {/* Hexagon Border */}
        <motion.svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full text-cyan-400 opacity-80 group-hover:opacity-100 group-hover:text-cyan-300 transition-all duration-300"
        >
            <motion.path
                d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
        </motion.svg>

        {/* Letter J */}
        <span className="text-xl font-bold font-mono text-cyan-400 group-hover:text-white transition-colors duration-300 z-10">
            J
        </span>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </motion.div>
);

const navItems = [
    { name: "Home", href: "#", icon: Terminal },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Certifications", href: "#certifications", icon: Award },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 glass"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20"> {/* Increased height for premium feel */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <Logo />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-slate-300 hover:text-cyan-400 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            <motion.a
                                href="/resume"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-2 rounded-md border border-cyan-400 text-cyan-400 text-sm font-bold transition-colors hover:bg-cyan-400/10"
                            >
                                Resume
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <motion.a
                                href="/resume"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 rounded border border-cyan-400 text-cyan-400 text-xs font-bold"
                            >
                                Resume
                            </motion.a>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-300 hover:text-white p-2"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-16 z-40 md:hidden glass border-b border-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950/90">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 block px-3 py-4 rounded-md text-base font-medium"
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
