"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundParticles({ color = 0xF5A623, count = 300, className = "" }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined" || !containerRef.current) return;
        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const particlesGeometry = new THREE.BufferGeometry();
        const posArray = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) posArray[i] = (Math.random() - 0.5) * 50;
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            color: color,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        camera.position.z = 20;

        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            particlesMesh.rotation.y += 0.0008;
            particlesMesh.rotation.x += 0.0004;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            if (!containerRef.current) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);

            // Dispose Three.js resources to prevent memory leaks
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();

            if (container && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [color, count]);

    return <div ref={containerRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`} />;
}
