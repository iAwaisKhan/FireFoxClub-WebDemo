"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Globe, Code2, Users, Zap, Shield, Heart,
    ArrowRight, Github, Twitter, Linkedin,
    Flame, Star, BookOpen, Trophy
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const STATS = [
    { value: "500+", label: "Active Members", icon: Users },
    { value: "50+", label: "Events Hosted", icon: Star },
    { value: "3+", label: "Years Running", icon: Trophy },
    { value: "20+", label: "Open Source Contributions", icon: Code2 },
];

const VALUES = [
    {
        icon: Globe,
        title: "Open Web",
        description: "We believe the internet should be open, accessible, and free for everyone — not controlled by a few.",
        color: "#8a37f5",
    },
    {
        icon: Shield,
        title: "Privacy First",
        description: "Your data, your rules. We advocate for digital privacy and educate students on staying secure online.",
        color: "#06b6d4",
    },
    {
        icon: Code2,
        title: "Build in Public",
        description: "We ship real projects, contribute to open source, and learn by doing — not just by watching.",
        color: "#f59e0b",
    },
    {
        icon: Heart,
        title: "Community Driven",
        description: "Every event, workshop, and hackathon is built by students, for students. No hierarchy, just passion.",
        color: "#ec4899",
    },
    {
        icon: BookOpen,
        title: "Always Learning",
        description: "From web fundamentals to AI — we host workshops, talks, and bootcamps to keep skills sharp.",
        color: "#10b981",
    },
    {
        icon: Zap,
        title: "Move Fast",
        description: "We ship, iterate, and improve. Imperfect action beats perfect inaction every time.",
        color: "#f97316",
    },
];

const TIMELINE = [
    { year: "2021", title: "Club Founded", desc: "A small group of Firefox enthusiasts at VIT Bhopal started the Mozilla Firefox Club." },
    { year: "2022", title: "First Hackathon", desc: "Hosted our first 24-hour hackathon with 100+ participants and 20+ projects built." },
    { year: "2023", title: "Mozilla Recognition", desc: "Officially recognized by Mozilla Foundation as a Campus Club. Community grew to 300+ members." },
    { year: "2024", title: "Open Source Sprint", desc: "Organized a month-long open source sprint — 20+ PRs merged into real Mozilla projects." },
    { year: "2025", title: "500 Members", desc: "Hit 500 active members. Launched our mentorship program pairing juniors with industry devs." },
];

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const Icon = stat.icon;
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="relative group"
        >
            <div className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon size={22} className="text-brand-purple mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
        </motion.div>
    );
}

function ValueCard({ value, index }: { value: typeof VALUES[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const Icon = value.icon;
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 30% 30%, ${value.color}15, transparent 70%)` }}
            />
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${value.color}18`, border: `1px solid ${value.color}30` }}
            >
                <Icon size={20} style={{ color: value.color }} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
        </motion.div>
    );
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">

            {/* ── WHO WE ARE (split layout) ── */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left — text */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Who We Are</span>
                            </div>
                            <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                                Students building
                                <span className="text-brand-purple"> the web</span>
                                <br />they believe in.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                The Mozilla Firefox Club at VIT Bhopal is a student-led community dedicated to the open web philosophy. We run workshops, hackathons, and open source sprints — not for resumes, but because we genuinely care about the internet staying open.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Whether you're a first-year curious about web dev or a final-year contributing to Mozilla projects — there's a place for you here.
                            </p>
                            <div className="flex items-center gap-3">
                                {[Github, Twitter, Linkedin].map((Icon, i) => (
                                    <button key={i} className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-purple/50 hover:bg-brand-purple/10 transition-all">
                                        <Icon size={16} />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — glowing card stack */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            {/* Background card */}
                            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border border-brand-purple/20 bg-brand-purple/5" />
                            <div className="absolute -top-2 -right-2 w-full h-full rounded-3xl border border-white/5 bg-white/[0.02]" />

                            {/* Main card */}
                            <div className="relative rounded-3xl border border-white/10 bg-[#0e0e0e] p-8 overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/20 rounded-full blur-[60px]" />

                                {/* Firefox logo area */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple/30 to-brand-cyan/20 border border-white/10 flex items-center justify-center">
                                        <Flame size={28} className="text-brand-purple" />
                                    </div>
                                    <div>
                                        <div className="text-white font-black text-lg">Mozilla Firefox Club</div>
                                        <div className="text-gray-500 text-sm">VIT Bhopal University</div>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {["Open Source", "Web Dev", "Privacy", "Hackathons", "Mozilla", "Community"].map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Mini stats */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[["500+", "Members"], ["50+", "Events"], ["3+", "Years"]].map(([val, lbl]) => (
                                        <div key={lbl} className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                                            <div className="text-white font-black text-xl">{val}</div>
                                            <div className="text-gray-600 text-xs">{lbl}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
}
