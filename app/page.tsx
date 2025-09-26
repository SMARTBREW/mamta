"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Menu, X } from 'lucide-react';

const HeroSection = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <div className="h-[70vh] bg-gray-100 animate-pulse" />
});

const StatsSection = dynamic(() => import('@/components/sections/Stats'), {
  loading: () => <div className="py-16 bg-gray-100 animate-pulse" />
});

const AboutPreview = dynamic(() => import('@/components/sections/AboutPreview'), {
  loading: () => <div className="py-16 bg-gray-100 animate-pulse" />
});

const CompanyMilestones = dynamic(() => import('@/components/sections/CompanyMilestones'), {
  loading: () => <div className="py-20 bg-gray-100 animate-pulse" />
});

const ImpactStories = dynamic(() => import('@/components/sections/ImpactStories'), {
  loading: () => <div className="py-16 bg-gray-100 animate-pulse" />
});

const OurPresence = dynamic(() => import('@/components/sections/OurPresence'), {
  loading: () => <div className="py-16 bg-gray-100 animate-pulse" />
});

const OurBlogs = dynamic(() => import('@/components/sections/OurBlogs'), {
  loading: () => <div className="py-16 bg-gray-100 animate-pulse" />
});

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="py-16 bg-gray-100 animate-pulse" />
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const navigationItems: string[] = [];

  return (
    <div className="min-h-screen bg-white">
      
      
      <HeroSection />
     
     <StatsSection />
      

      
      <AboutPreview />

      
      <CompanyMilestones />

      
      <OurPresence />

      
      <OurBlogs />

      
      <ImpactStories />

      
      <Testimonials />

      

    </div>
  );
}