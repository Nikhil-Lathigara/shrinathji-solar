"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BackgroundParticles from './BackgroundParticles';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-start lg:items-center overflow-hidden">
            <BackgroundParticles count={300} />

            {/* Full-bleed background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Solar energy"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                />
                {/* Mobile: dark overlay at top for text readability */}
                {/* Desktop: dark overlay on right side */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-8 lg:py-24 flex justify-start">
                <div className="w-full max-w-xl lg:max-w-lg">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/15 backdrop-blur-sm text-sm font-medium text-primary"
                    >
                        <span className="animate-pulse">🌞</span> India&apos;s Trusted Solar Brand
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.08] font-bold mb-5 tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
                    >
                        Power Your Home<br />
                        <span className="text-primary">With The Sun</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg text-white/85 mb-10 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
                    >
                        Shrinathji Solar Enterprise - Premium solar solutions for homes, businesses, and industry since 2005.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <a
                            href="https://wa.me/917020919660?text=Hello, I am interested in your solar products."
                            className="inline-flex items-center bg-primary text-onPrimary font-bold text-base sm:text-lg py-2 px-6 rounded-full hover:shadow-xl shadow-primary/40 transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                        >
                            Get Free Quote →
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}