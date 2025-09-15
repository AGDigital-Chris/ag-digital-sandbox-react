import React from 'react';
import Navigation from '../molecules/Navigation';
import type { NavItem } from '../../types';

const Header: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-surface-primary/95 backdrop-blur-sm" data-qa="header">
      <Navigation items={navItems} />
    </header>
  );
};

export default Header;
