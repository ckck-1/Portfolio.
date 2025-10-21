"use client";

import React from 'react';

const WorksTitleSection = () => {
    const MarqueeBlock = () => (
        <>
            <h2 className="mx-8 flex-shrink-0 font-display text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-none uppercase tracking-tight text-white">
                My Works
            </h2>
            <h2 className="mx-8 flex-shrink-0 font-display text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-none uppercase tracking-tight text-transparent [-webkit-text-stroke:2px_#fff] [text-stroke:2px_#fff]">
                My Works
            </h2>
            <h2 className="mx-8 flex-shrink-0 font-display text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-none uppercase tracking-tight text-white">
                My Works
            </h2>
            <h2 className="mx-8 flex-shrink-0 font-display text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-none uppercase tracking-tight text-transparent [-webkit-text-stroke:2px_#fff] [text-stroke:2px_#fff]">
                My Works
            </h2>
        </>
    );

    return (
        <section className="bg-black py-16 md:py-20 overflow-hidden">
            <div className="relative w-full">
                <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
                    <MarqueeBlock />
                    <MarqueeBlock />
                </div>
            </div>
        </section>
    );
};

export default WorksTitleSection;