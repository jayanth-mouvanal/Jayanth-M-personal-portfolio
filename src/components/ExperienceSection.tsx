"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
    {
        company: "CBA",
        title: "Solution Lead",
        period: "February 2025 - Present",
        description: [
            "Directed the technical strategy for large-scale digital transformation initiatives in the banking sector.",
            "Optimized enterprise workflows resulting in significant improvements in operational efficiency.",
            "Mentored junior engineers and architects on best practices in modular software design.",
        ],
    },
    {
        company: "Optum",
        title: "Lead Software Engineer",
        period: "September 2021 - February 2025",
        description: [
            "Architected and engineered custom DX APIs and highly reusable frameworks to optimize pharmacist decision-making for Prior Authorization requests at United Health Group.",
            "Designed a robust integration layer for error handling, logging, and monitoring, enabling healthcare-specific class specialization and high-performance system interactions.",
            "Spearheaded the development of a Splunk dashboard framework for log analytics and governed the lifecycle of various REST and SOAP services for global enterprise integration.",
            "Led cross-functional scrum teams in an engineering leadership capacity, ensuring best-in-class delivery of critical healthcare software solutions.",
        ],
    },
    {
        company: "Infosys",
        title: "Consultant / Senior Associate",
        period: "December 2018 - October 2021",
        description: [
            "Led large-scale Pega Infinity (8.x) migrations and Customer Service framework implementations for global clients like The Children's Place and Mondelez, focusing on business value and ROI maximization.",
            "Architected and deployed sophisticated Conversational AI modules, including NLP-driven Email Bots, Web Chatbots, and integrations with Alexa, WhatsApp, and Apple Business Chat.",
            "Pioneered digital transformation by migrating legacy database systems (Oracle to Postgres) and implementing robust DevOps pipelines using Deployment Manager and Pega Diagnostic Center (PDC).",
            "Drove innovation through high-impact POCs using Cosmos UI and App Studio, while mentoring global development teams on Pega guardrail compliance and SAP integration patterns.",
        ],
    },
    {
        company: "TCS",
        title: "Senior System Engineer",
        period: "October 2015 - November 2018",
        description: [
            "Architected and upgraded mission-critical Pega 6.x and 7.1.6 applications for AIG (US & Japan) within the Insurance domain, managing high-throughput causality Lines of Business.",
            "Spearheaded the end-to-end development of a high-performance premium calculation engine, exposed as a scalable REST Service for real-time processing.",
            "Collaborated on-site in Tokyo with Japanese SMEs to perform impact analysis, design complex use cases, and lead successful production migrations.",
            "Engineered sophisticated UI components and robust background integrations (SOAP/REST/Agents) while maintaining strict adherence to Pega Guardrails.",
        ],
    },
];

export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="py-24 bg-slate-950">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Work Experience
                        <span className="block h-1 w-20 bg-cyan-500 mt-2" />
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Tab List */}
                    <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-slate-800 min-w-[150px]">
                        {jobs.map((job, index) => (
                            <button
                                key={job.company}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 md:flex-none px-5 py-3 text-left font-mono text-sm transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:mb-0 md:-ml-[2px] ${activeTab === index
                                    ? "text-cyan-400 bg-cyan-400/5 border-cyan-400"
                                    : "text-slate-500 hover:text-cyan-400 hover:bg-slate-900 border-transparent"
                                    }`}
                            >
                                {job.company}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-slate-200">
                                    {jobs[activeTab].title} <span className="text-cyan-400 font-medium">@ {jobs[activeTab].company}</span>
                                </h3>
                                <p className="font-mono text-xs text-cyan-500/80 mt-1 mb-6 uppercase tracking-wider">
                                    {jobs[activeTab].period}
                                </p>

                                <ul className="space-y-4">
                                    {jobs[activeTab].description.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-400 text-base leading-relaxed">
                                            <span className="text-cyan-400 mt-1.5 flex-shrink-0 text-xs">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
