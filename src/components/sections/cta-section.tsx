"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    label: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
    getIn: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    arrow: {
      hidden: { opacity: 0, scale: 0.5, rotate: -180 },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
    touch: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    button: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
      },
    },
  };

  return (
    <section className="bg-background py-20 md:py-28 lg:py-36">
      <div className="container px-6">
        <motion.div
          ref={ref}
          className="flex flex-col items-center justify-center gap-10 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col items-center text-center">
            <motion.h5
              variants={itemVariants.label}
              className="font-body text-sm md:text-base font-medium uppercase leading-snug tracking-[0.15em] text-[#b3b3b3] mb-6"
            >
              GET IN TOUCH
            </motion.h5>
            <motion.div
              variants={itemVariants.getIn}
              className="mb-4"
            >
              <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white text-center">
                Let's build something bold,
              </h2>
            </motion.div>
            <motion.h2
              variants={itemVariants.touch}
              className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white mb-6"
            >
              creative, and meaningful
            </motion.h2>
            <motion.p
              variants={itemVariants.label}
              className="text-[#b3b3b3] text-base md:text-lg leading-relaxed max-w-2xl mb-8"
            >
              Whether it's a brand, an app, or a full digital system — I'm here to bring your ideas to life.
            </motion.p>
            <motion.div variants={itemVariants.button}>
              <a
                href="mailto:ckckclare@gmail.com"
                className="group relative flex items-center justify-center gap-x-4 overflow-hidden rounded-full bg-white py-3.5 pl-8 pr-3.5 font-semibold text-black no-underline transition-all duration-400 ease-in-out hover:bg-accent hover:scale-105"
              >
                <div className="relative h-[1.35em] overflow-hidden">
                  <span className="block text-base md:text-lg transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
                    📧 ckckclare@gmail.com
                  </span>
                  <span className="absolute inset-0 block translate-y-full text-base md:text-lg transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0">
                    📧 ckckclare@gmail.com
                  </span>
                </div>
                <div className="flex size-12 md:size-14 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-inset ring-black/10">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/svgs/66f629d681ac33b5c79a8158_arrow_outward-1.svg"
                    alt="arrow icon"
                    width={24}
                    height={24}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;