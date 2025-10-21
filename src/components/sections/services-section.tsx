"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ServicesSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="bg-background py-20 md:py-28" ref={ref}>
            <div className="container mx-auto max-w-7xl px-6 md:px-12 xl:px-[4.5rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
                    {/* Left Column */}
                    <div className={`flex flex-col gap-6 md:gap-8 transition-all ease-out duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {/* Innovation Card */}
                        <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-[20px] transition-transform duration-300 hover:scale-[1.02]">
                            <div className="flex items-start gap-4 md:gap-6 mb-5">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a815e_Sticker-Mockup-6.jpg"
                                        alt="Innovation"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-display text-primary-text text-2xl md:text-3xl font-semibold uppercase leading-tight">Innovation</h3>
                            </div>
                            <p className="text-[#b3b3b3] text-sm md:text-base font-medium uppercase tracking-wide mb-3">
                                Creative Tech
                            </p>
                            <p className="text-[#b3b3b3] text-base leading-relaxed">
                                I create smart, functional, and human-centered apps and designs that bring ideas to life. Every project I build has one goal — to make technology feel natural, powerful, and accessible.
                            </p>
                        </div>

                        {/* Impact Card */}
                        <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-[20px] transition-transform duration-300 hover:scale-[1.02]">
                            <div className="flex items-start gap-4 md:gap-6 mb-5">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a81e1_Wall-Hanging-Poster-7.jpg"
                                        alt="Impact"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-display text-primary-text text-2xl md:text-3xl font-semibold uppercase leading-tight">Impact</h3>
                            </div>
                            <p className="text-[#b3b3b3] text-sm md:text-base font-medium uppercase tracking-wide mb-3">
                                Purpose
                            </p>
                            <p className="text-[#b3b3b3] text-base leading-relaxed">
                                I believe in using technology to solve Africa's biggest challenges — from food insecurity to unemployment — by building systems that empower and connect people.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={`flex flex-col gap-6 md:gap-8 transition-all ease-out duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="mb-4">
                            <h5 className="font-display text-sm md:text-base font-medium uppercase tracking-[0.15em] text-[#b3b3b3] mb-4 md:mb-5">
                                Creative Solutions
                            </h5>
                            <h2 className="font-display font-bold uppercase text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.25rem] leading-[0.95] tracking-[-0.02em] text-primary-text">
                                SERVICES
                            </h2>
                        </div>
                        
                        {/* Development Card */}
                        <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-[20px] transition-transform duration-300 hover:scale-[1.02]">
                            <div className="flex items-start gap-4 md:gap-6 mb-5">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a8269_CreativeDesignStudioX-8.jpg"
                                        alt="Development"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-display text-primary-text text-2xl md:text-3xl font-semibold uppercase leading-tight">Development</h3>
                            </div>
                            <p className="text-[#b3b3b3] text-base leading-relaxed">
                                I build fast, modern web and mobile apps using React, Node.js, and React Native. My projects are clean, scalable, and built with real users in mind.
                            </p>
                        </div>

                        {/* Design Card */}
                        <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-[20px] transition-transform duration-300 hover:scale-[1.02]">
                            <div className="flex items-start gap-4 md:gap-6 mb-5">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66f629d681ac33b5c79a826a_AppleWatch-9.jpg"
                                        alt="Design"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-display text-primary-text text-2xl md:text-3xl font-semibold uppercase leading-tight">Design</h3>
                            </div>
                            <p className="text-[#b3b3b3] text-base leading-relaxed">
                                I design beautiful, intuitive interfaces with Figma, Canva, and Photoshop — blending functionality with emotion to create meaningful user experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;