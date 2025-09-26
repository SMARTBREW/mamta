import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ABOUT_PREVIEW_ITEMS } from '@/lib/constants';
import ErrorBoundary from '@/components/ui/error-boundary';

export default function AboutPreview() {

  return (
    <ErrorBoundary>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-roboto font-bold text-black mb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-mamta-primary mb-6"></div>
            <p className="text-gray-700 text-base font-arial leading-relaxed mb-4">
              Mamta Health Institute for Mother and Child has been innovating in research methods for strengthening health systems and implementing public health initiatives for more than 30 years. It is a registered non-profit organization under the Society Registration Act, 1860. It is also registered under the FCRA and has completed all the required compliances to manage and implement projects in India with foreign donations and receipts for the next five years.
            </p>
            <a href="/about" className="underline font-arial font-semibold text-black">READ MORE</a>
          </div>

          
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden order-first md:order-last">
            <Image src="/images/hero/mamta3.jpg" alt="Mamta HIMC work" fill className="object-cover" priority={false} />
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_PREVIEW_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-red-200 hover:border-red-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardContent className="p-0">
                    
                    <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${item.iconColor}`} />
                    </div>
                    
                    
                    <h3 className="text-lg font-roboto font-bold text-black mb-3 group-hover:text-mamta-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    
                    <p className="text-gray-600 text-base font-arial leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
           </div>

        </div>
      </section>
    </ErrorBoundary>
  );
}


