"use client";

import { useEffect, useRef, useState } from "react";

const metricsData = [
  { value: 124, label: "Collaborations" },
  { value: 7, label: "Awards & Features" },
  { value: 85, label: "Completed Projects" },
];

const AnimatedCounter = ({
  endValue,
  duration = 2000,
  isInView,
}: {
  endValue: number;
  duration?: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * endValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, endValue, duration]);

  return <>{isInView ? count : 0}</>;
};

const MetricsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
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
    <section className="bg-background text-primary-text py-20 md:py-28">
      <div className="container px-6">
        <div
          ref={sectionRef}
          className="flex flex-col md:flex-row justify-around items-center gap-y-16 md:gap-x-12 lg:gap-x-16"
        >
          {metricsData.map((metric, index) => (
            <div
              key={index}
              className={`text-center transition-all ease-out duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h2 className="font-display text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-bold text-white leading-none tracking-tight">
                <AnimatedCounter endValue={metric.value} isInView={isInView} />
              </h2>
              <p className="mt-3 md:mt-4 text-[#b3b3b3] text-base md:text-lg font-medium tracking-wide uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;