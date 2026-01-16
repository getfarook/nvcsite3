"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface NetworkNode {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  layer: "input" | "hidden" | "output";
  wobblePhaseX: number;
  wobblePhaseY: number;
  wobbleSpeedX: number;
  wobbleSpeedY: number;
  wobbleAmplitude: number;
}

interface NeuralNetwork {
  nodes: NetworkNode[];
  x: number;
  y: number;
  scale: number;
  rotation: number;
  phaseOffset: number;
}

interface NeuralNetworkMarginProps {
  side: "left" | "right";
  width?: string | number;
}

function NeuralNetworkMargin({ side, width = "5%" }: NeuralNetworkMarginProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme: theme } = useTheme();
  const networksRef = useRef<NeuralNetwork[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let canvasWidth = 0;
    let canvasHeight = 0;

    const createNetwork = (
      centerX: number,
      centerY: number,
      scale: number,
      phaseOffset: number
    ): NeuralNetwork => {
      const nodes: NetworkNode[] = [];

      const layers = [
        { name: "input" as const, nodeCount: 3, xOffset: -40 },
        { name: "hidden" as const, nodeCount: 4, xOffset: 0 },
        { name: "output" as const, nodeCount: 2, xOffset: 40 },
      ];

      const nodeRadius = 4 * scale;
      const verticalSpacing = 18 * scale;

      layers.forEach((layer) => {
        const layerHeight = (layer.nodeCount - 1) * verticalSpacing;
        const startY = -layerHeight / 2;

        for (let i = 0; i < layer.nodeCount; i++) {
          const localX = layer.xOffset * scale;
          const localY = startY + i * verticalSpacing;

          nodes.push({
            x: centerX + localX,
            y: centerY + localY,
            baseX: localX,
            baseY: localY,
            radius: nodeRadius,
            layer: layer.name,
            wobblePhaseX: Math.random() * Math.PI * 2,
            wobblePhaseY: Math.random() * Math.PI * 2,
            wobbleSpeedX: 0.015 + Math.random() * 0.01,
            wobbleSpeedY: 0.015 + Math.random() * 0.01,
            wobbleAmplitude: 2 + Math.random() * 1.5,
          });
        }
      });

      return {
        nodes,
        x: centerX,
        y: centerY,
        scale,
        rotation: 0,
        phaseOffset,
      };
    };

    const initNetworks = () => {
      const networks: NeuralNetwork[] = [];
      if (canvasWidth === 0) return;

      // Create networks distributed along the height
      const networkSpacing = 300;
      const networkCount = Math.ceil(canvasHeight / networkSpacing);

      for (let i = 0; i < networkCount; i++) {
        const x = canvasWidth / 2;
        const y = (i + 0.5) * networkSpacing;
        const scale = 0.6 + Math.random() * 0.3;
        const phaseOffset = Math.random(); // Different animation timing for each network
        networks.push(createNetwork(x, y, scale, phaseOffset));
      }

      networksRef.current = networks;
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvasWidth = rect.width;
      canvasHeight = document.documentElement.scrollHeight;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      initNetworks();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      timeRef.current += 1;

      const networks = networksRef.current;
      const cycleSpeed = 0.006;

      networks.forEach((network) => {
        // Calculate global phase with offset for this network
        const globalPhase =
          (timeRef.current * cycleSpeed + network.phaseOffset) % 1;

        // Update node positions with wobble
        network.nodes.forEach((node) => {
          node.wobblePhaseX += node.wobbleSpeedX;
          node.wobblePhaseY += node.wobbleSpeedY;

          const wobbleX = Math.sin(node.wobblePhaseX) * node.wobbleAmplitude;
          const wobbleY = Math.sin(node.wobblePhaseY) * node.wobbleAmplitude;

          node.x = network.x + node.baseX + wobbleX;
          node.y = network.y + node.baseY + wobbleY;
        });

        const inputNodes = network.nodes.filter((n) => n.layer === "input");
        const hiddenNodes = network.nodes.filter((n) => n.layer === "hidden");
        const outputNodes = network.nodes.filter((n) => n.layer === "output");

        // Draw connections with line drawing effect
        inputNodes.forEach((inputNode) => {
          hiddenNodes.forEach((hiddenNode) => {
            drawConnection(
              ctx,
              inputNode,
              hiddenNode,
              theme,
              globalPhase,
              "input-hidden"
            );
          });
        });

        hiddenNodes.forEach((hiddenNode) => {
          outputNodes.forEach((outputNode) => {
            drawConnection(
              ctx,
              hiddenNode,
              outputNode,
              theme,
              globalPhase,
              "hidden-output"
            );
          });
        });

        // Draw nodes
        network.nodes.forEach((node) => {
          drawNode(ctx, node, theme, globalPhase);
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const drawConnection = (
      ctx: CanvasRenderingContext2D,
      from: NetworkNode,
      to: NetworkNode,
      theme: string | undefined,
      globalPhase: number,
      connectionType: "input-hidden" | "hidden-output"
    ) => {
      const angle = Math.atan2(to.y - from.y, to.x - from.x);
      const startX = from.x + Math.cos(angle) * from.radius;
      const startY = from.y + Math.sin(angle) * from.radius;
      const endX = to.x - Math.cos(angle) * to.radius;
      const endY = to.y - Math.sin(angle) * to.radius;

      let drawProgress = 0;
      let isActive = false;

      if (connectionType === "input-hidden") {
        if (globalPhase <= 0.5) {
          drawProgress = globalPhase / 0.5;
          isActive = true;
        } else {
          drawProgress = 1;
        }
      } else {
        if (globalPhase >= 0.5) {
          drawProgress = (globalPhase - 0.5) / 0.5;
          isActive = true;
        }
      }

      const currentEndX = startX + (endX - startX) * drawProgress;
      const currentEndY = startY + (endY - startY) * drawProgress;

      const baseOpacity = 0.06;
      const activeOpacity = isActive
        ? 0.25
        : drawProgress > 0
        ? 0.15
        : baseOpacity;

      // Draw base line (faint)
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle =
        theme === "dark"
          ? `rgba(249, 115, 22, ${baseOpacity})`
          : `rgba(100, 120, 150, ${baseOpacity})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Draw active portion
      if (drawProgress > 0) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentEndX, currentEndY);
        ctx.strokeStyle =
          theme === "dark"
            ? `rgba(249, 115, 22, ${activeOpacity})`
            : `rgba(100, 120, 150, ${activeOpacity})`;
        ctx.lineWidth = isActive ? 1.5 : 1;
        ctx.stroke();

        // Bright leading edge
        if (isActive && drawProgress > 0.02 && drawProgress < 0.98) {
          const edgeLength = 0.15;
          const edgeStart = Math.max(0, drawProgress - edgeLength);
          const edgeStartX = startX + (endX - startX) * edgeStart;
          const edgeStartY = startY + (endY - startY) * edgeStart;

          ctx.beginPath();
          ctx.moveTo(edgeStartX, edgeStartY);
          ctx.lineTo(currentEndX, currentEndY);
          ctx.strokeStyle =
            theme === "dark"
              ? `rgba(255, 150, 80, 0.45)`
              : `rgba(130, 150, 180, 0.45)`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
    };

    const drawNode = (
      ctx: CanvasRenderingContext2D,
      node: NetworkNode,
      theme: string | undefined,
      globalPhase: number
    ) => {
      let pulseIntensity = 0;
      if (node.layer === "input") {
        if (globalPhase <= 0.1) {
          pulseIntensity = Math.sin((globalPhase / 0.1) * Math.PI);
        }
      } else if (node.layer === "hidden") {
        if (globalPhase >= 0.45 && globalPhase <= 0.55) {
          pulseIntensity = Math.sin(((globalPhase - 0.45) / 0.1) * Math.PI);
        }
      } else {
        if (globalPhase >= 0.9) {
          pulseIntensity = Math.sin(((globalPhase - 0.9) / 0.1) * Math.PI);
        }
      }

      const baseScale = 1 + pulseIntensity * 0.05;
      const currentRadius = node.radius * baseScale;

      // Glow
      const glowOpacity = 0.04 + pulseIntensity * 0.08;
      const glowGradient = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        currentRadius * (1.5 + pulseIntensity * 0.3)
      );

      if (theme === "dark") {
        glowGradient.addColorStop(0, `rgba(249, 115, 22, ${glowOpacity})`);
        glowGradient.addColorStop(1, "rgba(249, 115, 22, 0)");
      } else {
        glowGradient.addColorStop(0, `rgba(100, 120, 150, ${glowOpacity})`);
        glowGradient.addColorStop(1, "rgba(100, 120, 150, 0)");
      }

      ctx.beginPath();
      ctx.arc(
        node.x,
        node.y,
        currentRadius * (1.5 + pulseIntensity * 0.3),
        0,
        Math.PI * 2
      );
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Main node
      const nodeOpacity = 0.5 + pulseIntensity * 0.15;
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle =
        theme === "dark"
          ? `rgba(249, 115, 22, ${nodeOpacity})`
          : `rgba(100, 120, 150, ${nodeOpacity})`;
      ctx.fill();
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    resizeObserver.observe(container);
    resizeObserver.observe(document.body);

    resize();
    draw();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 ${
        side === "left" ? "left-0" : "right-0"
      } h-screen z-50 pointer-events-none hidden lg:block`}
      style={{ width }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

// Wrapper component to render both margins
export function NeuralNetworkSideMargins() {
  return (
    <>
      <NeuralNetworkMargin side="left" width="5%" />
      <NeuralNetworkMargin side="right" width="5%" />
    </>
  );
}
