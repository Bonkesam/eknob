'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const Craftsmanship: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Luxury reveals with elegant timing
    EknobAnimations.luxuryReveal('.craft-reveal-1', 0.1);
    EknobAnimations.luxuryReveal('.craft-reveal-2', 0.3);
    EknobAnimations.luxuryReveal('.craft-reveal-3', 0.5);
    EknobAnimations.luxuryReveal('.craft-reveal-4', 0.7);

    // Smooth reveal animations for process steps
    EknobAnimations.revealOnScroll('.craft-step', {
      y: 60,
      duration: 1.6,
      stagger: 0.4,
      ease: "power2.out"
    });

    // Enhanced reveals for content sections
    EknobAnimations.revealOnScroll('.content-reveal', {
      y: 40,
      duration: 1.4,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Number counters with elegant timing
    EknobAnimations.countUp('.hours-counter', 200, 2.5);
    EknobAnimations.countUp('.generations-counter', 4, 2);
    EknobAnimations.countUp('.artisans-counter', 47, 2.8);
    EknobAnimations.countUp('.years-counter', 1924, 3.2);

    // Parallax effects for depth
    EknobAnimations.parallaxDepth('.parallax-slow', 0.3);
    EknobAnimations.parallaxDepth('.parallax-medium', 0.5);

    // Magnetic hover for interactive elements
    EknobAnimations.magneticHover('.magnetic-btn', 0.2);

    // Floating elements for subtle movement
    EknobAnimations.floatingElements('.floating-element', 15);

    // Canvas animation for craftsmanship process
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      const createElegantSequence = () => {
        const images = Array.from({ length: 40 }, (_, i) => {
          const tempCanvas = document.createElement('canvas');
          tempCanvas.width = 800;
          tempCanvas.height = 500;
          const tempCtx = tempCanvas.getContext('2d');
          
          // Create elegant, minimalist animation
          const progress = i / 39;
          const gradient = tempCtx!.createLinearGradient(0, 0, 800, 500);
          gradient.addColorStop(0, `hsl(0, 0%, ${95 - progress * 20}%)`);
          gradient.addColorStop(0.5, `hsl(220, 10%, ${90 - progress * 15}%)`);
          gradient.addColorStop(1, `hsl(0, 0%, ${85 - progress * 10}%)`);
          
          tempCtx!.fillStyle = gradient;
          tempCtx!.fillRect(0, 0, 800, 500);
          
          // Add subtle geometric elements
          tempCtx!.strokeStyle = `rgba(0, 0, 0, ${0.1 + progress * 0.1})`;
          tempCtx!.lineWidth = 1;
          tempCtx!.strokeRect(50 + progress * 100, 50 + progress * 50, 200, 150);
          
          return tempCanvas.toDataURL();
        });
        
        EknobAnimations.imageSequence('.craft-canvas', images, images.length);
      };
      
      createElegantSequence();
    }

  }, []);

  const craftingSteps = [
    {
      number: '01',
      title: 'DESIGN CONCEPTION',
      subtitle: 'Where Vision Meets Purpose',
      description: 'Every Eknob piece begins with a singular vision—a moment of inspiration captured in precise sketches that honor our Italian heritage while embracing contemporary elegance.',
      details: [
        'Hand-drawn conceptual sketches',
        'Material compatibility analysis',
        'Fit and proportion refinement',
        'Creative director approval'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '02',
      title: 'MATERIAL CURATION',
      subtitle: 'The Foundation of Excellence',
      description: 'We partner exclusively with heritage mills whose mastery spans generations, sourcing only the world\'s finest fabrics that meet our uncompromising standards.',
      details: [
        'Loro Piana cashmere selection',
        'Ermenegildo Zegna wool curation',
        'Sustainable sourcing verification',
        'Quality consistency testing'
      ],
      image: 'https://images.unsplash.com/photo-1574180566232-abb9e3c42333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '03',
      title: 'PATTERN MASTERY',
      subtitle: 'Precision Meets Artistry',
      description: 'Master pattern makers translate vision into mathematical precision, creating blueprints that ensure perfect silhouettes across all body types and sizes.',
      details: [
        'Traditional pattern techniques',
        'Computer-aided precision',
        'Multiple fit iterations',
        'Size grading perfection'
      ],
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      number: '04',
      title: 'ARTISANAL CONSTRUCTION',
      subtitle: 'Where Magic Happens',
      description: 'Skilled artisans bring fabric to life through 200+ individual processes, each executed with surgical precision and unwavering dedication to perfection.',
      details: [
        'Hand-sewn buttonholes',
        'Floating canvas construction',
        'French seam finishing',
        'Final quality inspection'
      ],
      image: 'https://images.unsplash.com/photo-1550928431-ee0e4ea6ebdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <>
      {/* Typography Imports */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .modern-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .display-sans {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.85;
          letter-spacing: -0.02em;
        }
        
        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 0.9;
          letter-spacing: -0.01em;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-white overflow-hidden modern-sans"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 70%, #000 0.5px, transparent 0.5px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        {/* Floating Background Elements */}
        <div className="floating-element absolute top-20 right-20 w-2 h-2 bg-black/5 rounded-full" />
        <div className="floating-element absolute top-1/3 left-16 w-1 h-1 bg-black/10 rounded-full" />
        <div className="floating-element absolute bottom-1/4 right-32 w-1.5 h-1.5 bg-black/5 rounded-full" />

        {/* Hero Section */}
        <div className="pt-20 pb-15">
          <div className="max-w-7xl mx-auto px-8">
            
            {/* Main Heading */}
            <div className="text-center mb-16">
              <div className="craft-reveal-1 overflow-hidden mb-6">
                <h1 className="hero-title display-sans font-light text-black tracking-tight">
                  ARTISANAL
                </h1>
              </div>
              
              <div className="craft-reveal-2 overflow-hidden mb-12">
                <h1 className="hero-title display-sans font-light text-black tracking-tight">
                  MASTERY
                </h1>
              </div>

              <div className="craft-reveal-3 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-black/70 font-light leading-relaxed modern-sans">
                  In our Milano atelier, time honors tradition. Each garment emerges through 
                  a sacred dialogue between 
                  <span className="italic text-black font-normal"> master craftsmen</span> and 
                  <span className="italic text-black font-normal"> exceptional materials</span>, 
                  creating pieces that transcend the ordinary.
                </p>
              </div>
            </div>

            {/* Statistics Grid */}
            <div ref={statsRef} className="craft-reveal-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div className="text-center group">
                <div className="hours-counter text-5xl md:text-6xl display-sans font-light text-black mb-3 group-hover:text-black/80 transition-colors duration-300">0</div>
                <div className="text-sm tracking-[0.2em] text-black/50 modern-sans font-medium">HOURS PER PIECE</div>
                <div className="w-8 h-px bg-black/20 mx-auto mt-4 group-hover:w-12 group-hover:bg-black/40 transition-all duration-500" />
              </div>
              
              <div className="text-center group">
                <div className="generations-counter text-5xl md:text-6xl display-sans font-light text-black mb-3 group-hover:text-black/80 transition-colors duration-300">0</div>
                <div className="text-sm tracking-[0.2em] text-black/50 modern-sans font-medium">GENERATIONS</div>
                <div className="w-8 h-px bg-black/20 mx-auto mt-4 group-hover:w-12 group-hover:bg-black/40 transition-all duration-500" />
              </div>
              
              <div className="text-center group">
                <div className="artisans-counter text-5xl md:text-6xl display-sans font-light text-black mb-3 group-hover:text-black/80 transition-colors duration-300">0</div>
                <div className="text-sm tracking-[0.2em] text-black/50 modern-sans font-medium">MASTER ARTISANS</div>
                <div className="w-8 h-px bg-black/20 mx-auto mt-4 group-hover:w-12 group-hover:bg-black/40 transition-all duration-500" />
              </div>
              
              <div className="text-center group">
                <div className="years-counter text-5xl md:text-6xl display-sans font-light text-black mb-3 group-hover:text-black/80 transition-colors duration-300">0</div>
                <div className="text-sm tracking-[0.2em] text-black/50 modern-sans font-medium">ESTABLISHED</div>
                <div className="w-8 h-px bg-black/20 mx-auto mt-4 group-hover:w-12 group-hover:bg-black/40 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Canvas Section */}
        <div className="content-reveal py-5 bg-gradient-to-b from-white to-gray-50/30">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="section-title display-sans font-light text-black mb-8 tracking-tight">
                Mastery in Motion
              </h2>
              <p className="text-lg text-black/60 font-light max-w-3xl mx-auto leading-relaxed modern-sans">
                Witness the transformation of raw materials into wearable art, 
                where every movement is deliberate and every moment sacred.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <canvas 
                ref={canvasRef}
                className="craft-canvas w-full h-auto rounded-2xl shadow-2xl"
                width={800}
                height={500}
              />
              <div className="absolute inset-0 border border-black/10 rounded-2xl pointer-events-none" />
              
              {/* Canvas Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-black/20" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-black/20" />
            </div>
          </div>
        </div>

        {/* Crafting Process Steps */}
        <div className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            
            {/* Section Header */}
            <div className="content-reveal text-center mb-20">
              <h2 className="section-title display-sans font-light text-black mb-8 tracking-tight">
                The Four Pillars
              </h2>
              <p className="text-xl text-black/60 font-light max-w-4xl mx-auto leading-relaxed modern-sans">
                Four sacred stages guide every creation, each demanding absolute precision, 
                unwavering dedication, and the relentless pursuit of perfection.
              </p>
              <div className="w-16 h-px bg-black/30 mx-auto mt-8" />
            </div>

            {/* Process Steps */}
            <div className="space-y-24 md:space-y-32">
              {craftingSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`craft-step grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:text-right' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:col-span-6 space-y-6 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}>
                    
                    {/* Step Number and Line */}
                    <div className={`flex items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      <div className="text-7xl md:text-8xl display-sans font-thin text-black/10 leading-none">
                        {step.number}
                      </div>
                      <div className={`flex-1 h-px bg-gradient-to-r mx-6 ${
                        index % 2 === 1 
                          ? 'from-transparent to-black/20' 
                          : 'from-black/20 to-transparent'
                      }`} />
                    </div>
                    
                    {/* Title and Content */}
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl display-sans font-light text-black tracking-wide leading-tight">
                        {step.title}
                      </h3>
                      
                      <h4 className="text-lg text-black/60 modern-sans font-medium tracking-wide">
                        {step.subtitle}
                      </h4>
                      
                      <p className="text-lg text-black/70 font-light leading-relaxed modern-sans">
                        {step.description}
                      </p>
                      
                      {/* Process Details */}
                      <div className="pt-6 border-t border-black/10">
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-black/60 modern-sans">
                              <div className="w-1 h-1 bg-black/40 rounded-full mr-3 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`lg:col-span-6 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <div className="relative group">
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
                        <img 
                          src={step.image}
                          alt={`${step.title} process`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Image Decorative Elements */}
                      <div className="absolute -top-3 -left-3 w-6 h-6 border-l border-t border-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r border-b border-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="content-reveal py-32 bg-gradient-to-b from-gray-50/30 to-white">
          <div className="max-w-6xl mx-auto px-8 text-center">
            
            <div className="parallax-slow relative">
              <blockquote className="text-3xl md:text-4xl lg:text-5xl display-sans font-light text-black leading-tight mb-12 tracking-wide">
                "We do not merely create garments.<br/>
                <span className="italic">We weave dreams into reality.</span>"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-8">
                <div className="w-12 h-px bg-black/30" />
                <cite className="text-lg text-black/60 tracking-[0.15em] modern-sans font-medium">
                  MAESTRO GIOVANNI, HEAD ARTISAN
                </cite>
                <div className="w-12 h-px bg-black/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="content-reveal py-32">
          <div className="max-w-4xl mx-auto px-8 text-center">
            
            <h3 className="text-4xl md:text-5xl display-sans font-light text-black mb-8 tracking-tight leading-tight">
              Experience the Atelier
            </h3>
            
            <p className="text-xl text-black/70 font-light leading-relaxed mb-12 modern-sans">
              Step into our Milano workshop where time honors tradition, 
              and witness the sacred art of transformation firsthand.
            </p>

            <button className="magnetic-btn group relative overflow-hidden bg-transparent border-2 border-black text-black px-12 py-4 text-sm tracking-[0.2em] modern-sans font-medium hover:bg-black hover:text-white transition-all duration-500">
              <span className="relative z-10">SCHEDULE PRIVATE VISIT</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
        </div>

        {/* Side Typography Elements */}
        <div className="parallax-medium absolute left-8 top-1/2 transform -translate-y-1/2 text-black/10 pointer-events-none hidden lg:block">
          <div className="flex flex-col items-center space-y-8">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
            <div className="text-xs tracking-[0.3em] rotate-90 origin-center whitespace-nowrap modern-sans font-medium">
              MILANO ATELIER
            </div>
            <div className="w-px h-24 bg-gradient-to-t from-transparent via-black/20 to-transparent" />
          </div>
        </div>

        <div className="parallax-medium absolute right-8 top-1/2 transform -translate-y-1/2 text-black/10 pointer-events-none hidden lg:block">
          <div className="flex flex-col items-center space-y-8">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
            <div className="text-xs tracking-[0.3em] -rotate-90 origin-center whitespace-nowrap modern-sans font-medium">
              HANDCRAFTED EXCELLENCE
            </div>
            <div className="w-px h-24 bg-gradient-to-t from-transparent via-black/20 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Craftsmanship;