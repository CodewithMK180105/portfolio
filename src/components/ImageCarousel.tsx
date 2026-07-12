"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageCarouselProps = {
  images: string[];
  contain?: boolean;
};

export default function ImageCarousel({
  images,
  contain,
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-2xl"
      >
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={800}
                height={600}
                className={`w-full rounded-2xl ${contain ? "object-contain" : "object-cover aspect-[4/3]"}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur transition hover:scale-105 dark:bg-zinc-900/80"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur transition hover:scale-105 dark:bg-zinc-900/80"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}