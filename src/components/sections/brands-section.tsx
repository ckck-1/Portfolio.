"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a8180_load-2.png", alt: "Load brand logo" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a8184_logowithname3-3.png", alt: "Brand logo 3" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a8198_logowithname2-4.png", alt: "Brand logo 2" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a817d_logowithname1-5.png", alt: "Brand logo 1" },
];

const row1Logos = [...logos];
const row2Logos = [...logos].reverse();

const BrandsSection = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
        `}
      </style>
      <section id="brands" ref={sectionRef} className="py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-[4.5rem] max-w-[1440px]">
          <div className="space-y-12">
            {/* Row 1: moves left-to-right */}
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0s' }}>
              <div className="flex">
                <div className="flex flex-nowrap animate-scroll-right">
                  {row1Logos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 w-auto px-10 flex items-center justify-center h-24">
                      <Image src={logo.src} alt={logo.alt} width={180} height={40} className="object-contain" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-nowrap animate-scroll-right" aria-hidden="true">
                  {row1Logos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 w-auto px-10 flex items-center justify-center h-24">
                      <Image src={logo.src} alt={logo.alt} width={180} height={40} className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: moves right-to-left */}
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <div className="flex">
                <div className="flex flex-nowrap animate-scroll-left">
                  {row2Logos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 w-auto px-10 flex items-center justify-center h-24">
                      <Image src={logo.src} alt={logo.alt} width={180} height={40} className="object-contain" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-nowrap animate-scroll-left" aria-hidden="true">
                  {row2Logos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 w-auto px-10 flex items-center justify-center h-24">
                      <Image src={logo.src} alt={logo.alt} width={180} height={40} className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsSection;