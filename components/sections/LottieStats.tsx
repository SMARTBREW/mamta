"use client";

import { useEffect, useState } from 'react';
import { LOTTIE_STATS } from '@/lib/constants';

export default function LottieStatsSection() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = LOTTIE_STATS;

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 text-black">
                
                <span>{startAnimation ? stat.value : 0}</span>
              </div>
              <div className="text-base md:text-lg font-semibold text-black mb-1">{stat.label}</div>
              <div className="text-xs md:text-sm font-medium text-black">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
