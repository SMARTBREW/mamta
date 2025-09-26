 
export interface HeroContent {
  title: string;
  description: string;
}

 
export interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  href: string;
}

 
export interface ImpactStory {
  id: number;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

 
export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
}

 
export interface Location {
  name: string;
  impact?: string;
}

 

 
export interface Achievement {
  number: string;
  title: string;
  description: string;
  color: string;
}

 
export interface AboutPreviewItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  iconColor: string;
}

 
export interface PresenceLocation {
  id: string;
  name: string;
  top: string;
  left: string;
  impact?: string;
}

 
export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

 
export interface Milestone {
  year: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

 
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  image: string;
}

 
export interface ImpactStory {
  id: number;
  title: string;
  description: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
}
