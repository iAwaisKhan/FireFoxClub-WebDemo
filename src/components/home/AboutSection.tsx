"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURES_DATA } from "@/constants/data";

export default function AboutSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0a0402]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left text area */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 space-y-8">
                        <div>
                            <span className="text-brand-orange text-xs font-bold tracking-[0.2em] uppercase bg-brand-orange/10 px-3 py-1 border border-brand-orange/20 rounded-sm">Initiative Overview</span>
                            <h2 className="text-4xl md:text-5xl font-black italic uppercase mt-4 mb-6 leading-tight">
                                What is <span className="text-brand-orange drop-shadow-[0_0_15px_rgba(255,113,57,0.5)]">MFC</span>?
                            </h2>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed font-medium">
                            The Mozilla Firefox Club is a university-based community powered by Mozilla. We are passionate developers, designers, and tech enthusiasts who believe in the power of open-source and the open web.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed font-medium">
                            Whether you&apos;re a seasoned coder or just starting out, there&apos;s a place for you here to learn, build, and grow together.
                        </p>

                        <div className="pt-4">
                            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-[#110602] border border-brand-orange/30 text-white font-bold text-sm tracking-widest uppercase hover:bg-brand-orange hover:border-brand-orange transition-all group">
                                Read our full story <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Bento Grid */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 w-full">
                        <div className="grid grid-cols-2 gap-4 auto-rows-[160px]">
                            {/* Feature 1 - Large box */}
                            <div className="col-span-2 md:col-span-1 row-span-2 relative p-8 rounded-lg overflow-hidden group bg-gradient-to-br from-[#1a0a00] to-[#0a0402] border border-white/5 hover:border-brand-orange/50 transition-all shadow-2xl">
                                <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange group-hover:w-full group-hover:opacity-5 transition-all duration-500"></div>
                                <div className="text-brand-orange mb-6 p-4 rounded-full bg-brand-orange/10 w-fit group-hover:scale-110 transition-transform">{FEATURES_DATA[0].icon}</div>
                                <h3 className="text-2xl font-black italic uppercase mb-2 text-white">{FEATURES_DATA[0].title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed font-medium">{FEATURES_DATA[0].desc}</p>
                            </div>

                            {/* Feature 2 - Small box */}
                            <div className="col-span-1 relative p-6 rounded-lg overflow-hidden group bg-[#0f0603] border border-white/5 hover:border-brand-yellow/50 transition-all">
                                <div className="text-brand-yellow mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform origin-left">{FEATURES_DATA[1].icon}</div>
                                <h3 className="text-lg font-bold uppercase mb-1 text-gray-200">{FEATURES_DATA[1].title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{FEATURES_DATA[1].desc}</p>
                            </div>

                            {/* Feature 3 - Small box */}
                            <div className="col-span-1 relative p-6 rounded-lg overflow-hidden group bg-gradient-to-tr from-brand-orange/20 to-[#0f0603] border border-brand-orange/20">
                                <div className="text-white mb-3 group-hover:scale-110 transition-transform origin-left">{FEATURES_DATA[2].icon}</div>
                                <h3 className="text-lg font-bold uppercase mb-1 text-white">{FEATURES_DATA[2].title}</h3>
                                <p className="text-xs text-brand-orange/80 leading-relaxed">{FEATURES_DATA[2].desc}</p>
                            </div>

                            {/* Feature 4 - Medium flat box */}
                            <div className="col-span-2 relative p-6 rounded-lg overflow-hidden group bg-[#0f0603] border border-white/5 hover:border-white/20 transition-all flex items-center gap-6">
                                <div className="text-brand-purple p-4 rounded-full bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white transition-colors">{FEATURES_DATA[3].icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase mb-1 text-gray-200">{FEATURES_DATA[3].title}</h3>
                                    <p className="text-sm text-gray-500">{FEATURES_DATA[3].desc}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
