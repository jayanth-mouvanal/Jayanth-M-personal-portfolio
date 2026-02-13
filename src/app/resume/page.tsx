"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Download, ArrowLeft, Award, Briefcase, GraduationCap, Code2, ShieldCheck, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
            {/* Header / Actions - Hidden on Print */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-4 print:hidden">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-cyan-600 transition-all font-bold shadow-lg shadow-slate-200"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>
            </div>

            <main className="max-w-5xl mx-auto px-8 py-16 print:p-0 print:max-w-full">
                {/* Resume Header */}
                <header className="mb-12 border-b-4 border-slate-900 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-2 uppercase">
                                Jayanth M
                            </h1>
                            <p className="text-xl md:text-2xl font-bold text-cyan-600 uppercase tracking-widest">
                                Lead Software Engineer | Pega Architect
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium text-slate-600">
                            <a href="mailto:jayofficial113@gmail.com" className="flex items-center gap-2 hover:text-cyan-600">
                                <Mail className="w-4 h-4 text-slate-400" /> jayofficial113@gmail.com
                            </a>
                            <p className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-slate-400" /> Bangalore, India
                            </p>
                            <a href="https://linkedin.com/in/jayanth-mouvanal/" className="flex items-center gap-2 hover:text-cyan-600">
                                <Linkedin className="w-4 h-4 text-slate-400" /> linkedin.com/in/jayanth-mouvanal
                            </a>
                            <a href="https://github.com/jayanth-mouvanal" className="flex items-center gap-2 hover:text-cyan-600">
                                <Github className="w-4 h-4 text-slate-400" /> github.com/jayanth-mouvanal
                            </a>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Summary & Experience */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Summary */}
                        <section>
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                <UserIcon /> Professional Summary
                            </h2>
                            <p className="text-slate-700 leading-relaxed text-lg">
                                10+ years experienced Pega developer with full SDLC experience. Involved in Designing and implementing use case, Pega Unit testing, defect fixing, production support, platform upgrade, and process improvement activities. Expert in architecting high-performance enterprise systems and pioneering autonomous AI workflows.
                            </p>
                        </section>

                        {/* Experience */}
                        <section className="space-y-8">
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                <Briefcase className="w-4 h-4" /> Experience
                            </h2>

                            <ExperienceItem
                                company="Optum Global Solutions"
                                role="Lead Software Engineer"
                                period="Sep 2021 – Present"
                                points={[
                                    "Creation of Custom DX API modelling the framework to maximize reusability and performance.",
                                    "Encapsulating steps for Error handling, Request response mapping, logging and monitoring in a single activity providing appropriate Extension points.",
                                    "Leveraged class specialization for healthcare clients to support modern User Interfaces used by Pharmacists to decision Prior Authorization requests.",
                                    "Created various REST Services for exposing application functionalities to external applications.",
                                    "Created a framework for Splunk dashboard for analyzing logs effectively.",
                                    "Leading the cross-functional scrum team to deliver best-in-class healthcare software solutions."
                                ]}
                            />

                            <ExperienceItem
                                company="Infosys LTD"
                                role="Consultant / Senior Associate"
                                period="Dec 2018 – Sep 2021"
                                points={[
                                    "Led large-scale Pega Infinity (8.x) migrations and Customer Service framework implementations for global clients like The Children's Place and Mondelez.",
                                    "Architected and deployed sophisticated Conversational AI modules including NLP-driven Email Bots and Web Chatbots.",
                                    "Proposed and implemented new Pega 8.5 functionalities to maximize ROI for customers.",
                                    "Pioneered digital transformation by migrating legacy database systems (Oracle to Postgres).",
                                    "Established robust DevOps pipelines using Deployment Manager and Pega Diagnostic Center (PDC).",
                                    "Improved UI performance and overall application AHT for complex enterprise systems."
                                ]}
                            />

                            <ExperienceItem
                                company="TCS LTD"
                                role="Senior System Engineer"
                                period="Oct 2015 – Nov 2018"
                                points={[
                                    "Architected and upgraded mission-critical Pega 6.x and 7.1.6 applications for AIG (US & Japan) within the Insurance domain.",
                                    "Spearheaded end-to-end development of a high-performance premium calculation engine exposed as a scalable REST Service.",
                                    "Collaborated on-site in Tokyo with Japanese SMEs to perform impact analysis and lead successful production migrations.",
                                    "Engineered sophisticated UI components and robust background integrations while maintaining strict adherence to Pega Guardrails."
                                ]}
                            />
                        </section>
                    </div>

                    {/* Right Column: Skills, Certs, Awards, Education */}
                    <div className="space-y-12">
                        {/* Technical Arsenal */}
                        <section>
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                <Code2 className="w-4 h-4" /> Technical Skills
                            </h2>
                            <div className="space-y-6">
                                <SkillGroup title="Pega Platform" skills={["Pega 8.x/7.x/6.x", "Customer Service", "PDC", "Low-Code App Studio", "Case Management", "Pega Cloud", "Deployment Manager", "DevOps", "UI/UX", "KM", "BIX Extract"]} />
                                <SkillGroup title="AI & Integration" skills={["Conversational Channels", "Pega NLP", "Text Analytics", "Web Mashup", "REST/SOAP Services", "Custom DX API", "Kibana", "Splunk", "Grafana"]} />
                                <SkillGroup title="Tools & Process" skills={["Agile Studio", "JIRA", "ALM", "ServiceNow", "Panaya", "Agile/Scrum", "Onshore-Offshore Model", "Release Management"]} />
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" /> Certifications
                            </h2>
                            <ul className="space-y-3">
                                <li className="font-bold text-slate-800 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> CLSA (Part 1)</li>
                                <li className="font-bold text-slate-800 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> CPDC (8.0)</li>
                                <li className="font-bold text-slate-800 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> CSSA (7.4)</li>
                                <li className="font-bold text-slate-800 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> CSA (7.1)</li>
                            </ul>
                        </section>

                        {/* Awards */}
                        <section>
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                <Award className="w-4 h-4" /> Awards
                            </h2>
                            <ul className="space-y-4">
                                <AwardItem title="Optum Bravo Award" desc="For excellence in lead engineering" />
                                <AwardItem title="Most Valuable Player Award" desc="Highest recognition for project impact" />
                                <AwardItem title="Infosys On the Spot Award" desc="Fast delivering POC in App Studio" />
                                <AwardItem title="TCS On the Spot Award" desc="Policy Upload Functionality" />
                                <AwardItem title="Best Team Award" desc="Consistently high-performing output" />
                            </ul>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" /> Education
                            </h2>
                            <div>
                                <h3 className="font-bold text-slate-900">B-Tech (Electrical & Electronics)</h3>
                                <p className="text-slate-600 text-sm">Mar Athanasius College of Engineering</p>
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>CGPA: 8.59</span>
                                    <span>2015</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Print Footer */}
                <footer className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs hidden print:block">
                    Professional Resume of Jayanth M — Generated from jayanthmouvanal.com
                </footer>
            </main>
        </div>
    );
}

function ExperienceItem({ company, role, period, points }: { company: string; role: string; period: string; points: string[] }) {
    return (
        <div className="relative pl-6 border-l-2 border-slate-100 pb-2">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-cyan-500" />
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight">{company}</h3>
                    <p className="text-cyan-600 font-bold uppercase tracking-wider text-xs">{role}</p>
                </div>
                <span className="font-mono text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">{period}</span>
            </div>
            <ul className="space-y-2">
                {points.map((pt, i) => (
                    <li key={i} className="text-slate-600 text-sm flex gap-2">
                        <span className="text-cyan-500 shrink-0">▹</span>
                        <span>{pt}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
    return (
        <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase mb-3 underline decoration-cyan-500/30 underline-offset-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                    <span key={s} className="px-2 py-1 bg-slate-50 text-slate-700 text-[10px] font-bold rounded border border-slate-100">
                        {s}
                    </span>
                ))}
            </div>
        </div>
    );
}

function AwardItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="group">
            <h3 className="font-bold text-slate-800 text-sm group-hover:text-cyan-600 transition-colors">{title}</h3>
            <p className="text-slate-500 text-[11px] leading-tight italic">{desc}</p>
        </div>
    );
}

const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);
