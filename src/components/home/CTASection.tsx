"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden bg-[#070301]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ff3e00]/10 pointer-events-none"></div>

            {/* Ambient background glow */}
            <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-[#ff3e00] rounded-[100%] filter blur-[150px] opacity-[0.15] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-4xl mx-auto bg-[#0a0402] p-12 md:p-20 rounded-lg border border-[#ff3e00]/30 shadow-[0_0_50px_rgba(255,62,0,0.15)] relative overflow-hidden">

                    {/* Inner corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff3e00] m-4 opacity-50"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff3e00] m-4 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff3e00] m-4 opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ff3e00] m-4 opacity-50"></div>

                    <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 tracking-tight">Ready to make an <span className="text-[#ff3e00] drop-shadow-[0_0_15px_rgba(255,62,0,0.5)]">impact</span>?</h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        Become a part of the most active developer community on campus.
                        Learn, build, and share your journey with us in the tech frontier.
                    </p>
                    <Link href="/join">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 bg-[#ff3e00] text-white font-black italic tracking-[0.15em] text-sm uppercase rounded shadow-[0_0_20px_rgba(255,62,0,0.4)] hover:bg-[#ff5a1f] transition-all">
                            Initialize Protocol
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
