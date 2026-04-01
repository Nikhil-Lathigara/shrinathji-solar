"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BackgroundParticles from '@/components/BackgroundParticles';

const Counter = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const startTime = performance.now();

            const update = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentCount = Math.floor(progress * target);
                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    setCount(target);
                }
            };
            requestAnimationFrame(update);
        }
    }, [isInView, target]);

    return (
        <span ref={ref}>{count.toLocaleString()}{suffix}</span>
    );
};

export default function StatsBar() {
    const stats = [
        { label: "Installations", target: 10000, suffix: "+" },
        { label: "Capacity", target: 50, suffix: " MW+" },
        { label: "States", target: 15, suffix: "+" },
        { label: "Uptime", target: 98, suffix: "%" },
    ];

    return (
        <section className="relative z-10 bg-primary/90 py-6 overflow-hidden">
            <BackgroundParticles count={300} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-4"
                        >
                            <div className="text-white font-bold text-2xl md:text-3xl font-display mb-2">
                                <Counter target={stat.target} suffix={stat.suffix} />
                            </div>
                            <div className="text-cyan-900 text-xs tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
