"use client";
import React, { useState, useEffect } from 'react';
import { Sun, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                setScrolled(true);
                if (currentScrollY > lastScrollY) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
            } else {
                setScrolled(false);
                setVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 top-0 transition-all duration-300 py-4 px-6 md:px-12 flex justify-between items-center transition-transform",
                !visible && "-translate-y-full",
                scrolled && "bg-background/80 backdrop-blur-lg shadow-sm shadow-border"
            )}
        >
            <div className="font-display text-xl font-bold flex items-center gap-2">
                <span className="text-primary"><Sun className="w-6 h-6" /></span>
                Shrinathiji Solar
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-body">
                <a href="#products" className="hover:text-primary transition">Products</a>
                <a href="#how-it-works" className="hover:text-primary transition">How it Works</a>
                <a href="#features" className="hover:text-primary transition">Why Us</a>
                <a href="#calculator" className="hover:text-primary transition">Calculator</a>
            </div>
            <button className="hidden md:block bg-gradient-to-r from-primary to-primary text-onPrimary font-bold py-2 px-6 rounded-full hover:shadow-lg shadow-primary/30 transition cursor-pointer">
                <a href='https://wa.me/919876543210?text=Hello, I am interested in your solar products.'>
                    Get Free Quote
                </a>
            </button>
        </nav>
    );
}
