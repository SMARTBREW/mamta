import { Card, CardContent } from '@/components/ui/card';
import { UPDATED_MILESTONES } from '@/lib/constants';
import ErrorBoundary from '@/components/ui/error-boundary';

export default function CompanyMilestones() {

  return (
    <ErrorBoundary>
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-roboto font-bold mb-4 text-gray-900 tracking-tight">
            Company Milestones
          </h2>
          <div className="w-24 h-1 bg-mamta-primary mx-auto mb-6"></div>
          <p className="text-base font-arial text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three decades of innovation, research excellence, and transformative impact in maternal and child health
          </p>
        </div>

        
        <div className="hidden lg:block">
          <div className="relative overflow-hidden">
             
             <div className="relative py-20">
              
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-mamta-secondary via-mamta-primary to-mamta-secondary transform -translate-y-1/2 shadow-sm"></div>
              
               
               <div className="grid grid-cols-6 gap-6 relative">
                {UPDATED_MILESTONES.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={index} className="relative flex flex-col items-center group">
                      
                       {isEven && (
                         <div className="mb-14 text-center transform transition-all duration-300 group-hover:-translate-y-2">
                           <div className="w-52 mx-auto">
                             <div className="text-2xl font-roboto font-bold mb-2 text-gray-900">
                               {milestone.year}
                             </div>
                             <div className="text-base font-roboto font-semibold mb-2 text-gray-800 leading-tight">
                               {milestone.title}
                             </div>
                             <div className="text-xs font-arial text-gray-600 leading-relaxed">
                               {milestone.description}
                             </div>
                           </div>
                          
                           <div className="w-0.5 h-8 bg-gradient-to-b from-mamta-primary to-transparent mx-auto mt-4"></div>
                         </div>
                       )}
                      
                     
                      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <div 
                          className="w-20 h-20 transform rotate-45 flex items-center justify-center shadow-xl border-4 border-gray-900 bg-mamta-primary hover:bg-mamta-secondary transition-colors duration-300"
                        >
                          <div 
                            className={`w-12 h-12 ${milestone.color} transform -rotate-45 rounded-xl flex items-center justify-center shadow-md`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                       
                        <div className="absolute inset-0 w-20 h-20 transform rotate-45 bg-mamta-primary animate-ping opacity-20"></div>
                      </div>
                      
                      
                       {!isEven && (
                         <div className="mt-14 text-center transform transition-all duration-300 group-hover:translate-y-2">
                          
                           <div className="w-0.5 h-8 bg-gradient-to-t from-mamta-primary to-transparent mx-auto mb-4"></div>
                           <div className="w-52 mx-auto">
                             <div className="text-2xl font-roboto font-bold mb-2 text-gray-900">
                               {milestone.year}
                             </div>
                             <div className="text-base font-roboto font-semibold mb-2 text-gray-800 leading-tight">
                               {milestone.title}
                             </div>
                             <div className="text-xs font-arial text-gray-600 leading-relaxed">
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

        
        <div className="lg:hidden">
          <div className="relative max-w-2xl mx-auto">
            
            <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mamta-secondary via-mamta-primary to-mamta-secondary"></div>

            
            <div className="space-y-16">
              {UPDATED_MILESTONES.map((milestone, index) => {
                const Icon = milestone.icon;
                
                return (
                  <div key={index} className="relative flex items-start group">
                    
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div 
                        className="w-20 h-20 transform rotate-45 flex items-center justify-center shadow-xl border-4 border-gray-900 bg-mamta-primary"
                      >
                        <div 
                          className={`w-12 h-12 ${milestone.color} transform -rotate-45 rounded-xl flex items-center justify-center shadow-md`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 w-20 h-20 transform rotate-45 bg-mamta-primary animate-ping opacity-20"></div>
                    </div>

                     
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

        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="text-4xl font-roboto font-bold text-mamta-yellow mb-2">30+</div>
              <div className="text-lg font-roboto font-semibold text-gray-800 mb-2">Years of Excellence</div>
              <div className="text-sm font-arial text-gray-600">Leading maternal and child health innovation</div>
            </CardContent>
          </Card>
          <Card className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="text-4xl font-roboto font-bold text-mamta-teal mb-2">1M+</div>
              <div className="text-lg font-roboto font-semibold text-gray-800 mb-2">Lives Impacted</div>
              <div className="text-sm font-arial text-gray-600">Through research and programs</div>
            </CardContent>
          </Card>
          <Card className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="text-4xl font-roboto font-bold text-mamta-purple mb-2">50+</div>
              <div className="text-lg font-roboto font-semibold text-gray-800 mb-2">Research Studies</div>
              <div className="text-sm font-arial text-gray-600">Published in leading journals</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </ErrorBoundary>
  );
}