import Image from 'next/image';
import { Users, Shield, Heart, ArrowRightLeft } from 'lucide-react';

export default function AboutPreview() {
  const whatWeDoItems = [
    {
      icon: Users,
      title: "Women's Leadership Initiatives",
      description: "Promote and support elected women's leadership in local governance",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Access to Rights and Entitlements", 
      description: "Ensuring the most marginalized and vulnerable communities in Panchayats can access their rights and entitlements",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Heart,
      title: "Advocating Women's Empowerment",
      description: "Build a national platform to advocate for women's political empowerment",
      bgColor: "bg-orange-100", 
      iconColor: "text-orange-600"
    },
    {
      icon: ArrowRightLeft,
      title: "Facilitating Learning and Exchange",
      description: "Facilitating greater cross learning and exchange across multiple spaces",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text (left) */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Who We Are</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Mamta Health Institute for Mother and Child has been innovating in research methods for strengthening health systems and implementing public health initiatives for more than 30 years. It is a registered non-profit organization under the Society Registration Act, 1860. It is also registered under the FCRA and has completed all the required compliances to manage and implement projects in India with foreign donations and receipts for the next five years.
            </p>
            <a href="/about" className="underline font-semibold text-black">READ MORE</a>
          </div>

          {/* Image (right) */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden order-first md:order-last">
            <Image src="/images/hero/mamta3.jpg" alt="Mamta HIMC work" fill className="object-cover" priority={false} />
          </div>
        </div>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-red-200 hover:border-red-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl perspective-1000"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transform: 'rotateX(0deg) rotateY(0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotateX(-5deg) rotateY(5deg) translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
                  }}
                >
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
           </div>

        </div>
      </section>
    );
  }


