"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface AiNodesMarginProps {
  side: "left" | "right";
  width?: number; // Width in pixels
}

export function AiNodesMargin({ side, width = 80 }: AiNodesMarginProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let canvasWidth = width;
    let canvasHeight = 0;

    const resize = () => {
      canvasHeight = document.documentElement.scrollHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      // Node density: 1 node per 8000px^2 for a denser look in the narrow margin
      const nodeCount = Math.floor((canvasWidth * canvasHeight) / 8000);

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvasWidth) node.vx *= -1;
        if (node.y < 0 || node.y > canvasHeight) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvasWidth, node.x));
        node.y = Math.max(0, Math.min(canvasHeight, node.y));

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          theme === "dark"
            ? "rgba(100, 200, 255, 0.5)"
            : "rgba(0, 100, 200, 0.3)";
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            // Opacity based on distance
            const opacity = (1 - distance / 100) * 0.4;
            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(100, 200, 255, ${opacity})`
                : `rgba(0, 100, 200, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Handle scroll height changes
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    resizeObserver.observe(document.body);
    resize();
    draw();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, width]);

  return (
    <div
      className={`fixed top-0 ${
        side === "left" ? "left-0" : "right-0"
      } h-screen z-50 pointer-events-none hidden lg:block`}
      style={{ width: `${width}px` }}
    >
      {/* Gradient fade effect towards content */}
      <div
        className={`absolute inset-0 ${
          side === "left"
            ? "bg-linear-to-r from-transparent via-transparent to-background/50"
            : "bg-linear-to-l from-transparent via-transparent to-background/50"
        }`}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

// Wrapper component to render both margins
export function AiNodesSideMargins() {
  return (
    <>
      <AiNodesMargin side="left" width={80} />
      <AiNodesMargin side="right" width={80} />
    </>
  );
}
