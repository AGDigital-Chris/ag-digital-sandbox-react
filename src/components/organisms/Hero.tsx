import React from 'react';
import { QaProvider } from '../../qa/qa';
import GradientText from '../atoms/GradientText';
import HeroCTAGroup from '../molecules/HeroCTAGroup';
import CodeWindow from '../molecules/CodeWindow';

const Hero: React.FC = () => {
  return (
    <QaProvider prefix="hero">
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-surface-primary" data-qa="hero">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20" data-qa="hero--container">
        <div className="grid lg:grid-cols-2 gap-12 items-center" data-qa="hero--grid">
          {/* Content */}
          <div className="space-y-8 animate-fade-in" data-qa="hero--content">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-none">
                Coding Tests & <GradientText>Projects Showcase</GradientText>
              </h1>
              <p className="text-xl text-secondary leading-tight">
                Explore my collection of coding challenges, technical implementations, and creative solutions
              </p>
            </div>
            
            <HeroCTAGroup data-qa="hero--ctas" />
          </div>
          
          {/* Visual */}
          <div className="space-y-8 animate-slide-up sticky sticky-offset" data-qa="hero--visual">            
            {/* Code Block */}
            <CodeWindow
              data-qa="hero--code-block"
              lines={[
                <>
                  <span className="text-brand-purple">const</span>{' '}
                  <span className="text-brand-pink">agDitialTeam</span>{' '}
                  <span className="text-brand-white">=</span>{' '}
                  <span className="text-brand-green">'Design + UI + Frontend'</span>
                </>,
                <>
                  <span className="text-brand-purple">function</span>{' '}
                  <span className="text-brand-pink">solveChallenge</span>
                  <span className="text-brand-white">()</span>{' '}
                  <span className="text-brand-white">{'{'}</span>
                </>,
                <>
                  <span className="text-brand-purple">return</span>{' '}
                  <span className="text-brand-green">'Design + Code'</span>
                </>,
                <>
                  <span className="text-brand-white">{'}'}</span>
                </>,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
    </QaProvider>
  );
};

export default Hero;
