"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Sun, Zap, Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundParticles from '@/components/BackgroundParticles';

export default function HowItWorks() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined" || !canvasRef.current) return;

        const container = canvasRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Sun
        const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xF5A623 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.position.set(-15, 5, -20);
        scene.add(sun);

        const glowGeometry = new THREE.SphereGeometry(2.5, 32, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xFF6B00,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });
        const sunGlow = new THREE.Mesh(glowGeometry, glowMaterial);
        sunGlow.position.copy(sun.position);
        scene.add(sunGlow);

        const panelGroup = new THREE.Group();
        const panelGeometry = new THREE.PlaneGeometry(8, 5);

        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, 256, 256);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        for (let i = 0; i <= 256; i += 32) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke();
        }

        const panelTexture = new THREE.CanvasTexture(canvas);
        const panelMaterial = new THREE.MeshBasicMaterial({
            map: panelTexture,
            side: THREE.DoubleSide
        });
        const panel = new THREE.Mesh(panelGeometry, panelMaterial);
        panel.rotation.x = -Math.PI / 3;

        const frameGeo = new THREE.BoxGeometry(8.2, 5.2, 0.2);
        const frameMat = new THREE.MeshBasicMaterial({ color: 0x334155 });
        const frame = new THREE.Mesh(frameGeo, frameMat);
        frame.rotation.x = -Math.PI / 3;
        frame.position.z = -0.15;

        panelGroup.add(panel);
        panelGroup.add(frame);
        panelGroup.position.set(0, -2, -15);
        scene.add(panelGroup);

        const rays = [];
        const rayMaterial = new THREE.LineBasicMaterial({ color: 0xF5A623, transparent: true, opacity: 0.6 });

        for (let i = 0; i < 5; i++) {
            const points = [];
            points.push(sun.position.clone());
            const target = new THREE.Vector3(
                (Math.random() - 0.5) * 6,
                panelGroup.position.y + 1,
                panelGroup.position.z + (Math.random() - 0.5) * 4
            );
            points.push(target);
            const rayGeo = new THREE.BufferGeometry().setFromPoints(points);
            const ray = new THREE.Line(rayGeo, rayMaterial);
            rays.push({
                line: ray,
                progress: Math.random()
            });
            scene.add(ray);
        }

        camera.position.set(0, 2, 5);

        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            sunGlow.scale.setScalar(1 + Math.sin(Date.now() * 0.003) * 0.1);

            rays.forEach(ray => {
                ray.progress += 0.05;
                if (ray.progress > 1) ray.progress = 0;
                ray.line.material.opacity = Math.sin(ray.progress * Math.PI) * 0.8;
            });

            panelGroup.position.y = -2 + Math.sin(Date.now() * 0.001) * 0.2;

            renderer.render(scene, camera);
        };

        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animate();
                intersectionObserver.disconnect();
            }
        });
        intersectionObserver.observe(container);

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            
            sunGeometry.dispose();
            sunMaterial.dispose();
            glowGeometry.dispose();
            glowMaterial.dispose();
            panelGeometry.dispose();
            panelTexture.dispose();
            panelMaterial.dispose();
            frameGeo.dispose();
            frameMat.dispose();
            rayMaterial.dispose();
            rays.forEach(r => r.line.geometry.dispose());
            renderer.dispose();

            if (container && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <section id="how-it-works" className="py-24 relative bg-[#041d18] border-y border-white/5 overflow-hidden z-10">
            <BackgroundParticles className="opacity-40" color={0x00E5FF} />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-[#041d18]/80 to-primary/10 pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How Solar Works</h2>
                    <p className="text-body max-w-2xl mx-auto">From the sun to your sockets in milliseconds.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full border border-white/10 rounded-2xl p-2 bg-background shadow-2xl mb-12 overflow-hidden"
                >
                    <div ref={canvasRef} className="w-full h-[400px] border-radius-1rem overflow-hidden bg-black" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 rounded-xl relative"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4 border border-primary/30 font-bold">1</div>
                        <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                            <Sun className="w-5 h-5 text-primary" /> Sunlight Captured
                        </h4>
                        <p className="text-sm text-body">Solar panels absorb photons from the sun and convert them into DC electricity.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 rounded-xl relative"
                    >
                        <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan mx-auto mb-4 border border-cyan/30 font-bold">2</div>
                        <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                            <Zap className="w-5 h-5 text-cyan" /> Energy Converted
                        </h4>
                        <p className="text-sm text-body">The inverter transforms the DC electricity into usable AC electricity for your home.</p>
                        <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 text-gray-600">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 rounded-xl relative"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4 border border-primary/30 font-bold">3</div>
                        <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                            <Home className="w-5 h-5 text-primary" /> Powers Your Home
                        </h4>
                        <p className="text-sm text-body">Clean energy runs your appliances, while excess power is sent back to the grid.</p>
                        <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 text-gray-600">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
