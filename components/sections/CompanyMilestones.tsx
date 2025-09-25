import { Users, Building2, Award, Globe, Heart, Target } from 'lucide-react';

export default function CompanyMilestones() {
  const milestones = [
    {
      year: 1994,
      title: "Foundation",
      description: "Mamta Health Institute for Mother and Child was established to focus on maternal and child health initiatives.",
      icon: Building2,
      color: "bg-orange-500"
    },
    {
      year: 2000,
      title: "First Major Program",
      description: "Launched comprehensive maternal health program reaching rural communities across multiple states.",
      icon: Heart,
      color: "bg-teal-500"
    },
    {
      year: 2005,
      title: "Research Excellence",
      description: "Established as a leading research institution in public health with international recognition.",
      icon: Award,
      color: "bg-blue-500"
    },
    {
      year: 2010,
      title: "Policy Impact", 
      description: "Research findings influenced national health policies and guidelines for maternal care.",
      icon: Target,
      color: "bg-purple-500"
    },
    {
      year: 2015,
      title: "Digital Innovation",
      description: "Pioneered digital health solutions and telemedicine programs for remote areas.",
      icon: Globe,
      color: "bg-green-500"
    },
    {
      year: 2024,
      title: "30 Years of Impact",
      description: "Celebrating three decades of innovation in maternal and child health research and implementation.",
      icon: Users,
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Company Milestones
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three decades of innovation, research excellence, and transformative impact in maternal and child health
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden">
             {/* Timeline Container */}
             <div className="relative py-20">
              {/* Main horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 transform -translate-y-1/2 shadow-sm"></div>
              
               {/* Milestones Grid */}
               <div className="grid grid-cols-6 gap-6 relative">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={index} className="relative flex flex-col items-center group">
                       {/* Content Above Timeline (Even indices) */}
                       {isEven && (
                         <div className="mb-14 text-center transform transition-all duration-300 group-hover:-translate-y-2">
                           <div className="w-52 mx-auto">
                             <div className="text-2xl font-bold mb-2 text-gray-900">
                               {milestone.year}
                             </div>
                             <div className="text-base font-semibold mb-2 text-gray-800 leading-tight">
                               {milestone.title}
                             </div>
                             <div className="text-xs text-gray-600 leading-relaxed">
                               {milestone.description}
                             </div>
                           </div>
                           {/* Enhanced connector */}
                           <div className="w-0.5 h-8 bg-gradient-to-b from-yellow-500 to-transparent mx-auto mt-4"></div>
                         </div>
                       )}
                      
                      {/* Enhanced Diamond Marker */}
                      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <div 
                          className="w-20 h-20 transform rotate-45 flex items-center justify-center shadow-xl border-4 border-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300"
                        >
                          <div 
                            className={`w-12 h-12 ${milestone.color} transform -rotate-45 rounded-xl flex items-center justify-center shadow-md`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        {/* Pulse effect */}
                        <div className="absolute inset-0 w-20 h-20 transform rotate-45 bg-yellow-400 animate-ping opacity-20"></div>
                      </div>
                      
                       {/* Content Below Timeline (Odd indices) */}
                       {!isEven && (
                         <div className="mt-14 text-center transform transition-all duration-300 group-hover:translate-y-2">
                           {/* Enhanced connector */}
                           <div className="w-0.5 h-8 bg-gradient-to-t from-yellow-500 to-transparent mx-auto mb-4"></div>
                           <div className="w-52 mx-auto">
                             <div className="text-2xl font-bold mb-2 text-gray-900">
                               {milestone.year}
                             </div>
                             <div className="text-base font-semibold mb-2 text-gray-800 leading-tight">
                               {milestone.title}
                             </div>
                             <div className="text-xs text-gray-600 leading-relaxed">
                               {milestone.description}
                             </div>
                           </div>
                         </div>
                       )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative max-w-2xl mx-auto">
            {/* Enhanced vertical line */}
            <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-400"></div>

            {/* Mobile Milestones */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                
                return (
                  <div key={index} className="relative flex items-start group">
                    {/* Enhanced Mobile Diamond */}
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div 
                        className="w-20 h-20 transform rotate-45 flex items-center justify-center shadow-xl border-4 border-gray-900 bg-yellow-400"
                      >
                        <div 
                          className={`w-12 h-12 ${milestone.color} transform -rotate-45 rounded-xl flex items-center justify-center shadow-md`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      {/* Mobile pulse effect */}
                      <div className="absolute inset-0 w-20 h-20 transform rotate-45 bg-yellow-400 animate-ping opacity-20"></div>
                    </div>

                     {/* Enhanced Mobile Content */}
                     <div className="ml-8 pb-4 transform transition-all duration-300 group-hover:translate-x-2 flex-1">
                       <div className="pr-4">
                         <div className="text-xl font-bold mb-2 text-gray-900">
                           {milestone.year}
                         </div>
                         <div className="text-base font-semibold mb-2 text-gray-800 leading-tight">
                           {milestone.title}
                         </div>
                         <div className="text-sm text-gray-600 leading-relaxed">
                           {milestone.description}
                         </div>
                       </div>
                     </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-600 mb-2">30+</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Years of Excellence</div>
            <div className="text-sm text-gray-600">Leading maternal and child health innovation</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-teal-600 mb-2">1M+</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Lives Impacted</div>
            <div className="text-sm text-gray-600">Through research and programs</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Research Studies</div>
            <div className="text-sm text-gray-600">Published in leading journals</div>
          </div>
        </div>
      </div>
    </section>
  );
}