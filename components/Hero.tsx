'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const morphTextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=2405&q=80',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2271&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  useEffect(() => {
    // Initial page load animation
    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.from('.hero-main-title', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from('.hero-content-left', {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.hero-content-right', {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8')
    .from('.hero-cta', {
      y: 30,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.4');

    // Image cycling
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    // Magnetic CTA
    if (ctaRef.current) {
      EknobAnimations.magneticHover('.hero-cta', 0.15);
    }

    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  // Image transition effect
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo('.hero-image-container', 
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
      );
    }
  }, [currentImageIndex]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Modern Typography */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .modern-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .display-sans {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Main Title - Full Width Impact */}
        <div className="hero-main-title text-center mb-16 md:mb-20 lg:mb-32">
          <h1 className="display-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[12rem] font-light text-gray-900 tracking-tighter leading-[0.85] px-4 md:px-0">
            Timeless 
            <span className="font-medium ml-2 sm:ml-4 lg:ml-6">Eknob</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gray-900 mx-auto mt-6 md:mt-8"></div>
        </div>

        {/* Two Column Layout - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* Left Content - Mobile Enhanced */}
          <div className="hero-content-left space-y-8 md:space-y-12 order-2 lg:order-1">
            
            {/* First Paragraph */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="display-sans text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed">
                Crafted for the
                <span className="italic font-normal"> discerning few</span>
              </h2>
              <p className="modern-sans text-base md:text-lg text-gray-600 leading-relaxed font-light max-w-md">
                Where Italian heritage meets contemporary vision. Each piece represents 
                generations of artisanal excellence, reimagined for the modern connoisseur.
              </p>
            </div>

            {/* Second Paragraph */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="display-sans text-lg sm:text-xl lg:text-2xl font-light text-gray-900 leading-relaxed">
                Beyond fashion,
                <span className="italic font-normal"> an expression</span>
              </h3>
              <p className="modern-sans text-base md:text-lg text-gray-600 leading-relaxed font-light max-w-md">
                Our atelier in Milano brings together time-honored techniques with 
                innovative design, creating pieces that transcend seasons and trends.
              </p>
            </div>

            {/* CTA Button - Mobile Optimized */}
            <div className="hero-cta pt-6 md:pt-8">
              <button 
                ref={ctaRef}
                className="group modern-sans bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>Explore Collection</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Subtle Stats - Mobile Layout */}
            <div className="pt-8 md:pt-12 border-t border-gray-100">
              <div className="flex justify-between sm:justify-start sm:space-x-12">
                <div className="text-center sm:text-left">
                  <div className="display-sans text-xl md:text-2xl font-light text-gray-900">Est.</div>
                  <div className="modern-sans text-xs md:text-sm text-gray-500 tracking-wide">2024</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="display-sans text-xl md:text-2xl font-light text-gray-900">3</div>
                  <div className="modern-sans text-xs md:text-sm text-gray-500 tracking-wide">Ateliers</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="display-sans text-xl md:text-2xl font-light text-gray-900">∞</div>
                  <div className="modern-sans text-xs md:text-sm text-gray-500 tracking-wide">Possibilities</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Content - Mobile First Design */}
          <div className="hero-content-right order-1 lg:order-2">
            <div className="relative">
              
              {/* Main Image Container - Mobile Optimized */}
              <div 
                ref={imageRef}
                className="hero-image-container relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden"
              >
                <img 
                  src={heroImages[currentImageIndex]}
                  alt="Eknob Collection"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Image Indicators - Mobile Enhanced */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Elements - Responsive */}
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-16 md:w-24 h-16 md:h-24 border border-gray-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 w-20 md:w-32 h-20 md:h-32 bg-gray-50 rounded-full opacity-40"></div>
              
              {/* Collection Label - Mobile Optimized */}
              <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2">
                <span className="modern-sans text-xs font-medium text-gray-900 tracking-widest uppercase">
                  Collection {currentImageIndex + 1}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Scroll Indicator - Mobile Responsive 
        <div className="flex justify-center mt-16 md:mt-20 lg:mt-32">
          <div className="flex flex-col items-center space-y-3 md:space-y-4 text-gray-400">
            <div className="modern-sans text-xs tracking-widest uppercase">
              Discover More
            </div>
            <div className="w-px h-12 md:h-16 bg-gradient-to-b from-gray-300 to-transparent animate-pulse"></div>
          </div>
        </div>
        */}

      </div>

      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

    </section>
  );
};

export default Hero;