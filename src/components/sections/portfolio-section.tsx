"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PortfolioItem = {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  highlights: string[];
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Afrilink",
    subtitle: "Freelancing Across Africa",
    description:
      "Afrilink is an Upwork-inspired freelancing platform connecting African talents with global clients.",
    techStack: ["React.js", "Node.js", "MongoDB", "Stripe/Flutterwave"],
    highlights: [
      "Secure user authentication and profiles",
      "Real-time project bidding",
      "Payment gateway integration",
      "Dashboard for clients and freelancers",
    ],
  },
  {
    title: "Milo",
    subtitle: "AI-Powered Content Creation",
    description:
      "Milo helps creators brainstorm, draft, and polish their content using AI technology.",
    techStack: ["OpenAI API", "Firebase", "React.js"],
    highlights: [
      "AI-assisted content generation",
      "Real-time collaborative editing",
      "Cloud storage for drafts",
      "Multi-format export (PDF, DOCX, etc.)",
    ],
  },
  // ... add other projects similarly
];

const WorksSection = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {portfolioItems.map((item) => (
        <FullScreenWorkCard
          key={item.title}
          item={item}
          onView={() => setSelectedProject(item)}
        />
      ))}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Glassmorphism container */}
            <motion.div
              className="relative w-full max-w-6xl h-[90vh] bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 flex flex-col overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-accent transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              {/* Project Title */}
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{selectedProject.title}</h3>
              <h4 className="text-accent text-2xl md:text-3xl mb-6 uppercase tracking-wider">
                {selectedProject.subtitle}
              </h4>

              {/* Project Overview */}
              <section className="mb-6">
                <h5 className="text-white/70 uppercase tracking-wide mb-2 font-semibold">
                  Overview
                </h5>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                  {selectedProject.description}
                </p>
              </section>

              {/* Tech Stack */}
              <section className="mb-6">
                <h5 className="text-white/70 uppercase tracking-wide mb-2 font-semibold">
                  Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-accent text-sm md:text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Highlights / Features */}
              <section className="mb-6">
                <h5 className="text-white/70 uppercase tracking-wide mb-2 font-semibold">
                  Highlights
                </h5>
                <ul className="list-disc list-inside text-white/80 text-lg md:text-xl space-y-1">
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>

              {/* Call to Action */}
              <section className="mt-auto">
                <p className="text-white/80 text-lg md:text-xl">
                  Interested in more details? DM me at{" "}
                  <a
                    href="mailto:ckckclare@gmail.com"
                    className="text-accent underline"
                  >
                    ckckclare@gmail.com
                  </a>{" "}
                  and I'll share the full project insights!
                </p>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const FullScreenWorkCard = ({
  item,
  onView,
}: {
  item: PortfolioItem;
  onView: () => void;
}) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center px-6">
      <motion.div className="relative z-10 text-center max-w-3xl">
        <motion.h3
          className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {item.title}
        </motion.h3>
        <motion.h4
          className="text-accent text-xl md:text-2xl mb-6 uppercase tracking-wider"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          {item.subtitle}
        </motion.h4>
        <motion.p
          className="text-white/80 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {item.description}
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-10 inline-block cursor-pointer rounded-full border border-white/50 px-8 py-3 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
          onClick={onView}
        >
          View Project
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorksSection;
