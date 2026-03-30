"use client";
import React from 'react';
import { Sun, Instagram, Youtube, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background pt-20 pb-10 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <div className="font-display text-2xl font-bold flex items-center gap-2 mb-4">
                            <span className="text-primary"><Sun className="w-6 h-6" /></span>
                            Shrinathiji Solar
                        </div>
                        <p className="text-body text-sm mb-6 leading-relaxed">
                            Leading provider of premium solar energy solutions for residential, commercial, and industrial clients across India since 2005.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-onPrimary transition cursor-pointer"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-onPrimary transition cursor-pointer"><Youtube className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-onPrimary transition cursor-pointer"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-onPrimary transition cursor-pointer"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-heading mb-6">Products</h4>
                        <ul className="space-y-3 text-body text-sm">
                            <li><a href="#" className="hover:text-primary transition">Residential Panels</a></li>
                            <li><a href="#" className="hover:text-primary transition">Commercial Solutions</a></li>
                            <li><a href="#" className="hover:text-primary transition">Solar Water Heaters</a></li>
                            <li><a href="#" className="hover:text-primary transition">Inverters & Batteries</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-heading mb-6">Company</h4>
                        <ul className="space-y-3 text-body text-sm">
                            <li><a href="#" className="hover:text-primary transition">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition">Our Projects</a></li>
                            <li><a href="#" className="hover:text-primary transition">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-heading mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-body text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>123 Solar Tech Park, Industrial Area, Gujarat, India 380001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>hello@shrinathijisolar.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-body">
                    <p>&copy; 2024 Shrinathiji Solar. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-heading transition">Privacy Policy</a>
                        <a href="#" className="hover:text-heading transition">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary to-cyan"></div>
        </footer>
    );
}
