// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  // Optional QA selector to render as data-qa on the root element
  dataQa?: string;
}

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Badge variants
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

// Project data structure
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  preview?: React.ReactNode;
}

// Navigation item
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Skill category
export interface SkillCategory {
  title: string;
  skills: string[];
}

// Animation variants
export type AnimationVariant = 'fadeIn' | 'slideUp' | 'bounce' | 'pulse';
