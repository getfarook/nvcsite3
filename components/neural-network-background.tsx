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
  pulsePhase: number;
  pulseSpeed: number;
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
  vx: number;
  vy: number;
  scale: number;
  rotation: number;
  rotationSpeed: number;
}

interface NeuralNetworkBackgroundProps {
  spreadNearText?: boolean;
}

export function NeuralNetworkBackground({
  spreadNearText = false,
}: NeuralNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme: theme } = useTheme();
  const networksRef = useRef<NeuralNetwork[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Network variants with different node configurations (input, hidden, output)
    const networkVariants = [
      { input: 3, hidden: 4, output: 2 }, // Original variant
      // { input: 4, hidden: 6, output: 3 }, // Medium variant
      // { input: 5, hidden: 7, output: 2 }, // Large variant
    ];

    const createNetwork = (
      centerX: number,
      centerY: number,
      scale: number,
    ): NeuralNetwork => {
      const nodes: NetworkNode[] = [];

      // Randomly select a network variant
      const variant =
        networkVariants[Math.floor(Math.random() * networkVariants.length)];

      // Network structure configuration based on selected variant
      const layers = [
        { name: "input" as const, nodeCount: variant.input, xOffset: -90 },
        { name: "hidden" as const, nodeCount: variant.hidden, xOffset: 0 },
        { name: "output" as const, nodeCount: variant.output, xOffset: 90 },
      ];

      const nodeRadius = 6 * scale;
      const verticalSpacing = 40 * scale;

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
            pulsePhase: Math.random() * Math.PI * 2,
            pulseSpeed: 0.03 + Math.random() * 0.02,
            wobblePhaseX: Math.random() * Math.PI * 2,
            wobblePhaseY: Math.random() * Math.PI * 2,
            wobbleSpeedX: 0.02 + Math.random() * 0.015,
            wobbleSpeedY: 0.02 + Math.random() * 0.015,
            wobbleAmplitude: 3 + Math.random() * 2, // 3-5px wobble
          });
        }
      });

      return {
        nodes,
        x: centerX,
        y: centerY,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        scale,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.0008,
      };
    };

    const initNetworks = () => {
      const networks: NeuralNetwork[] = [];
      // Create multiple neural networks based on screen size
      const networkCount = Math.max(6, Math.floor((width * height) / 250000));
      console.log(networkCount, "count");

      // Define center exclusion zone (where text content is)
      // Use smaller zone if spreadNearText is true to allow nodes closer to center
      const centerZoneWidth = spreadNearText ? width * 0.4 : width * 0.7;
      const centerZoneHeight = spreadNearText ? height * 0.5 : height * 0.85;
      const centerZoneLeft = (width - centerZoneWidth) / 2;
      const centerZoneRight = centerZoneLeft + centerZoneWidth;
      const centerZoneTop = spreadNearText ? height * 0.2 : height * 0.05;
      const centerZoneBottom = centerZoneTop + centerZoneHeight;

      for (let i = 0; i < networkCount; i++) {
        // Spawn networks in random zones around the edges, avoiding center
        let x, y;
        const padding = 100;

        // Randomly choose spawn zone: 0=left, 1=right, 2=top, 3=bottom, 4=corners
        const spawnZone = Math.floor(Math.random() * 5);

        switch (spawnZone) {
          case 0: // Left side
            x = padding + Math.random() * (centerZoneLeft - padding * 2);
            y = padding + Math.random() * (height - padding * 2);
            break;
          case 1: // Right side
            x =
              centerZoneRight +
              padding +
              Math.random() * (width - centerZoneRight - padding * 2);
            y = padding + Math.random() * (height - padding * 2);
            break;
          case 2: // Top area
            x = padding + Math.random() * (width - padding * 2);
            y = padding + Math.random() * (centerZoneTop - padding);
            break;
          case 3: // Bottom area
            x = padding + Math.random() * (width - padding * 2);
            y =
              centerZoneBottom +
              Math.random() * (height - centerZoneBottom - padding);
            break;
          case 4: // Corners (random corner)
            const corner = Math.floor(Math.random() * 4);
            if (corner === 0) {
              // Top-left
              x = padding + Math.random() * (centerZoneLeft - padding);
              y = padding + Math.random() * (centerZoneTop - padding);
            } else if (corner === 1) {
              // Top-right
              x =
                centerZoneRight +
                Math.random() * (width - centerZoneRight - padding);
              y = padding + Math.random() * (centerZoneTop - padding);
            } else if (corner === 2) {
              // Bottom-left
              x = padding + Math.random() * (centerZoneLeft - padding);
              y =
                centerZoneBottom +
                Math.random() * (height - centerZoneBottom - padding);
            } else {
              // Bottom-right
              x =
                centerZoneRight +
                Math.random() * (width - centerZoneRight - padding);
              y =
                centerZoneBottom +
                Math.random() * (height - centerZoneBottom - padding);
            }
            break;
          default:
            x = Math.random() * width;
            y = Math.random() * height;
        }

        // Add extra randomness to position
        x += (Math.random() - 0.5) * 50;
        y += (Math.random() - 0.5) * 50;

        // Keep within bounds
        x = Math.max(padding, Math.min(width - padding, x));
        y = Math.max(padding, Math.min(height - padding, y));

        const scale = 0.4 + Math.random() * 0.7; // More varied size (0.4 to 1.1)
        networks.push(createNetwork(x, y, scale));
      }

      networksRef.current = networks;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initNetworks();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      timeRef.current += 1;

      const networks = networksRef.current;

      // Define center exclusion zone for collision
      const centerZoneWidth = spreadNearText ? width * 0.4 : width * 0.7;
      const centerZoneHeight = spreadNearText ? height * 0.5 : height * 0.85;
      const centerZoneLeft = (width - centerZoneWidth) / 2;
      const centerZoneRight = centerZoneLeft + centerZoneWidth;
      const centerZoneTop = spreadNearText ? height * 0.2 : height * 0.05;
      const centerZoneBottom = centerZoneTop + centerZoneHeight;

      networks.forEach((network) => {
        // Update network position
        network.x += network.vx;
        network.y += network.vy;

        // Bounce off edges with padding
        const padding = 80;
        if (network.x < padding || network.x > width - padding) {
          network.vx *= -1;
          network.x = Math.max(padding, Math.min(width - padding, network.x));
        }
        if (network.y < padding || network.y > height - padding) {
          network.vy *= -1;
          network.y = Math.max(padding, Math.min(height - padding, network.y));
        }

        // Bounce off center text zone
        const networkPadding = 60; // Extra padding around the network
        if (
          network.x > centerZoneLeft - networkPadding &&
          network.x < centerZoneRight + networkPadding &&
          network.y > centerZoneTop - networkPadding &&
          network.y < centerZoneBottom + networkPadding
        ) {
          // Determine which edge is closest and push away from center
          const distToLeft = network.x - (centerZoneLeft - networkPadding);
          const distToRight = centerZoneRight + networkPadding - network.x;
          const distToTop = network.y - (centerZoneTop - networkPadding);
          const distToBottom = centerZoneBottom + networkPadding - network.y;

          const minDist = Math.min(
            distToLeft,
            distToRight,
            distToTop,
            distToBottom,
          );

          if (minDist === distToLeft) {
            network.x = centerZoneLeft - networkPadding;
            network.vx = -Math.abs(network.vx) - 0.2;
          } else if (minDist === distToRight) {
            network.x = centerZoneRight + networkPadding;
            network.vx = Math.abs(network.vx) + 0.2;
          } else if (minDist === distToTop) {
            network.y = centerZoneTop - networkPadding;
            network.vy = -Math.abs(network.vy) - 0.2;
          } else {
            network.y = centerZoneBottom + networkPadding;
            network.vy = Math.abs(network.vy) + 0.2;
          }
        }

        // Add slight random movement
        network.vx += (Math.random() - 0.5) * 0.004;
        network.vy += (Math.random() - 0.5) * 0.004;

        // Limit velocity
        const maxSpeed = 0.35;
        const speed = Math.sqrt(
          network.vx * network.vx + network.vy * network.vy,
        );
        if (speed > maxSpeed) {
          network.vx = (network.vx / speed) * maxSpeed;
          network.vy = (network.vy / speed) * maxSpeed;
        }

        // Update rotation
        network.rotation += network.rotationSpeed;

        // Update node positions based on network position, rotation, and individual wobble
        network.nodes.forEach((node) => {
          const cos = Math.cos(network.rotation);
          const sin = Math.sin(network.rotation);

          // Update wobble phases
          node.wobblePhaseX += node.wobbleSpeedX;
          node.wobblePhaseY += node.wobbleSpeedY;

          // Calculate individual wobble offset
          const wobbleX = Math.sin(node.wobblePhaseX) * node.wobbleAmplitude;
          const wobbleY = Math.sin(node.wobblePhaseY) * node.wobbleAmplitude;

          // Apply base position + rotation + wobble
          node.x = network.x + node.baseX * cos - node.baseY * sin + wobbleX;
          node.y = network.y + node.baseX * sin + node.baseY * cos + wobbleY;
          node.pulsePhase += node.pulseSpeed;
        });

        // Get nodes by layer
        const inputNodes = network.nodes.filter((n) => n.layer === "input");
        const hiddenNodes = network.nodes.filter((n) => n.layer === "hidden");
        const outputNodes = network.nodes.filter((n) => n.layer === "output");

        // Calculate global pulse phase for this network (cycles through 0-1)
        // Full cycle: input(0-0.2) -> line1(0.2-0.4) -> hidden(0.4-0.6) -> line2(0.6-0.8) -> output(0.8-1.0)
        const cycleSpeed = 0.003;
        const globalPhase = (timeRef.current * cycleSpeed) % 1;

        // Draw connections: Input -> Hidden
        inputNodes.forEach((inputNode) => {
          hiddenNodes.forEach((hiddenNode) => {
            drawConnection(
              ctx,
              inputNode,
              hiddenNode,
              theme,
              globalPhase,
              "input-hidden",
            );
          });
        });

        // Draw connections: Hidden -> Output
        hiddenNodes.forEach((hiddenNode) => {
          outputNodes.forEach((outputNode) => {
            drawConnection(
              ctx,
              hiddenNode,
              outputNode,
              theme,
              globalPhase,
              "hidden-output",
            );
          });
        });

        // Draw nodes with sequential pulse
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
      connectionType: "input-hidden" | "hidden-output",
    ) => {
      const angle = Math.atan2(to.y - from.y, to.x - from.x);

      // Calculate start and end points at node edges
      const startX = from.x + Math.cos(angle) * from.radius;
      const startY = from.y + Math.sin(angle) * from.radius;
      const endX = to.x - Math.cos(angle) * to.radius;
      const endY = to.y - Math.sin(angle) * to.radius;

      // Continuous light flow timing:
      // The light travels from input -> hidden -> output as one continuous journey
      // Phase 0-0.45: light travels through input-hidden connections
      // Phase 0.45-0.9: light travels through hidden-output connections
      // Phase 0.9-1.0: everything fades out after reaching output

      let drawProgress = 0; // 0 to 1, how much of the line is drawn (bright)
      let lightHeadPosition = -1; // Position of the light head on this segment
      let fadeOutOpacity = 1; // For fading out at the end

      if (connectionType === "input-hidden") {
        if (globalPhase <= 0.45) {
          // Light is traveling through this segment
          drawProgress = globalPhase / 0.45;
          lightHeadPosition = drawProgress;
        } else if (globalPhase <= 0.9) {
          // Light has passed through, line stays fully bright
          drawProgress = 1;
        } else {
          // Fade out phase after reaching output
          drawProgress = 1;
          fadeOutOpacity = 1 - (globalPhase - 0.9) / 0.1;
        }
      } else {
        // hidden-output
        if (globalPhase < 0.45) {
          // Light hasn't reached this segment yet
          drawProgress = 0;
        } else if (globalPhase <= 0.9) {
          // Light is traveling through this segment
          drawProgress = (globalPhase - 0.45) / 0.45;
          lightHeadPosition = drawProgress;
        } else {
          // Fade out phase after reaching output
          drawProgress = 1;
          fadeOutOpacity = 1 - (globalPhase - 0.9) / 0.1;
        }
      }

      // Clamp values
      drawProgress = Math.max(0, Math.min(1, drawProgress));
      fadeOutOpacity = Math.max(0, Math.min(1, fadeOutOpacity));

      // Calculate the current end point based on draw progress
      const currentEndX = startX + (endX - startX) * drawProgress;
      const currentEndY = startY + (endY - startY) * drawProgress;

      // Base opacity (faint line always visible)
      const baseOpacity = 0.08;
      // Bright opacity for the drawn/lit portion
      const brightOpacity = 0.5 * fadeOutOpacity;

      // Draw the base line (faint, full length) - always visible
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle =
        theme === "dark"
          ? `rgba(249, 115, 22, ${baseOpacity})`
          : `rgba(100, 120, 150, ${baseOpacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw the bright lit portion of the line (stays bright once drawn)
      if (drawProgress > 0) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentEndX, currentEndY);
        ctx.strokeStyle =
          theme === "dark"
            ? `rgba(255, 150, 80, ${brightOpacity})`
            : `rgba(130, 150, 180, ${brightOpacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Draw the bright glowing head of the light
      if (lightHeadPosition > 0 && lightHeadPosition < 1) {
        const headX = startX + (endX - startX) * lightHeadPosition;
        const headY = startY + (endY - startY) * lightHeadPosition;

        // Glow around the head
        const glowRadius = 8;
        const glow = ctx.createRadialGradient(
          headX,
          headY,
          0,
          headX,
          headY,
          glowRadius,
        );
        if (theme === "dark") {
          glow.addColorStop(0, "rgba(255, 220, 150, 0.9)");
          glow.addColorStop(0.5, "rgba(255, 150, 80, 0.4)");
          glow.addColorStop(1, "rgba(255, 150, 80, 0)");
        } else {
          glow.addColorStop(0, "rgba(180, 200, 230, 0.9)");
          glow.addColorStop(0.5, "rgba(130, 150, 180, 0.4)");
          glow.addColorStop(1, "rgba(130, 150, 180, 0)");
        }

        ctx.beginPath();
        ctx.arc(headX, headY, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Solid bright head
        ctx.beginPath();
        ctx.arc(headX, headY, 3, 0, Math.PI * 2);
        ctx.fillStyle =
          theme === "dark"
            ? "rgba(255, 240, 200, 1)"
            : "rgba(200, 220, 250, 1)";
        ctx.fill();
      }

      // Draw arrowhead only when line is fully drawn
      if (drawProgress >= 0.95) {
        const arrowLength = 8;
        const arrowAngle = Math.PI / 6;
        const arrowOpacity = 0.25 * fadeOutOpacity;

        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(
          endX - arrowLength * Math.cos(angle - arrowAngle),
          endY - arrowLength * Math.sin(angle - arrowAngle),
        );
        ctx.moveTo(endX, endY);
        ctx.lineTo(
          endX - arrowLength * Math.cos(angle + arrowAngle),
          endY - arrowLength * Math.sin(angle + arrowAngle),
        );
        ctx.strokeStyle =
          theme === "dark"
            ? `rgba(249, 115, 22, ${arrowOpacity})`
            : `rgba(100, 120, 150, ${arrowOpacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const drawNode = (
      ctx: CanvasRenderingContext2D,
      node: NetworkNode,
      theme: string | undefined,
      globalPhase: number,
    ) => {
      // Sequential pulse timing based on layer (continuous flow):
      // input nodes glow at start of cycle
      // hidden nodes glow at midpoint when first lines complete
      // output nodes glow at end when second lines complete
      let pulseIntensity = 0;
      if (node.layer === "input") {
        // Active at the very start (0-0.1)
        if (globalPhase <= 0.1) {
          const localPhase = globalPhase / 0.1;
          pulseIntensity = Math.sin(localPhase * Math.PI);
        }
      } else if (node.layer === "hidden") {
        // Active at midpoint (0.45-0.55)
        if (globalPhase >= 0.45 && globalPhase <= 0.55) {
          const localPhase = (globalPhase - 0.45) / 0.1;
          pulseIntensity = Math.sin(localPhase * Math.PI);
        }
      } else {
        // output: Active at the end (0.9-1.0)
        if (globalPhase >= 0.9) {
          const localPhase = (globalPhase - 0.9) / 0.1;
          pulseIntensity = Math.sin(localPhase * Math.PI);
        }
      }

      const baseScale = 1 + Math.sin(node.pulsePhase) * 0.02;
      const pulseScale = baseScale + pulseIntensity * 0.05;
      const currentRadius = node.radius * pulseScale;

      // Outer glow - very subtle intensity
      const baseGlowOpacity = 0.05;
      const glowOpacity = baseGlowOpacity + pulseIntensity * 0.1;

      const glowGradient = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        currentRadius * (1.6 + pulseIntensity * 0.4),
      );

      if (theme === "dark") {
        glowGradient.addColorStop(0, `rgba(249, 115, 22, ${glowOpacity})`);
        glowGradient.addColorStop(
          0.6,
          `rgba(249, 115, 22, ${glowOpacity * 0.2})`,
        );
        glowGradient.addColorStop(1, "rgba(249, 115, 22, 0)");
      } else {
        glowGradient.addColorStop(0, `rgba(100, 120, 150, ${glowOpacity})`);
        glowGradient.addColorStop(
          0.6,
          `rgba(100, 120, 150, ${glowOpacity * 0.2})`,
        );
        glowGradient.addColorStop(1, "rgba(100, 120, 150, 0)");
      }

      ctx.beginPath();
      ctx.arc(
        node.x,
        node.y,
        currentRadius * (1.6 + pulseIntensity * 0.4),
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Main node with gradient
      const nodeGradient = ctx.createRadialGradient(
        node.x - currentRadius * 0.3,
        node.y - currentRadius * 0.3,
        0,
        node.x,
        node.y,
        currentRadius,
      );

      const nodeOpacity = 0.6 + pulseIntensity * 0.15;

      if (theme === "dark") {
        nodeGradient.addColorStop(0, `rgba(255, 220, 180, ${nodeOpacity})`);
        nodeGradient.addColorStop(
          0.5,
          `rgba(255, 180, 120, ${nodeOpacity * 0.9})`,
        );
        nodeGradient.addColorStop(
          1,
          `rgba(249, 115, 22, ${nodeOpacity * 0.8})`,
        );
      } else {
        nodeGradient.addColorStop(0, `rgba(180, 190, 210, ${nodeOpacity})`);
        nodeGradient.addColorStop(
          0.5,
          `rgba(130, 150, 175, ${nodeOpacity * 0.9})`,
        );
        nodeGradient.addColorStop(
          1,
          `rgba(100, 120, 150, ${nodeOpacity * 0.8})`,
        );
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = nodeGradient;
      ctx.fill();

      // Node border - subtle when pulsing
      const borderOpacity = 0.3 + pulseIntensity * 0.2;
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
      ctx.strokeStyle =
        theme === "dark"
          ? `rgba(200, 100, 50, ${borderOpacity})`
          : `rgba(80, 100, 130, ${borderOpacity})`;
      ctx.lineWidth = 1.5 + pulseIntensity * 0.5;
      ctx.stroke();
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
