"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Home, Factory, Droplets, Check, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const TiltCard = ({ title, description, icon: Icon, image, features, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-background rounded-[12px] overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-border flex flex-col"
        >
            <div className="h-48 overflow-hidden relative">
                <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="p-8 relative flex-grow flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-onPrimary mb-4 absolute -top-6 right-6 border border-primary/20 backdrop-blur-md shadow-sm">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-heading">{title}</h3>
                <p className="text-body text-sm mb-6 flex-grow">{description}</p>
                <ul className="text-sm text-body space-y-2 mb-6">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" /> {feature}
                        </li>
                    ))}
                </ul>
                <div className="space-y-3">
                    {/* <button className="w-full py-3 bg-surface border border-border text-heading rounded-lg hover:bg-border/50 transition text-sm font-bold cursor-pointer">
                        View Details
                    </button> */}
                    <a
                        href={`https://wa.me/917020919660?text=I'm interested in ${encodeURIComponent(title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#1ebe5d] transition text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                    >
                        <MessageCircle className="w-4 h-4" /> Contact on WhatsApp
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default function Products() {
    const products = [
        {
            title: "Residential Panels",
            description: "Sleek, black-on-black monocrystalline panels that blend perfectly with your roof.",
            icon: Home,
            image: "/hero-bg.jpg",
            features: ["Up to 22% Efficiency", "25-Year Warranty"],
            delay: 0.1
        },
        {
            title: "Commercial & Industrial",
            description: "Heavy-duty solar solutions designed for maximum ROI and large-scale power generation.",
            icon: Factory,
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
            features: ["High Capacity Inverters", "Tax Depreciation Benefits"],
            delay: 0.2
        },
        {
            title: "Solar Water Heaters",
            description: "Advanced evacuated tube collectors (ETC) for consistent hot water all year round.",
            icon: Droplets,
            image: "/solar_heater.jpg",
            features: ["Zero Electricity Cost", "PUF Insulated Tanks"],
            delay: 0.3
        }
    ];

    return (
        <section id="products" className="py-24 relative z-10 bg-surface overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-heading">Solar Solutions Built For Every Need</h2>
                    <p className="text-body max-w-2xl mx-auto">High-efficiency panels paired with industry-leading warranties.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <TiltCard key={idx} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
