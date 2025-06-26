'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered reveals
    EknobAnimations.revealOnScroll('.testimonial-reveal', {
      y: 60,
      duration: 1.4,
      stagger: 0.2
    });

    // Horizontal scroll for testimonials
    if (horizontalRef.current) {
      EknobAnimations.horizontalScroll('.testimonials-horizontal-container', '.testimonial-horizontal-item');
    }

    // Luxury reveals for individual sections
    EknobAnimations.luxuryReveal('.luxury-testimonial-1', 0.2);
    EknobAnimations.luxuryReveal('.luxury-testimonial-2', 0.4);
    EknobAnimations.luxuryReveal('.luxury-testimonial-3', 0.6);

    // Magnetic hover effects for testimonial cards
    EknobAnimations.magneticHover('.testimonial-card-1', 0.15);
    EknobAnimations.magneticHover('.testimonial-card-2', 0.15);
    EknobAnimations.magneticHover('.testimonial-card-3', 0.15);

    // Floating elements for decorative quotes
    EknobAnimations.floatingElements('.floating-quote', 12);

  }, []);

  const testimonials = [
    {
      quote: "Eknob doesn't just create clothing—they craft wearable poetry. Every piece tells a story of unparalleled artisanship and attention to detail that's simply breathtaking.",
      name: "Victoria Ashworth",
      title: "Creative Director",
      company: "Ashworth & Associates",
      location: "Milan",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b922?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "In thirty years of collecting haute couture, I've never encountered such dedication to perfection. Each Eknob piece becomes a treasured heirloom.",
      name: "Lord Harrison Blackwell",
      title: "Art Collector & Philanthropist",
      company: "Blackwell Foundation",
      location: "London",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The moment I wore my first Eknob creation, I understood what true luxury meant. It's not about the price—it's about the soul woven into every thread.",
      name: "Isabella Chen",
      title: "International Art Curator",
      company: "Chen Gallery",
      location: "New York",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Eknob represents the pinnacle of Italian craftsmanship. Their pieces don't follow trends—they set the standard for what luxury should be.",
      name: "Marcus Weber",
      title: "Fashion Editor",
      company: "European Style Magazine",
      location: "Paris",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const recognitions = [
    {
      year: "2024",
      title: "Excellence in Craftsmanship",
      organization: "Luxury Fashion Guild"
    },
    {
      year: "2023",
      title: "Innovation in Tailoring",
      organization: "Milan Fashion Week"
    },
    {
      year: "2023",
      title: "Ethical Luxury Brand",
      organization: "Sustainable Fashion Awards"
    },
    {
      year: "2022",
      title: "Heritage Preservation",
      organization: "International Design Council"
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
        
        .testimonials-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 0.9;
          letter-spacing: -0.01em;
        }
        
        .voices-title {
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
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Section Header */}
        <div className="py-32">
          <div className="max-w-[95vw] mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <div className="testimonial-reveal overflow-hidden mb-4">
                <h2 className="testimonials-title display-sans font-light text-black tracking-tight">
                  CLIENT
                </h2>
              </div>
              
              <div className="testimonial-reveal overflow-hidden mb-12">
                <h1 className="voices-title display-sans font-light text-black tracking-tight">
                  VOICES
                </h1>
              </div>

              <div className="testimonial-reveal max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-black/70 font-light leading-relaxed modern-sans">
                  The voices of those who understand that 
                  <span className="italic text-black font-normal"> exceptional craftsmanship</span> 
                  {' '}transcends mere fashion—it becomes 
                  <span className="italic text-black font-normal"> art you wear</span>.
                </p>
              </div>
            </div>

            {/* Featured Quote */}
            <div className="luxury-testimonial-1 text-center mb-32">
              <div className="max-w-6xl mx-auto relative">
                {/* Large decorative quote */}
                <div className="floating-quote absolute -top-8 -left-8 text-[180px] font-light text-black/4 pointer-events-none display-sans">
                  "
                </div>
                <blockquote className="text-3xl md:text-4xl font-light text-black leading-tight tracking-wide mb-12 display-sans">
                  "When you commission an Eknob piece, you're not buying clothing—<br/>
                  <span className="italic">you're investing in a masterpiece that will outlive trends, seasons, and time itself.</span>"
                </blockquote>
                <cite className="block text-lg text-black/50 tracking-widest modern-sans">
                  — FRANCESCO MEDICI, LUXURY RETAIL CONSULTANT
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Testimonials Section */}
        <div className="luxury-testimonial-2 mb-32">
          <div 
            ref={horizontalRef}
            className="testimonials-horizontal-container relative"
            style={{ height: '100vh' }}
          >
            <div className="flex space-x-16 h-full">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="testimonial-horizontal-item flex-shrink-0 w-[85vw] md:w-[70vw] h-full flex items-center"
                >
                  <div className={`testimonial-card-${index + 1} group cursor-pointer w-full`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full">
                      
                      {/* Quote Content */}
                      <div className="flex flex-col justify-center space-y-8">
                        <div className="relative">
                          <div className="text-[120px] font-light text-black/5 absolute -top-12 -left-4 pointer-events-none display-sans">
                            "
                          </div>
                          <blockquote className="text-2xl md:text-3xl font-light text-black leading-relaxed italic relative z-10 modern-sans">
                            {testimonial.quote}
                          </blockquote>
                        </div>
                        
                        <div className="w-24 h-px bg-black/20" />
                        
                        <div className="space-y-2">
                          <h4 className="text-xl font-normal text-black tracking-wide display-sans">
                            {testimonial.name}
                          </h4>
                          <p className="text-base text-black/70 font-light modern-sans">
                            {testimonial.title}
                          </p>
                          <p className="text-sm text-black/50 font-light modern-sans">
                            {testimonial.company}
                          </p>
                          <p className="text-xs text-black/40 font-light tracking-wider mt-2 modern-sans">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>

                      {/* Portrait */}
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <div className="w-80 h-96 bg-black/5 overflow-hidden">
                            <img 
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          {/* Subtle border effect */}
                          <div className="absolute inset-0 border border-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition & Awards Section */}
        <div className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="luxury-testimonial-3">
              <div className="text-center mb-20">
                <h3 className="text-4xl md:text-5xl font-light text-black tracking-tight mb-8 display-sans">
                  Recognition & Awards
                </h3>
                <div className="w-32 h-px bg-black/20 mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {recognitions.map((recognition, index) => (
                  <div key={index} className="text-center space-y-6 group">
                    <div className="text-4xl font-light text-black display-sans group-hover:text-black/70 transition-colors duration-300">
                      {recognition.year}
                    </div>
                    <div className="w-12 h-px bg-black/30 mx-auto group-hover:w-16 transition-all duration-300" />
                    <div className="space-y-3">
                      <p className="text-base font-normal text-black italic display-sans">
                        {recognition.title}
                      </p>
                      <p className="text-sm text-black/60 font-light leading-relaxed modern-sans">
                        {recognition.organization}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="mt-32 text-center">
              <div className="max-w-5xl mx-auto">
                <blockquote className="text-3xl md:text-4xl font-light text-black leading-tight tracking-wide display-sans mb-8">
                  "Excellence is never an accident.<br/>
                  <span className="italic">It is the result of intention, effort, and execution.</span>"
                </blockquote>
                <cite className="block text-lg text-black/50 tracking-widest modern-sans">
                  — MAS EKNOB, CREATIVE DIRECTOR
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 transform -translate-y-1/2">
          <div className="w-px h-64 bg-gradient-to-b from-transparent via-black/15 to-transparent" />
        </div>
        
        <div className="absolute top-3/4 right-8 transform -translate-y-1/2">
          <div className="w-px h-64 bg-gradient-to-b from-transparent via-black/15 to-transparent" />
        </div>

        {/* Floating Numbers */}
        <div className="absolute top-32 right-16 text-[200px] font-thin text-black/4 pointer-events-none display-sans">
          03
        </div>
        
        <div className="absolute bottom-32 left-16 text-[200px] font-thin text-black/4 pointer-events-none display-sans">
          04
        </div>
      </section>
    </>
  );
};

export default Testimonials;