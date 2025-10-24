"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const skills = [
  { name: "JavaScript", alt: "JavaScript" },
  { name: "HTML5", alt: "HTML5" },
  { name: "CSS3", alt: "CSS3" },
  { name: "React", alt: "React" },
  { name: "Node.js", alt: "Node.js" },
  { name: "TypeScript", alt: "TypeScript" },
  { name: "Git", alt: "Git" },
  { name: "GitHub", alt: "GitHub" },
  { name: "MongoDB", alt: "MongoDB" },
  { name: "MySQL", alt: "MySQL" },
  { name: "PostgreSQL", alt: "PostgreSQL" },
  { name: "Express.js", alt: "Express.js" },
  { name: "Tailwind CSS", alt: "Tailwind CSS" },
  { name: "Bootstrap", alt: "Bootstrap" },
  { name: "Laravel", alt: "Laravel" },
  { name: "VS Code", alt: "VS Code" },
  { name: "Figma", alt: "Figma" },
  { name: "React Native", alt: "React Native" },
  { name: "Flutter", alt: "Flutter" },
  { name: "PHP", alt: "PHP" },
];

const CombinedSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 80s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 80s linear infinite;
        }
        .skill-badge {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 12px 28px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <section ref={sectionRef} className="bg-background overflow-hidden pt-0 pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-[4.5rem] max-w-[1440px] space-y-16">
          {/* Skills Row */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0s' }}>
            <div className="flex">
              <div className="flex flex-nowrap animate-scroll-right">
                {skills.map((skill, index) => (
                  <div key={index} className="flex-shrink-0 px-6 flex items-center justify-center">
                    <span className="skill-badge text-white font-display text-lg font-medium uppercase tracking-wide">{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap animate-scroll-right" aria-hidden="true">
                {skills.map((skill, index) => (
                  <div key={index} className="flex-shrink-0 px-6 flex items-center justify-center">
                    <span className="skill-badge text-white font-display text-lg font-medium uppercase tracking-wide">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
            <div className={`flex flex-col gap-6 md:gap-8 transition-all ease-out duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '0s' }}>
              <ServiceCard
                img="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a815e_Sticker-Mockup-6.jpg"
                title="Innovation"
                subtitle="Creative Tech"
                description="I create smart, functional, and human-centered apps and designs that bring ideas to life."
              />
              <ServiceCard
                img="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a81e1_Wall-Hanging-Poster-7.jpg"
                title="Impact"
                subtitle="Purpose"
                description="I believe in using technology to solve Africa's biggest challenges — building systems that empower and connect people."
              />
            </div>
            <div className={`flex flex-col gap-6 md:gap-8 transition-all ease-out duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
              <ServiceCard
                img="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a8269_CreativeDesignStudioX-8.jpg"
                title="Development"
                subtitle=""
                description="I build fast, modern web and mobile apps using React, Node.js, and React Native."
              />
              <ServiceCard
                img="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a826a_AppleWatch-9.jpg"
                title="Design"
                subtitle=""
                description="I design beautiful, intuitive interfaces with Figma, Canva, and Photoshop."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Reusable Service Card
const ServiceCard = ({ img, title, subtitle, description }: any) => (
  <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-[20px] transition-transform duration-300 hover:scale-[1.02]">
    <div className="flex items-start gap-4 md:gap-6 mb-5">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
        <Image src={img} alt={title} width={80} height={80} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-display text-primary-text text-2xl md:text-3xl font-semibold uppercase leading-tight">{title}</h3>
    </div>
    {subtitle && <p className="text-[#b3b3b3] text-sm md:text-base font-medium uppercase tracking-wide mb-3">{subtitle}</p>}
    <p className="text-[#b3b3b3] text-base leading-relaxed">{description}</p>
  </div>
);

export default CombinedSection;
