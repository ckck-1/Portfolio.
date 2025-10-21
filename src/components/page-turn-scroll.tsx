"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PageTurnSectionProps {
  children: React.ReactNode;
  index: number;
  totalSections: number;
}

const PageTurnSection = ({ children, index, totalSections }: PageTurnSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Calculate transforms for page peel effect from bottom
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.95, 0.85]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -8, -20]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-10%"]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0px", "8px", "24px"]
  );

  return (
    <div
      ref={ref}
      className="sticky top-0 h-screen w-full"
      style={{
        zIndex: totalSections - index,
      }}
    >
      <motion.div
        style={{
          scale,
          rotateX,
          y,
          borderRadius,
          transformOrigin: "bottom center",
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full shadow-2xl"
      >
        <div className="h-full w-full overflow-auto bg-background">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

interface PageTurnScrollProps {
  children: React.ReactNode[];
}

const PageTurnScroll = ({ children }: PageTurnScrollProps) => {
  const totalSections = React.Children.count(children);

  return (
    <div className="relative" style={{ perspective: "2000px" }}>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={{ height: "100vh" }}>
          <PageTurnSection index={index} totalSections={totalSections}>
            {child}
          </PageTurnSection>
        </div>
      ))}
    </div>
  );
};

export default PageTurnScroll;