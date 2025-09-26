"use client";

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div>
              <h1 className="text-3xl md:text-4xl font-roboto font-bold text-black mb-4">Who We Are</h1>
              <div className="w-24 h-1 bg-mamta-primary mb-6"></div>
              <p className="text-gray-700 text-base font-arial leading-relaxed mb-4">
                Mamta Health Institute for Mother and Child has been innovating in research methods for strengthening health systems and implementing public health initiatives for more than 30 years. It is a registered non-profit organization under the Society Registration Act, 1860. It is also registered under the FCRA and has completed all the required compliances to manage and implement projects in India with foreign donations and receipts for the next five years.
              </p>
              <a href="#" className="underline font-arial font-semibold text-mamta-primary hover:text-mamta-secondary transition-colors duration-200">READ MORE</a>
            </div>

            
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden order-first md:order-last">
              <Image
                src="/images/hero/mamta3.jpg"
                alt="Mamta HIMC work"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


