"use client";
import React from 'react';
import { PlayCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 px-4 overflow-hidden bg-background">
            {/* Subtle Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary"
                    >
                        <span className="animate-pulse">🌞</span> India&apos;s Trusted Solar Brand
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-5xl md:text-6xl lg:text-[72px] leading-tight font-bold mb-6 tracking-tight text-heading"
                    >
                        Power Your World<br />
                        <span className="text-primary">With The Sun</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-body max-w-xl mb-10"
                    >
                        Shrinathiji Solar — Premium solar solutions for homes, businesses, and industry since 2005.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <button className="bg-primary text-onPrimary font-bold text-lg py-4 px-8 rounded-[50px] hover:shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 cursor-pointer">
                            <a href='https://wa.me/919876543210?text=Hello, I am interested in your solar products.'>
                                Get Free Quote →
                            </a>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[24px] overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/hero-bg.png"
                        alt="Solar energy"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
