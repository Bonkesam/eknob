'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<HTMLDivElement>(null);
  const morphTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Luxury reveals with elegant timing
    EknobAnimations.luxuryReveal('.footer-luxury-1', 0.1);
    EknobAnimations.luxuryReveal('.footer-luxury-2', 0.3);
    EknobAnimations.luxuryReveal('.footer-luxury-3', 0.5);

    // Scroll-triggered reveals for content sections
    EknobAnimations.revealOnScroll('.footer-reveal', {
      y: 40,
      duration: 1.2,
      stagger: 0.15,
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
        'PARIS'
      ], {
        delay: 3
      });
    }

    // Magnetic hover effects
    EknobAnimations.magneticHover('.footer-magnetic', 0.2);
    EknobAnimations.magneticHover('.footer-subscribe', 0.15);

    // Subtle floating elements
    EknobAnimations.floatingElements('.footer-floating', 6);

    return () => {
      scrambleObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Typography Consistency */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@300;400;500;600&display=swap');
        
        .modern-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .luxury-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        .brand-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 0.9;
          letter-spacing: 0.05em;
        }

        .newsletter-input {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
          outline: none;
        }

        .luxury-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .luxury-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }

        .luxury-link:hover::after {
          width: 100%;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          border-color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>

      <footer 
        ref={sectionRef}
        className="relative bg-black text-white overflow-hidden modern-sans"
      >
        {/* Refined Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.04) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        {/* Floating decorative elements */}
        <div className="footer-floating absolute top-16 left-8 w-1 h-1 bg-white/20 rounded-full" />
        <div className="footer-floating absolute top-32 right-12 w-1.5 h-1.5 bg-white/10 rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 footer-luxury-1">
              {/* Brand Name */}
              <div 
                ref={scrambleRef}
                className="brand-title luxury-serif font-light text-white mb-6 tracking-wide"
              >
                EKNOB
              </div>
              
              {/* Brand Tagline */}
              <p className="text-lg font-light text-white/70 leading-relaxed mb-8 modern-sans">
                Italian heritage meets contemporary luxury since 1924.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 text-sm">
                <div className="text-white/60 modern-sans">
                  <div className="text-white/80 font-medium mb-1">Milano Flagship</div>
                  <div>Via Montenapoleone 12</div>
                  <div>+39 02 7600 1924</div>
                </div>
                <div className="text-white/60 modern-sans">
                  <div className="text-white/80 font-medium mb-1">Opening Soon</div>
                  <div ref={morphTextRef} className="tracking-wider">MILANO</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-1 footer-luxury-2">
              <div className="grid grid-cols-2 gap-8 sm:gap-12">
                
                {/* Collections */}
                <div className="footer-reveal">
                  <h4 className="text-sm font-medium text-white/90 mb-6 tracking-wider modern-sans uppercase">
                    Collections
                  </h4>
                  <nav className="space-y-3">
                    {[
                      'Haute Couture',
                      'Ready-to-Wear',
                      'Accessories',
                      'Bespoke'
                    ].map((item, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="luxury-link block text-white/60 font-light text-sm hover:text-white/90 transition-colors modern-sans"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Support */}
                <div className="footer-reveal">
                  <h4 className="text-sm font-medium text-white/90 mb-6 tracking-wider modern-sans uppercase">
                    Support
                  </h4>
                  <nav className="space-y-3">
                    {[
                      'Client Care',
                      'Size Guide',
                      'Heritage',
                      'Contact'
                    ].map((item, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="luxury-link block text-white/60 font-light text-sm hover:text-white/90 transition-colors modern-sans"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="lg:col-span-1 footer-luxury-3">
              {/* Newsletter */}
              <div className="footer-reveal mb-10">
                <h4 className="text-sm font-medium text-white/90 mb-4 tracking-wider modern-sans uppercase">
                  Private Circle
                </h4>
                <p className="text-sm text-white/60 font-light mb-6 modern-sans leading-relaxed">
                  Exclusive access to new collections and private events.
                </p>
                
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="newsletter-input w-full px-4 py-3 text-white placeholder-white/40 text-sm modern-sans font-light"
                  />
                  <button className="footer-subscribe w-full bg-white text-black px-4 py-3 text-sm font-medium tracking-wide modern-sans hover:bg-white/90 transition-all duration-300">
                    SUBSCRIBE
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="footer-reveal">
                <h4 className="text-sm font-medium text-white/90 mb-4 tracking-wider modern-sans uppercase">
                  Connect
                </h4>
                <div className="flex space-x-3">
                  {[
                    { name: 'Instagram', symbol: 'IG' },
                    { name: 'LinkedIn', symbol: 'LI' },
                    { name: 'Pinterest', symbol: 'PI' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="footer-magnetic social-icon flex items-center justify-center text-xs font-medium text-white/70 hover:text-white transition-colors modern-sans"
                      title={social.name}
                    >
                      {social.symbol}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-reveal border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              
              {/* Copyright */}
              <div className="text-white/50 font-light text-xs modern-sans text-center sm:text-left">
                © 2024 Eknob. All rights reserved.
              </div>

              {/* Legal Links */}
              <nav className="flex items-center space-x-6">
                {['Privacy', 'Terms', 'Cookies'].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="luxury-link text-white/50 font-light text-xs hover:text-white/80 transition-colors modern-sans"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Decorative Side Element - Hidden on mobile */}
        <div className="absolute right-6 bottom-6 text-6xl sm:text-8xl font-thin text-white/5 pointer-events-none luxury-serif">
          24
        </div>

        {/* Subtle Grid Line */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50 hidden lg:block" />
      </footer>
    </>
  );
};

export default Footer;