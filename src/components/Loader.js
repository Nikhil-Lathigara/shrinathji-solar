"use client";
import React, { useState, useEffect } from 'react';

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 bg-background z-[10000] flex flex-col justify-center items-center transition-opacity duration-500">
            <div className="w-15 h-15 rounded-full bg-primary shadow-lg shadow-primary/30 animate-pulse-slow mb-4"></div>
            <h2 className="font-display text-2xl font-bold tracking-widest text-heading">Shrinathji Solar Enterprise</h2>
        </div>
    );
}
