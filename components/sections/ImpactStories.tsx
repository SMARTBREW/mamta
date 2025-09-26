import { Card, CardContent } from '@/components/ui/card';
import { UPDATED_IMPACT_STORIES } from '@/lib/constants';
import ErrorBoundary from '@/components/ui/error-boundary';
import Image from 'next/image';

export default function ImpactStories() {
  return (
    <ErrorBoundary>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-roboto font-bold text-center text-black mb-4">Impact Stories</h2>
          <div className="w-24 h-1 bg-mamta-primary mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {UPDATED_IMPACT_STORIES.map((story) => (
              <Card 
                key={story.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image 
                    src={story.image} 
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-roboto font-bold text-black mb-3">{story.title}</h3>
                  <p className="text-gray-600 text-base font-arial leading-relaxed">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}