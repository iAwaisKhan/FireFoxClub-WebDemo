"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function HeroSection() {
    const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);

    useEffect(() => {
        fetch('/working.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error("Error loading animation:", err));
    }, []);

    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#070301]">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff3e00] rounded-full filter blur-[180px] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Status Badge */}
                        <div className="flex items-center gap-3 px-4 py-1.5 bg-[#1a0a00]/80 border-l-[3px] border-[#ff3e00] mb-8 w-fit backdrop-blur-sm">
                            <span className="text-[#ff3e00] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">System Status: Operational</span>
                        </div>

                        {/* Main Typography */}
                        <h1 className="text-[3.5rem] sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-black italic uppercase leading-[0.9] tracking-tighter mb-6">
                            <span className="text-white drop-shadow-md">Code The</span><br />
                            <span className="text-[#ff3e00] drop-shadow-[0_0_25px_rgba(255,62,0,0.4)] relative">Future.</span>
                        </h1>

                        {/* Description Paragraph */}
                        <p className="text-gray-400 text-base md:text-lg max-w-[28rem] mb-10 leading-relaxed font-medium">
                            Experience the Cyber-Tech revolution with Mozilla Firefox Club VIT Bhopal. Pushing the boundaries of open-source innovation through decentralized protocols.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="/join" className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-8 py-4 bg-[#ff3e00] text-white font-black italic tracking-[0.15em] text-sm uppercase rounded shadow-[0_4px_14px_0_rgba(255,62,0,0.39)] hover:bg-[#ff5a1f] transition-colors"
                                >
                                    Initialize Lab
                                </motion.button>
                            </Link>
                            <Link href="/projects" className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-8 py-4 bg-[#110602] text-white font-black italic tracking-[0.15em] text-sm uppercase rounded border border-[#ff3e00]/30 hover:bg-[#ff3e00]/10 hover:border-[#ff3e00] transition-colors shadow-[inset_0_0_15px_rgba(255,62,0,0.05)]"
                                >
                                    Join Protocol
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
                    >
                        {/* Image background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ff3e00] rounded-full filter blur-[150px] opacity-[0.15]"></div>

                        {/* Animation Container */}
                        <div className="relative w-full max-w-[600px] aspect-square group">
                            {/* The actual animation */}
                            <div className="relative w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                {animationData ? (
                                    <Lottie
                                        animationData={animationData}
                                        loop={true}
                                        className="w-full h-full scale-[1.3] drop-shadow-[0_0_25px_rgba(255,62,0,0.2)]"
                                    />
                                ) : (
                                    <div className="w-12 h-12 border-4 border-[#ff3e00] border-t-transparent rounded-full animate-spin"></div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
