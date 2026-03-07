"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function InitialLoader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide the loader after roughly 4 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black"
                >
                    {/* Background Ambient Glows */}
                    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
                        {/* Purple glow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.6, scale: 1.2 }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-purple-600/20 blur-[100px]"
                        />
                        {/* Orange glow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                            className="absolute top-1/3 left-1/3 w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] rounded-full bg-purple-500/10 blur-[100px]"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
                        {/* Firefox Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 mx-auto glass-dark rounded-full p-4 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-500/20 mix-blend-overlay"></div>
                                <Image
                                    src="/firefox-logo.svg"
                                    alt="Firefox Logo"
                                    width={80}
                                    height={80}
                                    className="object-contain drop-shadow-[0_0_15px_rgba(255,113,57,0.5)]"
                                />
                            </div>
                        </motion.div>

                        {/* Main Text */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(138,55,245,0.4)]">
                                Coming Soon
                            </h1>
                        </motion.div>

                        {/* Subtext */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <p className="text-lg md:text-2xl font-light text-white/80 tracking-widest mt-4">
                                Mozilla Firefox Club
                            </p>
                            <p className="text-sm md:text-base text-purple-300/60 mt-2 tracking-widest uppercase mb-6">
                                VIT Bhopal
                            </p>

                            <div className="px-6 py-3 rounded-2xl glass-dark border border-purple-500/20 max-w-md mx-auto">
                                <p className="text-sm md:text-md text-cyan-300/80 font-medium">
                                    New website is coming soon.
                                </p>
                                <p className="text-xs md:text-sm text-purple-200/50 mt-1">
                                    Meanwhile, you can browse this demo.
                                </p>
                            </div>
                        </motion.div>

                        {/* Progress line */}
                        <motion.div
                            className="w-[200px] md:w-[300px] h-[2px] bg-white/10 rounded-full mt-12 overflow-hidden relative"
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                        >
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-purple-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
