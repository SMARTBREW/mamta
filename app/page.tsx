"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Menu, X } from 'lucide-react';
import HeroSection from '@/components/sections/Hero';
import StatsSection from '@/components/sections/Stats';
import AboutPreview from '@/components/sections/AboutPreview';
import CompanyMilestones from '@/components/sections/CompanyMilestones';
import ImpactStories from '@/components/sections/ImpactStories';
import OurPresence from '@/components/sections/OurPresence';
import OurBlogs from '@/components/sections/OurBlogs';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const navigationItems: string[] = [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header moved to Root layout */}

      {/* Hero Section */}
      <HeroSection />
     {/* Statistics Section */}
     <StatsSection />
      

      {/* About preview */}
      <AboutPreview />

      {/* Company Milestones */}
      <CompanyMilestones />

      {/* Our Presence */}
      <OurPresence />

      {/* Our Blogs */}
      <OurBlogs />

      {/* Impact Stories */}
      <ImpactStories />

      {/* Testimonials */}
      <Testimonials />

      

    </div>
  );
}