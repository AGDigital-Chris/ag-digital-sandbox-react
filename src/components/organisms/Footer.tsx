import React from 'react';
import Button from '../atoms/Button';
import LinkList from '../molecules/LinkList';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black dark:bg-brand-deep-black text-brand-white py-12 border-t border-brand-off-black" data-qa="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-qa="footer--container">
        <div className="grid md:grid-cols-3 gap-8" data-qa="footer--grid">
          {/* Brand */}
          <div className="space-y-4" data-qa="footer--brand">
            <h3 className="text-xl font-bold">AG Digital Sandbox</h3>
            <p>
              A showcase of coding tests and technical implementations by Chris Edwards.
            </p>
          </div>
          
          {/* Links */}
          <LinkList
            title="Quick Links"
            context="on-dark"
            items={[
              { label: 'Home', href: '#home' },
              { label: 'Projects', href: '#projects' },
              { label: 'About', href: '#about' },
            ]}
          />
          
          {/* Contact */}
          <div className="space-y-4" data-qa="footer--contact">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-2">
              <Button 
                variant="outline-dark" 
                size="sm"
                href="https://github.com/AGDigital-Chris"
                external
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-off-black mt-4 pt-4 text-center text-brand-white opacity-75">
          <p>&copy; 2025 AG Digital Sandbox - Chris Edwards. American Golf.</p>
          <p>All rights reserved.</p>
          {/* <p className="mt-2">Hosted on GitHub Pages</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
