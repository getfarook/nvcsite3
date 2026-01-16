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

export function AiNodesMargin({
  side,
  width = "5%",
}: {
  side: "left" | "right";
  width?: string | number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let canvasWidth = 0;
    let canvasHeight = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvasWidth = rect.width;
      canvasHeight = document.documentElement.scrollHeight; // Full page height

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      // Node density adapted for dynamically changing width
      if (canvasWidth === 0) return;
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
            : "rgba(100, 100, 100, 0.4)";
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
                : `rgba(100, 100, 100, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    resizeObserver.observe(container);
    resizeObserver.observe(document.body);

    // Initial resize to capture correct dimensions immediately
    resize();
    draw();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Removed width from dependency as we observe container size

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 ${side === "left" ? "left-0" : "right-0"
        } h-screen z-50 pointer-events-none hidden lg:block`}
      style={{ width }}
    >

      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

// Wrapper component to render both margins
export function AiNodesSideMargins() {
  return (
    <>
      <AiNodesMargin side="left" width="5%" />
      <AiNodesMargin side="right" width="5%" />
    </>
  );
}
