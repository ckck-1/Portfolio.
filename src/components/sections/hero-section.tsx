"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [modelRef, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for background elements
  const bg1Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const modelY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-black text-primary-text"
    >
      {/* Background Elements with Framer Motion */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-[1] h-[1344px] w-[1344px] -translate-x-1/2 -translate-y-1/2"
        style={{ y: bg1Y, willChange: "transform" }}
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a8268_fingerprint-16.svg"
          alt="Fingerprint pattern"
          layout="fill"
          objectFit="contain"
          className="opacity-5"
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 z-[1] h-[1344px] w-[1344px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,255,61,0.05)_0%,transparent_70%)]"
        style={{ y: bg2Y, willChange: "transform" }}
      />

      {/* Text Content with Parallax */}
      <motion.div
        className="relative z-[2] flex flex-col items-center justify-center text-center p-4 px-6 max-w-5xl"
        style={{ y: textY, willChange: "transform" }}
      >
        <motion.h5
          className={`mb-6 font-body text-sm md:text-base font-medium uppercase tracking-[0.15em] text-secondary-text/90 transition-all duration-1000 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "200ms" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome
        </motion.h5>
        <motion.h1
          className={`font-display text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white mb-8 transition-all duration-1000 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "400ms" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Meet Clare
        </motion.h1>
        <motion.p
          className={`font-body text-base md:text-lg lg:text-xl leading-relaxed text-white/80 max-w-3xl transition-all duration-1000 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "600ms" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A young African developer and creator building digital experiences that actually make a difference. I mix code, creativity, and purpose to turn ideas into real projects that solve problems, connect people, and look good doing it.
        </motion.p>
      </motion.div>

      {/* 3D Model with Parallax */}
      <motion.div
        ref={modelRef}
        className="absolute inset-0 z-[5] h-full w-full"
        style={{ y: modelY, willChange: "transform" }}
      >
        {inView && (
          <Suspense fallback={<div className="w-full h-full bg-gray-900 animate-pulse" />}>
            <Spline scene="https://prod.spline.design/fP0LH65i8bXQDQjZ/scene.splinecode" />
          </Suspense>
        )}
      </motion.div>

      {/* Scroll Down Button with Animation */}
      <motion.a
        href="#brands"
        aria-label="Scroll to next section"
        className="group absolute bottom-8 right-8 z-20 flex h-16 w-16 md:h-20 md:w-20 lg:h-[90px] lg:w-[90px] items-center justify-center rounded-full border-2 border-white/20 bg-black/30 backdrop-blur-sm transition-all duration-400 ease-in-out hover:bg-accent hover:border-accent md:bottom-12 md:right-12"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/svgs/66f629d681ac33b5c79a8158_arrow_outward-1.svg"
            alt="scroll down arrow"
            width={28}
            height={28}
            className="invert transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:invert-0 rotate-90"
          />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default React.memo(HeroSection);