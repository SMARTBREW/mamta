"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import { UPDATED_TESTIMONIALS } from '@/lib/constants';
import { Quote } from 'lucide-react';
import ErrorBoundary from '@/components/ui/error-boundary';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  organization: string;
}

const TestimonialsMarquee = () => {
  const testimonials = UPDATED_TESTIMONIALS;

  // State to track if we're in mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect viewport size changes
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === "undefined") return;

    // Function to update state based on window width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard mobile breakpoint
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <ErrorBoundary>
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-roboto font-bold text-black mb-4">
              Voices of{' '}
              <span className="bg-gradient-to-r from-mamta-primary to-mamta-teal bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <div className="w-24 h-1 bg-mamta-primary mx-auto mb-6"></div>
            <p className="text-base font-arial text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hear from health workers, researchers, and community members whose lives have been transformed
              through our health initiatives.
            </p>
          </div>

        {isMobile ? (
          // Mobile view: Vertical stack
          <div className="flex flex-col items-center space-y-8 mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isMobile={true}
              />
            ))}
          </div>
        ) : (
          // Desktop view: Marquee animation with improved smoothness
          <div
            className="flex items-center justify-center mx-auto overflow-hidden relative py-8"
            style={{ width: "90%" }}
          >
            {/* Gradient fade on left */}
            <div className="absolute h-full w-32 top-0 left-0 bottom-0 bg-gradient-to-r from-white to-transparent z-10"></div>

            <div className="w-full">
              {/* Duplicated testimonials and decreased speed for smoother animation */}
              <Marquee
                gradient={false}
                speed={25}
                className="py-4 z-0"
                pauseOnHover={true}
              >
                {/* Duplicate testimonials for smoother looping */}
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <TestimonialCard
                      key={`${testimonial.id}-${index}`}
                      testimonial={testimonial}
                      isMobile={false}
                    />
                  )
                )}
              </Marquee>
            </div>

            {/* Gradient fade on right */}
            <div className="absolute h-full w-32 top-0 right-0 bottom-0 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        )}
        </div>
      </section>
    </ErrorBoundary>
  );
};

function TestimonialCard({ testimonial, isMobile }: { testimonial: Testimonial; isMobile: boolean }) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex-shrink-0 ${
        isMobile ? "w-full mx-0" : "mx-6"
      } flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
      style={{
        width: isMobile ? "100%" : "350px",
        height: isMobile ? "auto" : "380px",
        maxWidth: isMobile ? "500px" : "none",
      }}
    >
      <div className="relative p-6 flex flex-col flex-grow">
        {/* Quote Icon */}
        <div className="absolute top-4 left-4">
          <Quote className="w-8 h-8 text-mamta-primary" />
        </div>

        {/* Profile Image and Content */}
        <div className="flex flex-col items-center pt-8">
          <div
            className="w-16 h-16 rounded-full bg-cover bg-center shadow-lg border-2 border-white mb-4"
            style={{backgroundImage: `url('${testimonial.image}')`}}
          />
          
          <div className="text-center flex-grow">
            <blockquote className="text-sm font-arial text-gray-700 italic leading-relaxed mb-4 px-2">
              "{testimonial.quote}"
            </blockquote>
          </div>
        </div>

        {/* Author Info */}
        <div className="text-center mt-auto">
          <p className="font-roboto font-semibold text-black text-base mb-1">
            {testimonial.name}
          </p>
          <p className="text-mamta-primary font-arial font-medium text-sm mb-1">
            {testimonial.role}
          </p>
          <p className="text-gray-600 text-xs font-arial">
            {testimonial.organization}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsMarquee;