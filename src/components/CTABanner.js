"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import BackgroundParticles from '@/components/BackgroundParticles';

export default function CTABanner() {
    return (
        <section className="relative py-32 overflow-hidden border-t border-primary/20 bg-background z-10">
            <BackgroundParticles count={500} />

            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-primary/20 mix-blend-multiply pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold mb-6 text-heading"
                >
                    Ready To Switch To Solar?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl text-body max-w-2xl mx-auto mb-10"
                >
                    Get a FREE site assessment within 24 hours. Start saving money and the planet today.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-primary text-onPrimary font-display font-bold text-xl py-5 px-10 rounded-full hover:bg-primary transition-colors shadow-lg shadow-primary/30 cursor-pointer"
                >
                    <a href="https://wa.me/919423915121?text=I'm interested in solar panels">
                        Book Free Consultation
                    </a>
                </motion.button>

                <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-body font-medium">
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> GST Registered</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> MNRE Approved</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> ISO 9001:2015</span>
                </div>
            </div>
        </section>
    );
}
