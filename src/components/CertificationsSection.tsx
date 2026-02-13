"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award, ShieldCheck, Download } from "lucide-react";

const certifications = [
    {
        title: "Certified Pega Decisioning Consultant",
        label: "CPDC",
        version: "Version 8",
        date: "Aug 5, 2019",
        image: "/PEGAPCDC80V1_2019_Current.png",
        link: "https://accounts.pega.com/profile/JAYANTHMOUVANAL/achievement/BPEGAPCDC80V1_2019-PEGAPCDC80V1_2019"
    },
    {
        title: "Certified Pega Senior System Architect",
        label: "CSSA",
        version: "Version 7.4",
        date: "Apr 1, 2019",
        image: "/PEGACSSA74V1_Current.png",
        link: "https://accounts.pega.com/profile/JAYANTHMOUVANAL/achievement/BPEGACSSA74V1-PEGACSSA74V1"
    },
    {
        title: "Certified Pega System Architect",
        label: "CSA",
        version: "Version 7.1",
        date: "Dec 30, 2016",
        image: "/PEGACSA71V1_Current.png",
        link: "https://accounts.pega.com/profile/JAYANTHMOUVANAL/achievement/BPEGACSA71V1-PEGACSA71V1"
    }
];



export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <ShieldCheck className="w-3.4 h-3.4" />
                        Achievements
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Pega Certifications
                        <span className="block h-1 w-20 bg-cyan-500 mt-4 mx-auto" />
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Industry-recognized credentials validating technical excellence and multi-domain expertise in the Pega ecosystem.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full bg-slate-900/30 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-cyan-500/40 hover:bg-slate-900/50 hover:shadow-2xl hover:shadow-cyan-500/5 overflow-hidden">

                                {/* Image Container */}
                                <div className="relative w-40 h-40 mb-8 z-10 p-2">
                                    <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl transform group-hover:scale-125 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 250px"
                                        className="object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Texts */}
                                <div className="relative z-10 flex-1">
                                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-lg bg-slate-950/50 border border-slate-800">
                                        <Award className="w-4 h-4 text-cyan-500" />
                                        <span className="text-xs font-bold text-slate-400">
                                            {cert.label}
                                        </span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-slate-300 font-medium">{cert.version}</p>
                                        <p className="text-xs text-slate-500 tabular-nums">{cert.date}</p>
                                    </div>
                                </div>

                                {/* Download/Open Icon Link */}
                                <div className="mt-8 flex gap-3 w-full">
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -2 }}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-cyan-900/20"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Open PDF
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
