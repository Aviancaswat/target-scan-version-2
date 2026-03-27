'use client';

import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    size: number;
    opacity: number;
}

export default function AnalysisAnimation3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const rotationRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const parent = canvas.parentElement;
        const resizeCanvas = () => {
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const particleCount = 60;
        const particles: Particle[] = [];
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 400,
                z: (Math.random() - 0.5) * 400,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                vz: (Math.random() - 0.5) * 2,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.5,
            });
        }
        particlesRef.current = particles;

        let animationId: number;
        const animate = () => {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            rotationRef.current.y += 0.001;
            rotationRef.current.x += 0.0003;

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const scale = Math.min(canvas.width, canvas.height) / 2;

            const project3D = (x: number, y: number, z: number) => {
                const cosY = Math.cos(rotationRef.current.y);
                const sinY = Math.sin(rotationRef.current.y);
                let rotX = x * cosY - z * sinY;
                let rotZ = x * sinY + z * cosY;

                const cosX = Math.cos(rotationRef.current.x);
                const sinX = Math.sin(rotationRef.current.x);
                let rotY = y * cosX - rotZ * sinX;
                let z2 = y * sinX + rotZ * cosX;

                const perspective = 600;
                const scale2 = perspective / (perspective + z2);

                return {
                    x: centerX + rotX * scale2 * (scale / 200),
                    y: centerY + rotY * scale2 * (scale / 200),
                    scale: scale2,
                    z: z2,
                };
            };

            const projectedParticles: (Particle & { px: number; py: number; dist: number })[] = [];

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.z += p.vz;

                if (Math.abs(p.x) > 250) p.vx *= -1;
                if (Math.abs(p.y) > 250) p.vy *= -1;
                if (Math.abs(p.z) > 250) p.vz *= -1;

                const proj = project3D(p.x, p.y, p.z);
                projectedParticles.push({
                    ...p,
                    px: proj.x,
                    py: proj.y,
                    dist: proj.z,
                });
            });

            projectedParticles.sort((a, b) => a.dist - b.dist);

            ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
            ctx.lineWidth = 1;
            
            projectedParticles.forEach((p1, i) => {
                projectedParticles.slice(i + 1, i + 6).forEach((p2) => {
                    const dx = p1.px - p2.px;
                    const dy = p1.py - p2.py;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p1.px, p1.py);
                        ctx.lineTo(p2.px, p2.py);
                        ctx.stroke();
                    }
                });
            });

            projectedParticles.forEach((p) => {
                const scale2 = (p.dist + 250) / 500;
                ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * scale2})`;
                ctx.beginPath();
                ctx.arc(p.px, p.py, p.size * scale2 + 1, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ background: '#fff' }}
            />
        </motion.div>
    );
}