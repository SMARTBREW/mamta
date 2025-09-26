"use client";

import { useEffect, useState } from 'react';
import { Heart, Globe, Users, FileText } from 'lucide-react';

type Stat = {
  id: 'lives' | 'states' | 'countries' | 'papers' | 'persons';
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: any;
};

import { STATS_DATA } from '@/lib/constants';

function RollingDigit({ digit, duration = 2000, delay = 0 }: { digit: number; duration?: number; delay?: number }) {
  const [currentDigit, setCurrentDigit] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const totalRotations = 2; 
        const totalSteps = totalRotations * 10 + digit;
        const currentStep = Math.floor(progress * totalSteps);
        const animatedValue = currentStep % 10;
        
        setCurrentDigit(animatedValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCurrentDigit(digit);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [digit, duration, delay]);

  return (
    <span className="inline-block">
      {currentDigit}
    </span>
  );
}

function RollingNumber({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const digits = value.toString().split('').map(Number);
  
  return (
    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 text-black">
      {digits.map((digit, index) => (
        <RollingDigit 
          key={index} 
          digit={digit} 
          duration={duration} 
          delay={0} 
        />
      ))}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-7 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center">
          {STATS_DATA.map((stat, index) => (
            <div key={stat.id} className="transition-all duration-300 transform hover:-translate-y-2">
              {startAnimation && (
                <RollingNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  duration={3000} 
                />
              )}
              {!startAnimation && (
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 text-black">
                  0{stat.suffix}
                </div>
              )}
              <div className="text-base md:text-lg font-semibold text-black mb-1">{stat.label}</div>
              <div className="text-xs md:text-sm font-medium text-black">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


