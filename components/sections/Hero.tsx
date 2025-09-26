"use client";

import { Suspense } from 'react';
import Image from 'next/image';
import { useHeroCarousel } from '@/hooks/use-hero-carousel';
import { HERO_IMAGES, HERO_CONTENT } from '@/lib/constants';
import { HeroSkeleton } from '@/components/ui/skeleton';
import ErrorBoundary from '@/components/ui/error-boundary';

function HeroContent() {
  const { currentSlide, goToSlide } = useHeroCarousel({ 
    totalSlides: HERO_IMAGES.length 
  });

  return (
    <section 
      className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      role="region"
      aria-label="Hero carousel"
    >
      <div className="absolute inset-0">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {HERO_IMAGES.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image 
                src={image} 
                alt={`Hero image ${index + 1}`} 
                fill 
                className="object-cover" 
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2"
        role="tablist"
        aria-label="Carousel navigation"
      >
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === currentSlide}
            tabIndex={index === currentSlide ? 0 : -1}
          />
        ))}
      </div>

      <div className="absolute bottom-24 left-6 sm:left-8 lg:left-12 z-10">
        <div className="w-80 sm:w-96 aspect-square rounded-xl p-6 sm:p-8 flex flex-col justify-end">
          <p className="text-xs md:text-sm font-arial text-white/80 mb-2 uppercase tracking-wide">
            THE MAMTA PROJECT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-roboto font-bold text-white leading-tight uppercase">
            {HERO_CONTENT[currentSlide].title}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroContent />
      </Suspense>
    </ErrorBoundary>
  );
}


