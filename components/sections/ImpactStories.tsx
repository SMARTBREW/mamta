export default function ImpactStories() {
  const impactStories = [
    {
      id: 1,
      image: "/images/hero/mamta1.jpg",
      title: "Pure Earth Mexico Launches CREA, An Online Resource for Lead-Free Pottery Techniques",
      description: "Supporting traditional pottery makers transition to lead-free techniques for safer communities.",
      gradientFrom: "from-red-100",
      gradientTo: "to-orange-100"
    },
    {
      id: 2,
      image: "/images/hero/mamta2.jpg",
      title: "Indonesia Kicks Off the First Phase of Blood Lead Surveillance Piloting",
      description: "Implementing comprehensive blood lead monitoring to protect children's health nationwide.",
      gradientFrom: "from-blue-100",
      gradientTo: "to-green-100"
    },
    {
      id: 3,
      image: "/images/hero/mamta3.jpg",
      title: "India: Hidden Dangers, The Alarming Rise of Lead in Everyday Metal Food Ware",
      description: "Investigating and addressing lead contamination in kitchen utensils across Indian households.",
      gradientFrom: "from-yellow-100",
      gradientTo: "to-orange-100"
    },
    {
      id: 4,
      image: "/images/hero/mamta4.jpg",
      title: "Empowering Rural Women Through Health Education Programs",
      description: "Training community health workers to improve maternal and child health outcomes in remote areas.",
      gradientFrom: "from-green-100",
      gradientTo: "to-blue-100"
    },
    {
      id: 5,
      image: "/images/hero/mamta5.jpg",
      title: "Adolescent Health Initiative: Breaking Barriers to Healthcare Access",
      description: "Creating youth-friendly health services and information centers across multiple states.",
      gradientFrom: "from-purple-100",
      gradientTo: "to-pink-100"
    },
    {
      id: 6,
      image: "/images/hero/mamta6.jpg",
      title: "Research Excellence: Publishing Peer-Reviewed Health Studies",
      description: "Contributing to global health knowledge through rigorous research and evidence-based interventions.",
      gradientFrom: "from-teal-100",
      gradientTo: "to-green-100"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Impact Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {impactStories.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${story.gradientFrom} ${story.gradientTo} flex items-center justify-center`}>
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{backgroundImage: `url('${story.image}')`}}
                >
                  <div className="w-full h-full bg-black/20"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-3">{story.title}</h3>
                <p className="text-gray-600 text-sm">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
