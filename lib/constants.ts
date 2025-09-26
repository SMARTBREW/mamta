import { HeroContent, Blog, ImpactStory, Testimonial, Location, Milestone, Achievement, AboutPreviewItem, PresenceLocation, Stat } from './types';
import { Heart, Users, Shield, BookOpen, Target, Award, Building2, Globe, FileText } from 'lucide-react';

export const HERO_CONTENT: HeroContent[] = [
  {
    title: 'Young People\'s SRHR',
    description: 'Advancing sexual and reproductive health and rights for youth through a life-cycle approach.'
  },
  {
    title: 'RMNCH+A',
    description: 'Partnering with systems and communities to reduce maternal and child mortality.'
  },
  {
    title: 'Early Childhood Development',
    description: 'Supporting children\'s cognitive, emotional, social and physical growth from birth.'
  },
  {
    title: 'Communicable Diseases',
    description: 'Integrated responses to TB and HIV for better access to care and support.'
  },
  {
    title: 'Non‑Communicable Diseases',
    description: 'Building integrated models aligned with national and global health plans.'
  },
  {
    title: 'Adolescent Friendly Services',
    description: 'Creating safe spaces via Youth Information and Gender Resource Centres.'
  }
];

export const HERO_IMAGES = [
  '/images/hero/mamta1.jpg',
  '/images/hero/mamta2.jpg',
  '/images/hero/mamta3.jpg',
  '/images/hero/mamta4.jpg',
  '/images/hero/mamta5.jpg',
  '/images/hero/mamta6.jpg'
];

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: 'My Perspective on Banning or Not Banning Access to Social…',
    date: 'September 16, 2024',
    author: 'Dr. Ranjana Kumari',
    image: '/images/hero/mamta7.jpg',
    href: '#'
  },
  {
    id: 2,
    title: '"Supporting Women\'s Empowerment: A Call to Action…"',
    date: 'July 08, 2024',
    author: 'Dr. Ranjana Kumari',
    image: '/images/hero/mamta3.jpg',
    href: '#'
  },
  {
    id: 3,
    title: 'Addressing Image‑Based Sexual Abuse in the Global…',
    date: 'January 31, 2022',
    author: 'PM IST',
    image: '/images/hero/mamta2.jpg',
    href: '#'
  }
];

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 1,
    title: 'Reducing Maternal Mortality',
    description: 'Our comprehensive maternal health program has reduced mortality rates by 40% in target communities.',
    image: '/images/hero/mamta1.jpg',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-rose-600'
  },
  {
    id: 2,
    title: 'Youth Health Education',
    description: 'Over 50,000 young people have received comprehensive sexual and reproductive health education.',
    image: '/images/hero/mamta2.jpg',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600'
  },
  {
    id: 3,
    title: 'Community Health Workers',
    description: 'Trained 2,000+ community health workers to provide essential healthcare services.',
    image: '/images/hero/mamta3.jpg',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    role: 'Community Health Director',
    organization: 'Rural Health Initiative',
    quote: 'MAMTA\'s approach to community health has transformed how we deliver healthcare in rural areas. Their innovative programs have made a real difference in people\'s lives.',
    image: '/images/hero/mamta1.jpg'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Youth Health Coordinator',
    organization: 'Youth Development Center',
    quote: 'The sexual and reproductive health education program has empowered thousands of young people to make informed decisions about their health and future.',
    image: '/images/hero/mamta2.jpg'
  },
  {
    id: '3',
    name: 'Dr. Anjali Patel',
    role: 'Maternal Health Specialist',
    organization: 'Women\'s Health Foundation',
    quote: 'Working with MAMTA has been transformative. Their evidence-based approach and community engagement strategies have significantly improved maternal health outcomes.',
    image: '/images/hero/mamta3.jpg'
  }
];

export const LOCATIONS: Location[] = [
  { name: 'Delhi', impact: '50,000+ lives impacted' },
  { name: 'Mumbai', impact: '35,000+ lives impacted' },
  { name: 'Bangalore', impact: '28,000+ lives impacted' },
  { name: 'Chennai', impact: '22,000+ lives impacted' },
  { name: 'Kolkata', impact: '18,000+ lives impacted' }
];

export const MILESTONES: Milestone[] = [
  {
    year: 1994,
    title: 'Foundation',
    description: 'MAMTA Health Institute established with a vision to improve maternal and child health outcomes.',
    icon: Building2,
    color: 'bg-mamta-primary'
  },
  {
    year: 2005,
    title: 'National Recognition',
    description: 'Recognized as a leading research organization in reproductive health and rights.',
    icon: Award,
    color: 'bg-mamta-secondary'
  },
  {
    year: 2015,
    title: 'Global Impact',
    description: 'Expanded programs to multiple states, impacting over 1 million lives.',
    icon: Globe,
    color: 'bg-mamta-tertiary'
  },
  {
    year: 2020,
    title: 'Digital Innovation',
    description: 'Launched digital health initiatives to reach underserved communities during COVID-19.',
    icon: Target,
    color: 'bg-mamta-accent'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    number: '30+',
    title: 'Years of Excellence',
    description: 'Leading maternal and child health innovation',
    color: 'text-mamta-yellow'
  },
  {
    number: '1M+',
    title: 'Lives Impacted',
    description: 'Through research and programs',
    color: 'text-mamta-teal'
  },
  {
    number: '50+',
    title: 'Research Studies',
    description: 'Published in leading journals',
    color: 'text-mamta-purple'
  }
];

export const ABOUT_PREVIEW_ITEMS: AboutPreviewItem[] = [
  {
    title: 'Research Excellence',
    description: 'Conducting cutting-edge research in maternal and child health to inform policy and practice.',
    icon: Heart,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    title: 'Community Impact',
    description: 'Working directly with communities to implement sustainable health solutions.',
    icon: Users,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Policy Advocacy',
    description: 'Influencing health policy at local, national, and international levels.',
    icon: Shield,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    title: 'Capacity Building',
    description: 'Training healthcare workers and community leaders to strengthen health systems.',
    icon: BookOpen,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    title: 'Innovation',
    description: 'Developing innovative approaches to address complex health challenges.',
    icon: Target,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    title: 'Partnerships',
    description: 'Collaborating with governments, NGOs, and international organizations.',
    icon: Award,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  }
];

export const PRESENCE_LOCATIONS: PresenceLocation[] = [
  { id: 'delhi', name: 'Himachal Pradesh', top: '21%', left: '35%', impact: 'HQ & policy programs' },
  { id: 'up', name: 'Uttar Pradesh', top: '38%', left: '48%', impact: 'Maternal & child health' },
  { id: 'bihar', name: 'Bihar', top: '40%', left: '59%', impact: 'Community health systems' },
  { id: 'rajasthan', name: 'Rajasthan', top: '37%', left: '28%', impact: 'Women empowerment' },
  { id: 'maharashtra', name: 'Maharashtra', top: '60%', left: '28%', impact: 'Urban health projects' },
  { id: 'odisha', name: 'Odisha', top: '55%', left: '57%', impact: 'Tribal health initiatives' },
];

export const UPDATED_MILESTONES: Milestone[] = [
  {
    year: 1994,
    title: "Foundation",
    description: "Mamta Health Institute for Mother and Child was established to focus on maternal and child health initiatives.",
    icon: Building2,
    color: "bg-mamta-accent"
  },
  {
    year: 2000,
    title: "First Major Program",
    description: "Launched comprehensive maternal health program reaching rural communities across multiple states.",
    icon: Heart,
    color: "bg-mamta-teal"
  },
  {
    year: 2005,
    title: "Research Excellence",
    description: "Established as a leading research institution in public health with international recognition.",
    icon: Award,
    color: "bg-mamta-blue"
  },
  {
    year: 2010,
    title: "Policy Impact", 
    description: "Research findings influenced national health policies and guidelines for maternal care.",
    icon: Globe,
    color: "bg-mamta-purple"
  },
  {
    year: 2015,
    title: "Global Expansion",
    description: "Extended programs to multiple countries, establishing international partnerships.",
    icon: Target,
    color: "bg-mamta-yellow"
  },
  {
    year: 2020,
    title: "Digital Innovation",
    description: "Pioneered digital health solutions during COVID-19, reaching remote communities.",
    icon: Shield,
    color: "bg-mamta-primary"
  }
];

export const UPDATED_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    role: 'Community Health Worker',
    image: '/images/hero/mamta1.jpg',
    quote: 'Working with MAMTA has transformed how we approach maternal health in our community. The training programs have equipped us with essential skills to save lives.',
    organization: 'Rural Health Initiative',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Program Coordinator',
    image: '/images/hero/mamta2.jpg',
    quote: 'The research methodologies and evidence-based interventions provided by MAMTA have significantly improved our program effectiveness and community trust.',
    organization: 'Child Welfare Foundation',
  },
  {
    id: '3',
    name: 'Anita Verma',
    role: 'Beneficiary',
    image: '/images/hero/mamta3.jpg',
    quote: 'Through MAMTA\'s reproductive health programs, I gained knowledge that not only improved my health but also helped me educate other women in my village.',
    organization: 'Women\'s Empowerment Group',
  },
  {
    id: '4',
    name: 'Dr. Michael Chen',
    role: 'Research Partner',
    image: '/images/hero/mamta4.jpg',
    quote: 'Collaborating with MAMTA has been instrumental in advancing our understanding of maternal health challenges and developing innovative solutions.',
    organization: 'Global Health Institute',
  }
];

export const UPDATED_IMPACT_STORIES: ImpactStory[] = [
  {
    id: 1,
    image: "/images/hero/mamta1.jpg",
    title: "Pure Earth Mexico Launches CREA, An Online Resource for Lead-Free Pottery Techniques",
    description: "Supporting traditional pottery makers transition to lead-free techniques for safer communities.",
    gradientFrom: "from-orange-100",
    gradientTo: "to-mamta-accent/20"
  },
  {
    id: 2,
    image: "/images/hero/mamta2.jpg",
    title: "Indonesia Kicks Off the First Phase of Blood Lead Surveillance Piloting",
    description: "Implementing comprehensive blood lead monitoring to protect children's health nationwide.",
    gradientFrom: "from-blue-100",
    gradientTo: "to-mamta-teal/20"
  },
  {
    id: 3,
    image: "/images/hero/mamta3.jpg",
    title: "India: Hidden Dangers, The Alarming Rise of Lead in Everyday Metal Food Ware",
    description: "Investigating and addressing lead contamination in kitchen utensils across Indian households.",
    gradientFrom: "from-green-100",
    gradientTo: "to-mamta-primary/20"
  },
  {
    id: 4,
    image: "/images/hero/mamta4.jpg",
    title: "Maternal Health Program Reduces Mortality by 40%",
    description: "Our comprehensive maternal health program has successfully reduced mortality rates in target communities across five states.",
    gradientFrom: "from-pink-100",
    gradientTo: "to-mamta-accent/20"
  },
  {
    id: 5,
    image: "/images/hero/mamta5.jpg",
    title: "Youth Health Education Reaches 50,000+ Young People",
    description: "Comprehensive sexual and reproductive health education program empowering young people to make informed decisions.",
    gradientFrom: "from-purple-100",
    gradientTo: "to-mamta-purple/20"
  },
  {
    id: 6,
    image: "/images/hero/mamta6.jpg",
    title: "Community Health Workers Training Program",
    description: "Trained over 2,000 community health workers to provide essential healthcare services in rural areas.",
    gradientFrom: "from-teal-100",
    gradientTo: "to-mamta-teal/20"
  }
];

export const STATS_DATA: Stat[] = [
  { id: 'lives', value: 70, suffix: '+', label: 'Million', description: 'Lives Touched', icon: Heart },
  { id: 'states', value: 26, suffix: '', label: 'States & UTs', description: 'National Footprint', icon: Globe },
  { id: 'countries', value: 8, suffix: '', label: 'Countries', description: 'Global Footprint', icon: Globe },
  { id: 'papers', value: 138, suffix: '+', label: 'Research Papers', description: 'In Peer-Reviewed Journals', icon: FileText },
  { id: 'persons', value: 700, suffix: '+', label: 'Persons', description: 'Human Resource', icon: Users }
];

export const LOTTIE_STATS = [
  { value: 70, label: 'Million', description: 'Lives Touched' },
  { value: 26, label: 'States & UTs', description: 'National Footprint' },
  { value: 8, label: 'Countries', description: 'Global Footprint' },
  { value: 138, label: 'Research Papers', description: 'In Peer-Reviewed Journals' },
  { value: 700, label: 'Persons', description: 'Human Resource' }
];
