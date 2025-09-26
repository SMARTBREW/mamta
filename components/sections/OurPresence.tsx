import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PRESENCE_LOCATIONS } from '@/lib/constants';
import ErrorBoundary from '@/components/ui/error-boundary';

export default function OurPresence() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <ErrorBoundary>
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="uppercase tracking-widest text-sm mb-2 text-black">Where we work</div>
            <h2 className="text-3xl md:text-4xl font-roboto font-bold text-black mb-4">Our Outreach Spans Across Five States</h2>
            <div className="w-24 h-1 bg-mamta-primary mb-6"></div>
            <p className="text-gray-700 text-base mb-8 max-w-xl font-arial leading-relaxed">
              We have successfully engaged with 1,97,121 elected women representatives with the aim of
              strengthening women's quality participation in rural governance.
            </p>

            <div className="mb-8 font-arial font-semibold text-black">Our Engagement Outreach</div>

            <div className="flex flex-wrap gap-6">
            <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center shadow-sm bg-mamta-primary/10">
                <div className="text-3xl font-roboto font-bold text-mamta-primary">1017</div>
                <div className="text-sm mt-1 font-arial text-gray-700">Gram Panchayats</div>
              </div>
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center shadow-sm bg-mamta-secondary/10">
                <div className="text-3xl font-roboto font-bold text-mamta-secondary">33</div>
                <div className="text-sm mt-1 font-arial text-gray-700">Districts</div>
              </div>
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center shadow-sm bg-mamta-tertiary/10">
                <div className="text-3xl font-roboto font-bold text-mamta-tertiary">54</div>
                <div className="text-sm mt-1 font-arial text-gray-700">Blocks</div>
              </div>
            </div>

            <div className="mt-6">
              <Button
                onClick={() => document.getElementById('our-presence')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-mamta-primary text-white hover:bg-mamta-secondary transition-colors duration-200"
              >
                See where we work
              </Button>
            </div>
          </div>

          <div id="our-presence" className="relative w-full max-w-xl mx-auto">
            <img src="/images/india_map.svg" alt="India map" className="w-full h-auto" />

            {PRESENCE_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: loc.top, left: loc.left }}
                onMouseEnter={() => setHoveredId(loc.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative cursor-pointer">
                  <MapPin className="w-5 h-5 text-red-600 drop-shadow" />

                  {hoveredId === loc.id && (
                    <div className="absolute left-1/2 -translate-x-1/2 -top-3 translate-y-[-100%] bg-white border border-gray-200 shadow-xl rounded-lg px-3 py-2 w-48 z-10">
                      <div className="text-sm font-semibold text-black">{loc.name}</div>
                      {loc.impact && <div className="text-xs text-gray-600 mt-1">{loc.impact}</div>}
                      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-r border-b border-gray-200" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </ErrorBoundary>
  );
}
