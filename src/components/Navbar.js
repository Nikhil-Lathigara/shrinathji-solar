"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Products", href: "#products" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Why Us", href: "#features" },
    { label: "Calculator", href: "#calculator" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                setScrolled(true);
                setVisible(currentScrollY <= lastScrollY);
            } else {
                setScrolled(false);
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [sidebarOpen]);

    return (
        <>
            {/* Navbar */}
            <nav
                className={cn(
                    "fixed w-full z-50 top-0 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300",
                    !visible && "-translate-y-full",
                    scrolled
                        ? "bg-background shadow-sm shadow-border"
                        : "bg-transparent"
                )}
            >
                {/* Logo */}
                <div className="text-primary font-display text-lg font-bold flex items-center gap-2 leading-tight">
                    <span>
                        Shrinathji Solar
                        <br />
                        Enterprise
                    </span>
                </div>

                {/* Desktop nav links */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-primary">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-primary/70 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a
                    href="https://wa.me/919876543210?text=Hello, I am interested in your solar products."
                    className="hidden md:block bg-primary text-onPrimary font-bold py-2 px-6 rounded-full hover:shadow-lg shadow-primary/30 transition hover:brightness-110"
                >
                    Get Free Quote
                </a>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="md:hidden text-primary p-1 rounded-md"
                    aria-label="Open menu"
                >
                    <Menu size={26} />
                </button>
            </nav>

            {/* Backdrop */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.aside
                        key="sidebar"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-72 z-[70] bg-background flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                            <div className="text-primary font-display text-base font-bold flex items-center gap-2 leading-tight">
                                <span className="animate-pulse">🌞</span>
                                <span>
                                    Shrinathji Solar
                                    <br />
                                    Enterprise
                                </span>
                            </div>

                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-primary p-1 rounded-md"
                                aria-label="Close menu"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i + 0.1 }}
                                    onClick={() => setSidebarOpen(false)}
                                    className="text-base font-medium text-primary px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="px-6 pb-8">
                            <a
                                href="https://wa.me/919876543210?text=Hello, I am interested in your solar products."
                                onClick={() => setSidebarOpen(false)}
                                className="block w-full text-center bg-primary text-onPrimary font-bold py-3.5 px-6 rounded-full hover:shadow-lg shadow-primary/30 transition hover:brightness-110"
                            >
                                Get Free Quote →
                            </a>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}