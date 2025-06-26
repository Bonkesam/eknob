'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const BrandPhilosophy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered reveals
    EknobAnimations.revealOnScroll('.philosophy-reveal', {
      y: 100,
      duration: 1.8,
      stagger: 0.3
    });

    // Text scramble effect - keeping the original animation
    const scrambleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && scrambleRef.current) {
          EknobAnimations.scrambleText(scrambleRef.current, 'THE PHILOSOPHY OF CRAFTSMANSHIP');
        }
      });
    }, { threshold: 0.5 });

    if (scrambleRef.current) {
      scrambleObserver.observe(scrambleRef.current);
    }

    // Restore original horizontal scroll functionality
    if (horizontalRef.current) {
      EknobAnimations.horizontalScroll('.horizontal-container', '.horizontal-item');
    }

    // Luxury reveals for individual elements
    EknobAnimations.luxuryReveal('.luxury-reveal-1', 0.2);
    EknobAnimations.luxuryReveal('.luxury-reveal-2', 0.4);
    EknobAnimations.luxuryReveal('.luxury-reveal-3', 0.6);

    return () => {
      scrambleObserver.disconnect();
    };
  }, []);

  const philosophyValues = [
    {
      title: 'Heritage',
      description: 'Four generations of Italian tailoring mastery, passed down through bloodlines of artisans who understand that true luxury lies in the details invisible to the untrained eye.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Innovation',
      description: 'We honor tradition while embracing the future. Our atelier combines time-tested techniques with cutting-edge sustainable practices, creating pieces that transcend fleeting trends.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Exclusivity',
      description: 'Each Eknob creation is limited to ensure rarity. We believe luxury should be earned, not mass-produced. Our clients don\'t just wear clothing—they carry stories of unparalleled artistry.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Sustainability',
      description: 'True luxury respects the earth that provides its materials. We source only the finest ethically-sourced fabrics, ensuring our legacy enriches rather than depletes.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <>
      {/* Font Imports */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .modern-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .display-sans {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .philosophy-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 0.9;
          letter-spacing: -0.01em;
        }
        
        .craftsmanship-title {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 0.85;
          letter-spacing: -0.02em;
        }
        
        .full-width-title {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-white overflow-hidden modern-sans"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Section Header */}
        <div className="py-32">
          <div className="max-w-[95vw] mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <div className="philosophy-reveal overflow-hidden mb-4">
                <h2 
                  ref={scrambleRef}
                  className="philosophy-title display-sans font-light text-black tracking-tight whitespace-nowrap"
                >
                  THE PHILOSOPHY OF CRAFTSMANSHIP
                </h2>
              </div>

              <div className="philosophy-reveal max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-black/70 font-light leading-relaxed modern-sans">
                  Every thread tells a story. Every stitch carries the weight of tradition. 
                  Every garment becomes a testament to the marriage of 
                  <span className="italic text-black font-normal"> artisanal mastery</span> and 
                  <span className="italic text-black font-normal"> contemporary vision</span>.
                </p>
              </div>
            </div>

            {/* Core Values Quote */}
            <div className="luxury-reveal-1 text-center mb-3">
              <div className="max-w-5xl mx-auto">
                <blockquote className="text-4xl md:text-5xl font-light text-black leading-tight tracking-wide display-sans">
                  "We don't create fashion.<br/>
                  <span className="italic">We architect legacies.</span>"
                </blockquote>
                <cite className="block mt-8 text-lg text-black/50 tracking-widest modern-sans">
                  — MAS EKNOB, CREATIVE DIRECTOR
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Values Section - Properly Fixed */}
        <div className="luxury-reveal-2 mb-15">
          <div 
            ref={horizontalRef}
            className="horizontal-container relative"
            style={{ height: '100vh' }}
          >
            <div className="flex space-x-8 h-full">
              {philosophyValues.map((value, index) => (
                <div 
                  key={value.title}
                  className="horizontal-item flex-shrink-0 w-[80vw] md:w-[60vw] h-full flex items-center"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-5xl md:text-6xl display-sans font-light text-black mb-8 tracking-tight">
                        {value.title}
                      </h3>
                      <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed mb-8 modern-sans">
                        {value.description}
                      </p>
                      <div className="w-24 h-px bg-black/20" />
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-[4/5] bg-black/5 overflow-hidden">
                        <img 
                          src={value.image}
                          alt={value.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manifesto Section */}
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="luxury-reveal-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                
                {/* Left Column */}
                <div className="space-y-8">
                  <h4 className="text-2xl display-sans font-light text-black tracking-wide">
                    Our Manifesto
                  </h4>
                  <div className="w-16 h-px bg-black/30" />
                  <p className="text-lg text-black/60 font-light leading-relaxed modern-sans">
                    In a world of fast fashion and disposable trends, we stand as guardians 
                    of enduring elegance. Our commitment transcends seasonal collections.
                  </p>
                </div>

                {/* Center Column */}
                <div className="space-y-8">
                  <h4 className="text-2xl display-sans font-light text-black tracking-wide">
                    The Eknob Promise
                  </h4>
                  <div className="w-16 h-px bg-black/30" />
                  <p className="text-lg text-black/60 font-light leading-relaxed modern-sans">
                    Every piece undergoes 200+ hours of meticulous craftsmanship. 
                    We don't just make clothes—we sculpt experiences that last lifetimes.
                  </p>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <h4 className="text-2xl display-sans font-light text-black tracking-wide">
                    Beyond Fashion
                  </h4>
                  <div className="w-16 h-px bg-black/30" />
                  <p className="text-lg text-black/60 font-light leading-relaxed modern-sans">
                    We create for individuals who understand that true luxury is not 
                    about labels—it's about the quiet confidence of impeccable quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
              <div className="w-px h-64 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
            </div>
            
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <div className="w-px h-64 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
            </div>

            {/* Floating Numbers */}
            <div className="absolute top-20 right-20 text-[200px] font-thin text-black/5 pointer-events-none display-sans">
              01
            </div>
            
            <div className="absolute bottom-20 left-20 text-[200px] font-thin text-black/5 pointer-events-none display-sans">
              02
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandPhilosophy;