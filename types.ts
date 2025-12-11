import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface BenefitProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: LucideIcon;
}