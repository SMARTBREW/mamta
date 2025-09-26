"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/logo/M-logo.png"
                alt="MAMTA HIMC Logo"
                width={220}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </div>

          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-sm font-arial font-medium text-gray-700 hover:text-mamta-primary transition-colors duration-200">ABOUT US</a>
            <a href="#" className="text-sm font-arial font-medium text-gray-700 hover:text-mamta-primary transition-colors duration-200">WORK</a>
            <a href="#" className="text-sm font-arial font-medium text-gray-700 hover:text-mamta-primary transition-colors duration-200">RESOURCES</a>
            <a href="#" className="text-sm font-arial font-medium text-gray-700 hover:text-mamta-primary transition-colors duration-200">GET INVOLVED</a>
            <a href="#" className="text-sm font-arial font-medium text-gray-700 hover:text-mamta-primary transition-colors duration-200">CONTACT US</a>
          </nav>

          
          <div className="flex items-center space-x-4">
            <Button className="relative text-white px-8 py-3 text-sm font-arial font-bold transition-all duration-200 transform hover:scale-105 overflow-hidden bg-mamta-primary hover:bg-mamta-secondary">
              <div className="absolute inset-0 opacity-90 bg-gradient-to-r from-mamta-secondary via-mamta-primary to-mamta-tertiary"></div>
              <div className="absolute inset-0 bg-brush-stroke bg-cover bg-center opacity-80" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Cpath d='M20,50 Q100,20 200,45 T380,50' stroke='%23ffffff' stroke-width='8' fill='none' opacity='0.3'/%3E%3Cpath d='M15,55 Q95,25 195,50 T375,55' stroke='%23ffffff' stroke-width='6' fill='none' opacity='0.2'/%3E%3C/svg%3E")`
              }}></div>
              <span className="relative z-10 tracking-wide">DONATE NOW</span>
            </Button>
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {["ABOUT US","WORK","RESOURCES","GET INVOLVED","CONTACT US"].map((item) => (
                <a
                  key={item}
                  href={item === 'ABOUT US' ? '/about' : '#'}
                  className="block px-3 py-2 text-sm font-arial font-medium text-gray-700 hover:text-mamta-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


