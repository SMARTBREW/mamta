import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface PresenceLocation {
  id: string;
  name: string;
  // Percentage positions relative to the image container
  top: string;
  left: string;
  impact?: string;
}

export default function OurPresence() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Approximate positions on the India map (percentages tuned visually)
  const locations: PresenceLocation[] = [
    { id: 'delhi', name: 'Himachal Pradesh', top: '21%', left: '35%', impact: 'HQ & policy programs' },
    { id: 'up', name: 'Uttar Pradesh', top: '38%', left: '48%', impact: 'Maternal & child health' },
    { id: 'bihar', name: 'Bihar', top: '40%', left: '59%', impact: 'Community health systems' },
    { id: 'rajasthan', name: 'Rajasthan', top: '37%', left: '28%', impact: 'Women empowerment' },
    { id: 'maharashtra', name: 'Maharashtra', top: '60%', left: '28%', impact: 'Urban health projects' },
    { id: 'odisha', name: 'Odisha', top: '55%', left: '57%', impact: 'Tribal health initiatives' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Headline + copy + stats */}
          <div>
            <div className="uppercase tracking-widest text-sm mb-2" style={{ color: '#000000' }}>Where we work</div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Outreach Spans Across Five States</h2>
            <p className="text-gray-700 mb-8 max-w-xl">
              We have successfully engaged with 1,97,121 elected women representatives with the aim of
              strengthening women’s quality participation in rural governance.
            </p>

            <div className="mb-8 font-semibold" style={{ color: '#000000' }}>Our Engagement Outreach</div>

            {/* Stats bubbles */}
            <div className="flex flex-wrap gap-6">
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center shadow-sm"
                   style={{ backgroundColor: '#f0e9d3' }}>
                <div className="text-3xl font-bold" style={{ color: '#000000' }}>1017</div>
                <div className="text-sm mt-1 text-gray-700">Gram Panchayats</div>
              </div>
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center shadow-sm"
                   style={{ backgroundColor: '#f0e9d3' }}>
                <div className="text-3xl font-bold" style={{ color: '#000000' }}>33</div>
                <div className="text-sm mt-1 text-gray-700">Districts</div>
              </div>
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center shadow-sm"
                   style={{ backgroundColor: '#f0e9d3' }}>
                <div className="text-3xl font-bold" style={{ color: '#000000' }}>54</div>
                <div className="text-sm mt-1 text-gray-700">Blocks</div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#our-presence"
                className="inline-block px-6 py-3 rounded-lg font-semibold"
                style={{ backgroundColor: '#f5cd4c', color: '#000000' }}
              >
                See where we work
              </a>
            </div>
          </div>

          {/* Right: Map with markers */}
          <div id="our-presence" className="relative w-full max-w-xl mx-auto">
            <img src="/images/india_map.svg" alt="India map" className="w-full h-auto" />

            {locations.map((loc) => (
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
  );
}
