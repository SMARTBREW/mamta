"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { UPDATED_TESTIMONIALS } from '@/lib/constants';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  organization: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const testimonials = UPDATED_TESTIMONIALS;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (!isTouching) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [testimonials.length, isTouching]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
    if (touchStart - touchEnd > 100) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else if (touchStart - touchEnd < -100) {
      // Swipe right
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-roboto font-bold text-black mb-4 px-4">
            Voices of{' '}
            <span className="bg-gradient-to-r from-mamta-primary to-mamta-teal bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <div className="w-24 h-1 bg-mamta-primary mx-auto mb-6"></div>
          <p className="text-base font-arial text-gray-600 max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed">
            Hear from health workers, researchers, and community members whose lives have been transformed
            through our health initiatives.
          </p>
        </motion.div>

        <div className="relative">
          
          <div 
            className="relative min-h-[250px] sm:min-h-[280px] md:min-h-[300px] flex items-center justify-center px-2 sm:px-4"
            ref={testimonialRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Card className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-5 md:p-6 relative border border-gray-100">
                    <CardContent className="p-0">
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, 15, 0, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6"
                      >
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-mamta-primary" />
                      </motion.div>
                      
                      <div className="flex flex-col sm:flex-row md:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 pt-6 sm:pt-0">
                        <motion.div 
                          className="flex-shrink-0 order-first sm:order-first"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-cover bg-center shadow-lg border-2 border-white"
                            style={{backgroundImage: `url('${testimonials[currentIndex].image}')`}}
                          />
                        </motion.div>
                        
                        <div className="flex-1 text-center sm:text-left">
                          <blockquote className="text-sm sm:text-base md:text-lg font-arial text-gray-700 italic leading-relaxed mb-3 sm:mb-4 px-2 sm:px-0">
                            "{testimonials[currentIndex].quote}"
                          </blockquote>
                          
                          <div className="space-y-1 sm:space-y-2">
                            <div className="font-roboto font-semibold text-black text-base sm:text-lg">
                              {testimonials[currentIndex].name}
                            </div>
                            <div className="text-mamta-primary font-arial font-medium text-sm sm:text-base">
                              {testimonials[currentIndex].role}
                            </div>
                            <div className="text-gray-600 text-xs sm:text-sm font-arial">
                              {testimonials[currentIndex].organization}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          
          <div className="sm:hidden flex justify-center mt-4 items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-gray-500 flex items-center bg-white/80 px-3 py-1 rounded-full shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M17 8l4 4-4 4"></path>
                <path d="M3 12h18"></path>
              </svg>
              Swipe to see more
            </motion.div>
          </div>

          
          <div className="flex items-center justify-center space-x-4 mt-4 sm:mt-5">
            <div className="flex space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 sm:h-3 md:h-4 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-mamta-primary w-6 sm:w-8 md:w-10' 
                      : 'bg-gray-300 w-2 sm:w-3 md:w-4 hover:bg-mamta-secondary'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}