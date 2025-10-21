"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type PortfolioItem = {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  href: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Chat App",
    subtitle: "Real-Time Messaging",
    description: "Connect instantly with modern features like typing indicators, image sharing, and emoji support — built with React, Node.js, and Socket.io.",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a828d_BoardMockup-10.jpg",
    href: "/works/chat-app",
  },
  {
    title: "School MIS System",
    subtitle: "Smart Education Management",
    description: "A platform for students and teachers to connect, track results, attendance, and feedback in one place.",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a828e_PosterMockup-11.jpg",
    href: "/works/school-mis",
  },
  {
    title: "TradeLink App",
    subtitle: "Business & Logistics",
    description: "A mobile platform that helps users see, buy, and move goods across Africa in real time — simplifying trade for small businesses.",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a828f_Boards-Environment-12.jpg",
    href: "/works/tradelink",
  },
  {
    title: "VR World Game",
    subtitle: "Virtual Reality Sandbox",
    description: "A futuristic VR world where every character is a real human player. Starting in Rwanda, expanding globally.",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a828d_BoardMockup-10.jpg",
    href: "/works/vr-world",
  },
];

const FullScreenWorkCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <div ref={ref} className="relative h-screen w-full flex items-center justify-center">
      <motion.div
        style={{ opacity, scale, y }}
        className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center"
      >
        <a href={item.href} className="block group w-full">
          <div className="relative w-full h-[85vh] overflow-hidden rounded-3xl">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="100vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/50 backdrop-blur-sm">
              <div className="flex h-40 w-40 md:h-48 md:w-48 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:scale-110 scale-95">
                <span className="font-display text-base md:text-lg font-semibold uppercase tracking-[0.1em] px-6 text-center leading-tight">
                  View Work
                </span>
              </div>
            </div>
            
            {/* Content overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight tracking-tight mb-2">
                {item.title}
              </h3>
              <h4 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-accent mb-4">
                {item.subtitle}
              </h4>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section className="bg-black">
      {portfolioItems.map((item, index) => (
        <FullScreenWorkCard key={item.title} item={item} index={index} />
      ))}
    </section>
  );
};

export default PortfolioSection;