"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

const testimonialsData: Testimonial[] = [
  {
    quote: "I was impressed by how effortlessly he turned complex ideas into beautiful, functional designs. His creativity and logic always show.",
    name: "Davis Jones",
    title: "Entrepreneur",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66a5f61b61b9f0a48636ca00_Reviews3-13.jpg",
  },
  {
    quote: "Working with CK was a whole experience — he doesn't just design or code; he brings your vision to life with purpose and style.",
    name: "Jacob Black",
    title: "Director",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66a5f61b61b9f0a48636c9f7_Reviews1-14.jpg",
  },
  {
    quote: "I couldn't be happier with the results. He took our ideas and built something even better — fast, intuitive, and full of heart.",
    name: "Maria Smith",
    title: "Project Manager",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/images/66a5f61b61b9f0a48636ca05_Reviews2-15.jpg",
  },
];

const quoteIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/svgs/66f629d681ac33b5c79a8256_Quote-2.svg";

export default function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter:true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
      plugin.current.reset();
    };

    api.on("select", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
    };

  }, [api]);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container px-6">
        <div className="slide-up-animation">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{ loop: true, duration: 50 }}
            className="w-full max-w-[920px] mx-auto"
          >
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-[#1a1a1a] rounded-[24px] py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-12 flex flex-col items-center text-center">
                    <Image
                      src={quoteIconUrl}
                      alt="Quote icon"
                      width={48}
                      height={38}
                      className="mb-8 md:mb-10 lg:mb-12 opacity-80"
                    />
                    <p className="font-display text-lg md:text-xl lg:text-2xl text-white/95 leading-[1.7] md:leading-[1.75] max-w-[680px] mx-auto">
                      {testimonial.quote}
                    </p>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={72}
                      height={72}
                      className="rounded-full object-cover mt-10 md:mt-12 mb-5 md:mb-6 ring-2 ring-white/10"
                    />
                    <div className="flex flex-col items-center gap-1">
                      <h5 className="font-display font-semibold text-base md:text-lg text-white tracking-wide">
                        {testimonial.name}
                      </h5>
                      <p className="font-display font-normal text-sm md:text-base text-[#b3b3b3] uppercase tracking-[0.1em]">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex items-center justify-center gap-4 md:gap-6 mt-10 md:mt-12">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-white w-8"
                      : "bg-white/30 hover:bg-white/50 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}