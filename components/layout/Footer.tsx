"use client";

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-mamta-primary" />
              <div className="text-lg sm:text-xl font-normal">
                <span className="text-white font-roboto">MAMTA HIMC</span>
                <span className="text-gray-400 text-xs sm:text-sm font-arial block -mt-1">Mamta Health Institute for Mother and Child</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-arial">
              Bridge to Health & Beyond. Working to strengthen health systems and public health initiatives across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-mamta-primary transition-colors duration-200">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-mamta-primary transition-colors duration-200">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-mamta-primary transition-colors duration-200">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-mamta-primary transition-colors duration-200">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-roboto font-normal mb-4 sm:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-roboto font-normal mb-4 sm:mb-6 text-white">Our Programs</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Education Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Healthcare Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Emergency Response
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-sm sm:text-base">
                  Media & Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-roboto font-normal mb-4 sm:mb-6 text-white">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-mamta-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    B-5, Greater Kailash Enclave-II<br />
                    New Delhi 110048<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-mamta-primary flex-shrink-0" />
                <a href="tel:+911141069597" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-xs sm:text-sm">
                  +91 11 41069597
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-mamta-primary flex-shrink-0" />
                <a href="tel:+911141720210" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-xs sm:text-sm">
                  +91 11 41720210
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-mamta-primary flex-shrink-0" />
                <a href="mailto:mamta@mamtahimc.in" className="text-gray-300 hover:text-mamta-primary transition-colors duration-200 text-xs sm:text-sm">
                  mamta@mamtahimc.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} Mamta Health Institute for Mother and Child (MAMTA HIMC). All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link href="#" className="text-gray-400 hover:text-mamta-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-mamta-primary transition-colors duration-200">
                Terms of Use
              </Link>
              <Link href="#" className="text-gray-400 hover:text-mamta-primary transition-colors duration-200">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


