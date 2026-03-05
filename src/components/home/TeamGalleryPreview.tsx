"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM_MEMBERS_PREVIEW } from "@/constants/data";

export default function TeamGalleryPreview() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Team Preview */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">Team</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">Meet the Leadership</h2>
                        </div>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">Passionate student leaders and developers driving innovation and community growth.</p>

                        {/* Team avatars */}
                        <div className="flex items-center gap-3 mb-8">
                            {TEAM_MEMBERS_PREVIEW.map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full bg-linear-to-br from-brand-orange to-brand-yellow flex items-center justify-center text-sm font-bold text-white border-2 border-white">
                                    {i}
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700 border-2 border-white">
                                +15
                            </div>
                        </div>
                        <Link href="/team" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-orange-600 transition-colors w-fit">
                            View Full Team <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Gallery Preview */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">Gallery</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">Event Highlights</h2>
                        </div>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">Moments from our past events, hackathons, and workshops celebrating our community.</p>

                        {/* Gallery grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-32 rounded-lg bg-linear-to-br from-brand-orange/20 to-brand-purple/20 border border-gray-200 hover:border-brand-orange transition-all"></div>
                            <div className="h-32 rounded-lg bg-linear-to-tr from-brand-yellow/20 to-brand-orange/20 border border-gray-200 hover:border-brand-orange transition-all"></div>
                        </div>
                        <Link href="/gallery" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-orange-600 transition-colors mt-8 w-fit">
                            View Gallery <ArrowRight size={16} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
