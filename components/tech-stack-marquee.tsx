"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { TECH_STACK } from "@/lib/constants";

export function TechStackMarquee() {
  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <Marquee
        speed={40}
        pauseOnHover
        gradient={false} // We handle gradient with mask-image for better quality
        className="py-8"
      >
        <div className="flex items-center gap-12 px-10">
          {TECH_STACK.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group cursor-default"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={30}
                height={30}
                className="w-8 h-8 object-contain transition-all duration-300"
              />
              <span className="font-medium text-lg">{tech.name}</span>
            </div>
          ))}
          {/* Add a spacer at the end of the list to ensure gap between duplicated lists */}
        </div>
      </Marquee>
    </div>
  );
}
