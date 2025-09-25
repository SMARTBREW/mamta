"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
// arrows removed per request

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/images/hero/mamta1.jpg',
    '/images/hero/mamta2.jpg',
    '/images/hero/mamta3.jpg',
    '/images/hero/mamta4.jpg',
    '/images/hero/mamta5.jpg',
    '/images/hero/mamta6.jpg'
  ];

  const heroContent = [
    {
      title: 'Young People\'s SRHR',
      description:
        'Advancing sexual and reproductive health and rights for youth through a life-cycle approach.'
    },
    {
      title: 'RMNCH+A',
      description:
        'Partnering with systems and communities to reduce maternal and child mortality.'
    },
    {
      title: 'Early Childhood Development',
      description:
        'Supporting children’s cognitive, emotional, social and physical growth from birth.'
    },
    {
      title: 'Communicable Diseases',
      description:
        'Integrated responses to TB and HIV for better access to care and support.'
    },
    {
      title: 'Non‑Communicable Diseases',
      description:
        'Building integrated models aligned with national and global health plans.'
    },
    {
      title: 'Adolescent Friendly Services',
      description:
        'Creating safe spaces via Youth Information and Gender Resource Centres.'
    }
  ];

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrentSlide((p) => (p - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    const id = setInterval(() => setCurrentSlide((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image src={image} alt={`Hero image ${index + 1}`} fill className="object-cover" priority={index === 0} />
              {/* Base subtle overlay */}
              <div className="absolute inset-0 bg-black/10" />
              {/* Left gradient overlay for better text contrast */}
              <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows removed */}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-24 left-6 sm:left-8 lg:left-12 z-10">
        <div className="w-80 sm:w-96 aspect-square rounded-xl p-6 sm:p-8 flex flex-col justify-end">
          <p className="text-xs md:text-sm text-white/80 mb-2 uppercase tracking-wide">
            THE MAMTA PROJECT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
            {heroContent[currentSlide].title}
          </h1>
        </div>
      </div>
    </section>
  );
}


