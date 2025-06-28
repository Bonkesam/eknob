'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const Collections: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Much faster clip path reveals for better UX
    EknobAnimations.clipPathReveal('.collection-card-1', 'left');
    EknobAnimations.clipPathReveal('.collection-card-2', 'right');
    EknobAnimations.clipPathReveal('.collection-card-3', 'top');
    EknobAnimations.clipPathReveal('.collection-card-4', 'bottom');

    // Faster, more responsive reveals
    EknobAnimations.revealOnScroll('.collection-reveal', {
      y: 80,
      duration: 1.2,
      stagger: 0.15
    });

    // Enhanced magnetic hovers
    document.querySelectorAll('.collection-card').forEach((card, index) => {
      EknobAnimations.magneticHover(`.collection-card-${index + 1}`, 0.12);
    });

    // Faster luxury reveals
    EknobAnimations.luxuryReveal('.luxury-collection-1', 0.2);
    EknobAnimations.luxuryReveal('.luxury-collection-2', 0.3);

    // Number counter
    EknobAnimations.countUp('.collection-counter', 247, 2.0);

  }, []);

  const collections = [
    {
      title: 'MILANO NOIR',
      subtitle: 'Evening Collection',
      description: 'Where shadows meet silk. Our most coveted pieces for those who command attention without seeking it.',
      image: '/images/evening.jpg',
      pieces: '19 Pieces',
      season: 'AW 2024',
      price: 'From €2,850'
    },
    {
      title: 'VENETIAN SUMMERS',
      subtitle: 'Resort Collection', 
      description: 'Effortless sophistication inspired by Italian riviera elegance. Lightness that carries weight.',
      image: '/images/summer.jpg',
      pieces: '18 Pieces',
      season: 'SS 2024',
      price: 'From €1,950'
    },
    {
      title: 'HERITAGE MASTERS',
      subtitle: 'Signature Collection',
      description: 'Our most treasured designs, refined over decades. Each piece a masterclass in timeless sophistication.',
      image: 'images/heritage.jpg',
      pieces: '18 Pieces',
      season: 'Permanent',
      price: 'From €4,200'
    },
    {
      title: 'URBAN NOMAD',
      subtitle: 'Contemporary Collection',
      description: 'For the modern wanderer who refuses to compromise. Where comfort meets uncompromising style.',
      image: 'images/urban.jpg',
      pieces: '24 Pieces',
      season: 'Year-round',
      price: 'From €1,450'
    }
  ];

  return (
    <>
      {/* Luxury Font Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" 
        rel="stylesheet" 
      />
      
      <section 
        ref={sectionRef}
        className="relative bg-neutral-50 py-32 overflow-hidden"
        style={{ 
          minHeight: '250vh',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
        }}
      >
        {/* Refined Background Texture */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.01) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(0,0,0,0.01) 0%, transparent 50%)`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-8">
          
          {/* Section Header */}
          <div className="text-center mb-25">
            <div className="collection-reveal overflow-hidden mb-8">
              <h2 
                className="text-6xl md:text-8xl text-black tracking-tight leading-none"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  letterSpacing: '-0.02em'
                }}
              >
                Collections
              </h2>
            </div>
            
            <div className="collection-reveal max-w-3xl mx-auto mb-16">
              <p 
                className="text-xl md:text-2xl text-black/70 leading-relaxed"
                style={{ 
                  fontWeight: 300,
                  letterSpacing: '-0.01em'
                }}
              >
                Four distinct narratives, each telling a different story of elegance. 
                Choose the chapter that speaks to your soul.
              </p>
            </div>

            {/* Refined Stats */}
            <div className="luxury-collection-1 flex justify-center items-center space-x-16 text-black/50">
              <div className="text-center">
                <div 
                  className="collection-counter text-4xl text-black mb-2"
                  style={{ fontWeight: 200 }}
                >
                  0
                </div>
                <div 
                  className="text-sm tracking-widest opacity-60"
                  style={{ fontWeight: 500, letterSpacing: '0.15em' }}
                >
                  ARTISANS
                </div>
              </div>
              <div className="w-px h-16 bg-black/15" />
              <div className="text-center">
                <div 
                  className="text-4xl text-black mb-2"
                  style={{ fontWeight: 200 }}
                >
                  4
                </div>
                <div 
                  className="text-sm tracking-widest opacity-60"
                  style={{ fontWeight: 500, letterSpacing: '0.15em' }}
                >
                  COLLECTIONS
                </div>
              </div>
              <div className="w-px h-16 bg-black/15" />
              <div className="text-center">
                <div 
                  className="text-4xl text-black mb-2"
                  style={{ fontWeight: 200 }}
                >
                  ∞
                </div>
                <div 
                  className="text-sm tracking-widest opacity-60"
                  style={{ fontWeight: 500, letterSpacing: '0.15em' }}
                >
                  POSSIBILITIES
                </div>
              </div>
            </div>
          </div>

          {/* Collections Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            {collections.map((collection, index) => (
              <div 
                key={collection.title}
                className={`collection-card collection-card-${index + 1} group cursor-pointer`}
              >
                {/* Image Container with faster reveal */}
                <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-black/3 rounded-sm">
                  <img 
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    style={{ filter: 'contrast(1.05) saturate(0.95)' }}
                  />
                  
                  {/* Refined Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Enhanced Hover Details */}
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-sm shadow-lg">
                      <div 
                        className="flex justify-between items-center text-sm text-black/60 mb-4"
                        style={{ fontWeight: 400 }}
                      >
                        <span>{collection.pieces}</span>
                        <span>{collection.season}</span>
                      </div>
                      <div 
                        className="text-lg text-black"
                        style={{ fontWeight: 300 }}
                      >
                        {collection.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collection Info with refined typography */}
                <div className="space-y-4">
                  <div>
                    <h3 
                      className="text-3xl md:text-4xl text-black tracking-tight mb-2"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 500,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {collection.title}
                    </h3>
                    <div 
                      className="text-lg text-black/60"
                      style={{ 
                        fontWeight: 300,
                        letterSpacing: '0.01em'
                      }}
                    >
                      {collection.subtitle}
                    </div>
                  </div>
                  
                  <p 
                    className="text-base text-black/70 leading-relaxed max-w-md"
                    style={{ 
                      fontWeight: 300,
                      letterSpacing: '-0.005em',
                      lineHeight: '1.6'
                    }}
                  >
                    {collection.description}
                  </p>

                  <div className="pt-4">
                    <button className="group/btn flex items-center space-x-3 text-black hover:text-black/60 transition-colors">
                      <span 
                        className="text-sm"
                        style={{ 
                          fontWeight: 500,
                          letterSpacing: '0.1em'
                        }}
                      >
                        EXPLORE
                      </span>
                      <div className="w-8 h-px bg-black group-hover/btn:w-12 transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Quote with elegant typography */}
          <div className="luxury-collection-2 text-center mb-32">
            <div className="max-w-4xl mx-auto">
              <blockquote 
                className="text-3xl md:text-4xl text-black leading-tight mb-8"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.3'
                }}
              >
                "Each collection is a conversation between past and future, 
                <span className="italic"> where tradition whispers to innovation</span>."
              </blockquote>
              <div className="flex items-center justify-center space-x-8 text-black/50">
                <div className="w-16 h-px bg-black/20" />
                <div 
                  className="text-sm"
                  style={{ 
                    fontWeight: 500,
                    letterSpacing: '0.15em'
                  }}
                >
                  CREATIVE PHILOSOPHY
                </div>
                <div className="w-16 h-px bg-black/20" />
              </div>
            </div>
          </div>

          {/* Call to Action with refined buttons */}
          <div className="collection-reveal text-center">
            <div className="max-w-2xl mx-auto mb-12">
              <h3 
                className="text-4xl md:text-5xl text-black mb-6 tracking-tight"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  letterSpacing: '-0.02em'
                }}
              >
                Ready to Begin Your Journey?
              </h3>
              <p 
                className="text-lg text-black/60 leading-relaxed"
                style={{ 
                  fontWeight: 300,
                  letterSpacing: '-0.005em'
                }}
              >
                Book a private consultation at our Milano atelier or explore our complete collections online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button 
                className="group bg-black text-white px-8 py-4 text-sm hover:bg-black/85 transition-all duration-300 relative overflow-hidden rounded-sm"
                style={{ 
                  fontWeight: 500,
                  letterSpacing: '0.1em'
                }}
              >
                <span className="relative z-10">BOOK CONSULTATION</span>
              </button>
              
              <button 
                className="group border border-black/30 text-black px-8 py-4 text-sm hover:border-black hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden rounded-sm"
                style={{ 
                  fontWeight: 500,
                  letterSpacing: '0.1em'
                }}
              >
                <span className="relative z-10">VIEW ALL COLLECTIONS</span>
              </button>
            </div>
          </div>

          {/* Refined Decorative Elements */}
          <div 
            className="absolute top-32 left-8 text-[300px] text-black/2 pointer-events-none leading-none select-none"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontWeight: 200
            }}
          >
            C
          </div>
          
          <div 
            className="absolute bottom-32 right-8 text-[300px] text-black/2 pointer-events-none leading-none select-none"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontWeight: 200
            }}
          >
            E
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;