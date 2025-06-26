'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<HTMLDivElement>(null);
  const morphTextRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Luxury reveals with elegant timing
    EknobAnimations.luxuryReveal('.footer-luxury-1', 0.1);
    EknobAnimations.luxuryReveal('.footer-luxury-2', 0.3);
    EknobAnimations.luxuryReveal('.footer-luxury-3', 0.5);
    EknobAnimations.luxuryReveal('.footer-luxury-4', 0.7);

    // Scroll-triggered reveals for content sections
    EknobAnimations.revealOnScroll('.footer-reveal', {
      y: 60,
      duration: 1.4,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Text scramble effect for brand name
    const scrambleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && scrambleRef.current) {
          EknobAnimations.scrambleText(scrambleRef.current, 'EKNOB');
        }
      });
    }, { threshold: 0.5 });

    if (scrambleRef.current) {
      scrambleObserver.observe(scrambleRef.current);
    }

    // Morphing text for dynamic locations
    if (morphTextRef.current) {
      EknobAnimations.morphText(morphTextRef.current, [
        'MILANO',
        'LONDON', 
        'NEW YORK',
        'PARIS',
        'TOKYO'
      ], {
        delay: 2.5
      });
    }

    // Magnetic hover effects for interactive elements
    EknobAnimations.magneticHover('.footer-magnetic-1', 0.25);
    EknobAnimations.magneticHover('.footer-magnetic-2', 0.25);
    EknobAnimations.magneticHover('.footer-magnetic-3', 0.25);
    EknobAnimations.magneticHover('.footer-magnetic-4', 0.25);
    EknobAnimations.magneticHover('.footer-magnetic-subscribe', 0.2);

    // Subtle floating elements
    EknobAnimations.floatingElements('.footer-floating', 8);

    // Parallax effect for background elements
    EknobAnimations.parallaxDepth('.footer-parallax', 0.3);

    return () => {
      scrambleObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Typography Consistency */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .modern-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .display-sans {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .brand-title {
          font-size: clamp(3.5rem, 8vw, 6rem);
          line-height: 0.85;
          letter-spacing: -0.02em;
        }
        
        .section-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          line-height: 0.9;
          letter-spacing: -0.01em;
        }

        .newsletter-input {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
        }

        .newsletter-input:focus {
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .luxury-link {
          position: relative;
          overflow: hidden;
        }

        .luxury-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.4s ease;
        }

        .luxury-link:hover::after {
          width: 100%;
        }
      `}</style>

      <footer 
        ref={sectionRef}
        className="relative bg-black text-white overflow-hidden modern-sans"
      >
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full footer-parallax"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '120px 120px, 80px 80px'
            }}
          />
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none" />

        {/* Floating decorative elements */}
        <div className="footer-floating absolute top-32 left-24 w-1 h-1 bg-white/20 rounded-full" />
        <div className="footer-floating absolute top-48 right-32 w-2 h-2 bg-white/10 rounded-full" />
        <div className="footer-floating absolute bottom-48 left-48 w-1.5 h-1.5 bg-white/15 rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-24">
            
            {/* Brand Section - Enhanced */}
            <div className="lg:col-span-5 footer-luxury-1">
              <div className="mb-16">
                {/* Brand Name with Scramble Effect */}
                <div 
                  ref={scrambleRef}
                  className="brand-title display-sans font-light text-white mb-8 tracking-tight"
                >
                  EKNOB
                </div>
                
                {/* Brand Philosophy */}
                <div className="space-y-6">
                  <p className="text-xl font-light text-white/80 leading-relaxed max-w-lg modern-sans">
                    Where Italian heritage meets contemporary vision.
                  </p>
                  <p className="text-lg font-light text-white/60 leading-relaxed max-w-lg modern-sans">
                    Crafting tomorrow's heirlooms with today's innovation since 1924.
                  </p>
                </div>
              </div>

              {/* Contact Information - Refined */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-medium text-white/90 mb-6 tracking-wide modern-sans">
                    Global Ateliers
                  </h4>
                  <div className="space-y-4 text-white/60 font-light modern-sans">
                    <div className="flex items-start space-x-4">
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-white/80 font-normal">Milano Flagship</div>
                        <div className="text-sm">Via Montenapoleone 12, 20121</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-white/80 font-normal">London Atelier</div>
                        <div className="text-sm">Bond Street 47, W1S 1BQ</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-white/80 font-normal">Opening Soon in</div>
                        <div ref={morphTextRef} className="text-sm tracking-wider">MILANO</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="pt-8 border-t border-white/10">
                  <div className="space-y-3 text-white/60 font-light modern-sans">
                    <div className="flex items-center space-x-3">
                      <span className="text-white/40 text-xs tracking-wider">CONCIERGE</span>
                      <span className="text-white/80">+39 02 7600 1924</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-white/40 text-xs tracking-wider">PRIVATE</span>
                      <span className="text-white/80">private@eknob.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation - Restructured */}
            <div className="lg:col-span-6 footer-luxury-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                
                {/* Collections */}
                <div className="footer-reveal">
                  <h4 className="text-lg font-medium text-white/90 mb-8 tracking-wide modern-sans">
                    Collections
                  </h4>
                  <nav className="space-y-4">
                    {[
                      'Haute Couture',
                      'Ready-to-Wear',
                      'Accessories',
                      'Bespoke Services',
                      'Archive Collection'
                    ].map((item, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="luxury-link block text-white/60 font-light hover:text-white/90 transition-colors duration-400 modern-sans"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Experience */}
                <div className="footer-reveal">
                  <h4 className="text-lg font-medium text-white/90 mb-8 tracking-wide modern-sans">
                    Experience
                  </h4>
                  <nav className="space-y-4">
                    {[
                      'Our Heritage',
                      'Craftsmanship',
                      'Sustainability',
                      'Private Sessions',
                      'Press & Media'
                    ].map((item, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="luxury-link block text-white/60 font-light hover:text-white/90 transition-colors duration-400 modern-sans"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Client Care */}
                <div className="footer-reveal">
                  <h4 className="text-lg font-medium text-white/90 mb-8 tracking-wide modern-sans">
                    Client Care
                  </h4>
                  <nav className="space-y-4">
                    {[
                      'Personal Styling',
                      'Size Consultation',
                      'Care Instructions',
                      'Lifetime Service',
                      'Concierge Support'
                    ].map((item, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="luxury-link block text-white/60 font-light hover:text-white/90 transition-colors duration-400 modern-sans"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Social Connection */}
            <div className="lg:col-span-1 footer-luxury-3">
              <div className="footer-reveal">
                <h4 className="text-lg font-medium text-white/90 mb-8 tracking-wide modern-sans">
                  Connect
                </h4>
                
                <div className="space-y-6">
                  {[
                    { name: 'Instagram', handle: '@eknob' },
                    { name: 'LinkedIn', handle: '/eknob' },
                    { name: 'Pinterest', handle: '/eknobstyle' },
                    { name: 'Vogue', handle: 'Features' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className={`footer-magnetic-${index + 1} group block`}
                    >
                      <div className="text-white/70 font-light hover:text-white transition-colors duration-300 modern-sans">
                        {social.name}
                      </div>
                      <div className="text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300 modern-sans">
                        {social.handle}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section - Elevated */}
          <div className="footer-luxury-4 border-t border-white/10 pt-20 mb-20">
            <div className="max-w-5xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
                
                {/* Newsletter Content */}
                <div>
                  <h3 className="section-title display-sans font-light text-white mb-6 tracking-tight">
                    Join Our Private Circle
                  </h3>
                  <p className="text-lg text-white/70 font-light leading-relaxed modern-sans">
                    Exclusive access to new collections, private events, and limited-edition pieces 
                    crafted for our most discerning clients.
                  </p>
                </div>

                {/* Newsletter Form */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="newsletter-input flex-1 px-6 py-4 text-white placeholder-white/40 focus:outline-none modern-sans font-light"
                    />
                    <button className="footer-magnetic-subscribe group relative overflow-hidden bg-white text-black px-8 py-4 font-medium tracking-wide modern-sans hover:bg-white/90 transition-all duration-400 whitespace-nowrap">
                      <span className="relative z-10">SUBSCRIBE</span>
                    </button>
                  </div>
                  <p className="text-xs text-white/40 modern-sans">
                    By subscribing, you consent to receive our exclusive communications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Refined */}
          <div className="footer-reveal border-t border-white/10 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-8">
                <div className="text-white/50 font-light text-sm modern-sans">
                  © 2024 Eknob. All rights reserved.
                </div>
                <div className="hidden lg:block text-white/30 font-light text-xs modern-sans">
                  Crafted with Italian precision
                </div>
              </div>

              {/* Legal Links */}
              <nav className="flex items-center space-x-8">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="luxury-link text-white/50 font-light text-sm hover:text-white/80 transition-colors duration-300 modern-sans"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Decorative Side Elements */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/5 pointer-events-none hidden xl:block">
          <div className="flex flex-col items-center space-y-8">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="text-xs tracking-[0.4em] rotate-90 origin-center whitespace-nowrap modern-sans font-light">
              MILANO HERITAGE
            </div>
            <div className="w-px h-32 bg-gradient-to-t from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/5 pointer-events-none hidden xl:block">
          <div className="flex flex-col items-center space-y-8">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="text-xs tracking-[0.4em] -rotate-90 origin-center whitespace-nowrap modern-sans font-light">
              CONTEMPORARY LUXURY
            </div>
            <div className="w-px h-32 bg-gradient-to-t from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* Large Decorative Typography */}
        <div className="absolute bottom-8 right-8 text-[180px] font-thin text-white/3 pointer-events-none display-sans">
          24
        </div>

        {/* Subtle Grid Lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-60" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-40" />
      </footer>
    </>
  );
};

export default Footer;