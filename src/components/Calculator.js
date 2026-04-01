"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundParticles from './BackgroundParticles';

export default function Calculator() {
    const [bill, setBill] = useState(5000);
    const [roof, setRoof] = useState(500);

    // Rough estimations
    // 1kW requires ~100 sq ft and saves ~₹1000/month
    const kwByRoof = Math.floor(roof / 100);
    const kwByBill = Math.ceil(bill / 1000);

    // System size is the minimum of what fits on roof and what covers the bill
    const systemSize = Math.min(kwByRoof, kwByBill) || 1; // minimum 1kW

    const results = {
        kw: systemSize,
        savings: systemSize * 1000 * 12,
        co2: (systemSize * 0.9).toFixed(1),
        payback: Math.max(3.0, 5.0 - (systemSize * 0.1)).toFixed(1)
    };

    return (
        <section id="calculator" className="py-24 relative z-10 bg-surface overflow-hidden">
            <BackgroundParticles count={500} />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-background rounded-[24px] overflow-hidden shadow-xl border border-border"
                >
                    <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="p-8 md:p-12 md:col-span-3">
                            <h2 className="text-3xl font-display font-bold mb-2 text-heading">Calculate Your Solar Savings</h2>
                            <p className="text-body text-sm mb-10">See how much you could save by switching to solar energy.</p>

                            <div className="space-y-10">
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="text-lg font-bold text-heading">Monthly Electricity Bill</label>
                                        <span className="text-primary font-bold text-lg">₹{bill.toLocaleString()}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="20000"
                                        step="500"
                                        value={bill}
                                        onChange={(e) => setBill(parseInt(e.target.value))}
                                        className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="text-lg font-bold text-heading">Available Roof Area</label>
                                        <span className="text-primary font-bold text-lg">{roof.toLocaleString()} sq ft</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="100"
                                        max="2000"
                                        step="50"
                                        value={roof}
                                        onChange={(e) => setRoof(parseInt(e.target.value))}
                                        className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary p-8 md:p-12 md:col-span-2 text-onPrimary flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-8 border-b border-onPrimary/20 pb-4">Estimated Results</h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-center">
                                    <span className="text-onPrimary/80 font-medium">Recommended System</span>
                                    <span className="font-display text-lg font-bold">{results.kw} kW</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-onPrimary/80 font-medium">Annual Savings</span>
                                    <span className="font-display text-lg font-bold">₹{results.savings.toLocaleString()}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-onPrimary/80 font-medium">CO₂ Reduction / Year</span>
                                    <span className="font-display text-lg font-bold">{results.co2} Tons</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-onPrimary/80 font-medium">Payback Period</span>
                                    <span className="font-display text-lg font-bold">{results.payback} Years</span>
                                </div>

                                <button className="w-full mt-6 bg-background text-primary font-bold py-4 rounded-[50px] hover:shadow-lg transition cursor-pointer">
                                    <a href="https://wa.me/917020919660?text= I want to get a detailed quote" >
                                        Get Detailed Quote
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
