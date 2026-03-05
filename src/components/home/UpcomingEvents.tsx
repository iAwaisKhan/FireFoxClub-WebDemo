"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EVENTS_DATA } from "@/constants/data";

export default function UpcomingEvents() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-12">
                    <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">Events</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">Upcoming Opportunities</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {EVENTS_DATA.map((event, i) => (
                        <motion.div key={i} whileHover={{ y: -4 }} className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-brand-orange hover:shadow-lg transition-all">
                            <div className={`h-40 w-full ${event.image}`}></div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-semibold px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full">{event.type}</span>
                                    <span className="text-xs text-gray-500 font-medium">{event.date}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">Join us for an exciting {event.type.toLowerCase()} focused on building awesome things together.</p>
                                <button className="text-brand-orange font-semibold text-sm hover:text-orange-600 transition-colors flex items-center gap-2">
                                    Register Now <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/events" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-orange-600 transition-colors group">
                        View All Events <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
