'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const BrandPhilosophy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant reveal animations
    EknobAnimations.revealOnScroll('.philosophy-reveal', {
      y: 60,
      duration: 1.6,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Luxury reveals for main sections
    EknobAnimations.luxuryReveal('.luxury-reveal-1', 0.2);
    EknobAnimations.luxuryReveal('.luxury-reveal-2', 0.4);
    EknobAnimations.luxuryReveal('.luxury-reveal-3', 0.6);

    // Clip path reveals for images
    EknobAnimations.clipPathReveal('.image-reveal-1', 'left');
    EknobAnimations.clipPathReveal('.image-reveal-2', 'right');
    EknobAnimations.clipPathReveal('.image-reveal-3', 'left');
    EknobAnimations.clipPathReveal('.image-reveal-4', 'right');

    // Parallax for decorative elements
    EknobAnimations.parallaxDepth('.parallax-slow', 0.3);
    EknobAnimations.parallaxDepth('.parallax-medium', 0.5);

    // Floating elements for quotes
    EknobAnimations.floatingElements('.floating-quote', 8);

    // Magnetic hover effects for value cards
    EknobAnimations.magneticHover('.value-card-1', 0.1);
    EknobAnimations.magneticHover('.value-card-2', 0.1);
    EknobAnimations.magneticHover('.value-card-3', 0.1);
    EknobAnimations.magneticHover('.value-card-4', 0.1);

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
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-white overflow-hidden modern-sans"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 parallax-slow">
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
                  ref={titleRef}
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
            <div className="luxury-reveal-1 text-center mb-20">
              <div className="max-w-5xl mx-auto relative">
                <div className="floating-quote absolute -top-8 -left-8 text-[180px] font-light text-black/4 pointer-events-none display-sans">
                  "
                </div>
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

        {/* Philosophy Values Grid */}
        <div className="luxury-reveal-2 py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {philosophyValues.map((value, index) => (
                <div 
                  key={value.title}
                  className={`value-card-${index + 1} group cursor-pointer`}
                >
                  <div className="space-y-8">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <div className={`image-reveal-${index + 1} aspect-[4/3] bg-black/5`}>
                        <img 
                          src={value.image}
                          alt={value.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <h3 className="text-4xl md:text-5xl display-sans font-light text-black tracking-tight group-hover:text-black/80 transition-colors duration-300">
                        {value.title}
                      </h3>
                      
                      <div className="w-16 h-px bg-black/20 group-hover:w-24 transition-all duration-300" />
                      
                      <p className="text-lg text-black/70 font-light leading-relaxed modern-sans">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manifesto Section */}
        <div className="py-32">
          <div className="max-w-7xl mx-auto px-8 relative">
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
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 parallax-medium">
              <div className="w-px h-64 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
            </div>
            
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 parallax-medium">
              <div className="w-px h-64 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
            </div>

            {/* Floating Numbers */}
            <div className="absolute top-20 right-20 text-[200px] font-thin text-black/5 pointer-events-none display-sans parallax-slow">
              01
            </div>
            
            <div className="absolute bottom-20 left-20 text-[200px] font-thin text-black/5 pointer-events-none display-sans parallax-slow">
              02
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandPhilosophy;