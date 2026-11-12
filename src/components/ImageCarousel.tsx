"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageCarouselProps = {
  images: string[];
  contain?: boolean;
  aspectRatio?: string;
};

export default function ImageCarousel({
  images,
  contain,
  aspectRatio,
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const aspectClass = aspectRatio
    ? aspectRatio
    : contain
      ? "aspect-[16/8]"
      : "aspect-[4/3]";

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-2xl"
      >
        <div className="flex items-start">
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={contain ? 1920 : 800}
                height={contain ? 960 : 600}
                priority={index === 0}
                className={`w-full h-auto rounded-2xl ${aspectClass} ${
                  contain ? "object-contain" : "object-cover"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 sm:p-2 text-zinc-800 shadow-md backdrop-blur transition hover:scale-105 active:scale-95 dark:border dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200 cursor-pointer z-10"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 sm:p-2 text-zinc-800 shadow-md backdrop-blur transition hover:scale-105 active:scale-95 dark:border dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200 cursor-pointer z-10"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}