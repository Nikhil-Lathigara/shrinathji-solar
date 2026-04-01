"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Smartphone, Landmark, Users, Leaf } from 'lucide-react';

const icons = {
    ShieldCheck,
    MapPin,
    Smartphone,
    Landmark,
    Users,
    Leaf
};

const FeatureCard = ({ icon, title, description, delay }) => {
    const Icon = icons[icon];
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className="bg-surface p-8 rounded-[12px] group cursor-pointer border border-border hover:shadow-lg transition-all hover:border-primary/50"
        >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Icon className="w-7 h-7 text-primary group-hover:text-onPrimary transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-heading">{title}</h3>
            <p className="text-body text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default function Features() {
    const features = [
        {
            icon: "ShieldCheck",
            title: "25-Year Warranty",
            description: "Industry-leading performance guarantee ensures your panels produce power for decades.",
            delay: 0
        },
        {
            icon: "MapPin",
            title: "Made in India",
            description: "Supporting the local economy with premium components manufactured entirely within India.",
            delay: 0.1
        },
        {
            icon: "Smartphone",
            title: "Real-time Monitoring",
            description: "Track your energy production and savings via our intuitive smartphone app.",
            delay: 0.2
        },
        {
            icon: "Landmark",
            title: "70% Subsidy Assistance",
            description: "We handle all the paperwork to help you claim maximum government subsidies.",
            delay: 0.3
        },
        {
            icon: "Users",
            title: "Expert Installation",
            description: "Our certified engineers ensure flawless setup with zero damage to your roof.",
            delay: 0.4
        },
        {
            icon: "Leaf",
            title: "Carbon Neutral",
            description: "By choosing us, you're directly contributing to a cleaner, greener planet.",
            delay: 0.5
        }
    ];

    return (
        <section id="features" className="py-24 relative z-10 bg-background overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-heading">Why Shrinathji Solar Enterprise?</h2>
                    <p className="text-body max-w-2xl mx-auto">We don&apos;t just sell panels, we deliver complete peace of mind.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
