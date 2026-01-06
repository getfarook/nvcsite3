"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    side: "left" | "right";
}

export function AiNodesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let nodes: Node[] = [];
        let width = 0;
        let height = 0;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initNodes();
        };

        const initNodes = () => {
            nodes = [];
            const nodeCount = Math.floor((width * height) / 15000); // 1 node per 15000px^2

            for (let i = 0; i < nodeCount; i++) {
                // Decide side: left (0-30% width) or right (70-100% width)
                const isLeft = Math.random() > 0.5;
                const side = isLeft ? "left" : "right";

                let x;
                if (isLeft) {
                    x = Math.random() * (width * 0.3);
                } else {
                    x = width - Math.random() * (width * 0.3);
                }

                nodes.push({
                    x,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    side,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw nodes
            nodes.forEach((node, i) => {
                // Move
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges (considering the "side" constraint mostly visually, but keeping them loosely bound)
                // Actually, let's just let them bounce off the screen edges and drift a bit in the middle but mostly stay in their zones?
                // Better: soft boundaries.

                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // Slight pull back to their zones if they drift too far center
                if (node.side === "left" && node.x > width * 0.35) node.vx -= 0.02;
                if (node.side === "right" && node.x < width * 0.65) node.vx += 0.02;

                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = theme === "dark"
                    ? "rgba(100, 200, 255, 0.5)"
                    : "rgba(0, 100, 200, 0.3)";
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        // Opacity based on distance
                        const opacity = (1 - distance / 150) * 0.3;
                        ctx.strokeStyle = theme === "dark"
                            ? `rgba(100, 200, 255, ${opacity})`
                            : `rgba(0, 100, 200, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    // Positioned absolute, behind content
    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
        />
    );
}
