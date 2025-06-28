'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant scroll-triggered reveals
    EknobAnimations.revealOnScroll('.testimonial-reveal', {
      y: 60,
      duration: 1.4,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Luxury reveals for different sections
    EknobAnimations.luxuryReveal('.luxury-testimonial-1', 0.2);
    EknobAnimations.luxuryReveal('.luxury-testimonial-2', 0.4);
    EknobAnimations.luxuryReveal('.luxury-testimonial-3', 0.6);

    // Clip path reveals for testimonial images
    EknobAnimations.clipPathReveal('.testimonial-image-1', 'left');
    EknobAnimations.clipPathReveal('.testimonial-image-2', 'right');
    EknobAnimations.clipPathReveal('.testimonial-image-3', 'left');
    EknobAnimations.clipPathReveal('.testimonial-image-4', 'right');

    // Magnetic hover effects for testimonial cards
    EknobAnimations.magneticHover('.testimonial-card-1', 0.08);
    EknobAnimations.magneticHover('.testimonial-card-2', 0.08);
    EknobAnimations.magneticHover('.testimonial-card-3', 0.08);
    EknobAnimations.magneticHover('.testimonial-card-4', 0.08);

    // Floating elements for decorative quotes
    EknobAnimations.floatingElements('.floating-quote', 10);

    // Parallax for background elements
    EknobAnimations.parallaxDepth('.parallax-slow', 0.3);
    EknobAnimations.parallaxDepth('.parallax-medium', 0.5);

  }, []);

  const testimonials = [
    {
      quote: "Eknob doesn't just create clothing—they craft wearable poetry. Every piece tells a story of unparalleled artisanship and attention to detail that's simply breathtaking.",
      name: "Victoria Ashworth",
      title: "Creative Director",
      company: "Ashworth & Associates",
      location: "Milan",
      image: "images/v.jpg"
    },
    {
      quote: "In thirty years of collecting haute couture, I've never encountered such dedication to perfection. Each Eknob piece becomes a treasured heirloom.",
      name: "Lord Harrison Blackwell",
      title: "Art Collector & Philanthropist",
      company: "Blackwell Foundation",
      location: "London",
      image: "images/a.jpg"
    },
    {
      quote: "The moment I wore my first Eknob creation, I understood what true luxury meant. It's not about the price—it's about the soul woven into every thread.",
      name: "Isabella Chen",
      title: "International Art Curator",
      company: "Chen Gallery",
      location: "New York",
      image: "images/c.jpg"
    },
    {
      quote: "Eknob represents the pinnacle of Italian craftsmanship. Their pieces don't follow trends—they set the standard for what luxury should be.",
      name: "Marcus Weber",
      title: "Fashion Editor",
      company: "European Style Magazine",
      location: "Paris",
      image: "images/e.jpg"
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
        <div className="absolute inset-0 opacity-3 parallax-slow">
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
            <div className="luxury-testimonial-1 text-center mb-18">
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

        {/* Testimonials Grid Section */}
        <div className="luxury-testimonial-2 py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className={`testimonial-card-${index + 1} group cursor-pointer`}
                >
                  <div className="space-y-8">
                    {/* Portrait */}
                    <div className="relative">
                      <div className={`testimonial-image-${index + 1} w-full aspect-[4/5] bg-black/5 overflow-hidden`}>
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      {/* Subtle overlay effect */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                    </div>

                    {/* Quote Content */}
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="text-[80px] font-light text-black/8 absolute -top-6 -left-2 pointer-events-none display-sans">
                          "
                        </div>
                        <blockquote className="text-lg md:text-xl font-light text-black leading-relaxed italic relative z-10 modern-sans pl-4">
                          {testimonial.quote}
                        </blockquote>
                      </div>
                      
                      <div className="w-16 h-px bg-black/20 group-hover:w-24 transition-all duration-300" />
                      
                      <div className="space-y-2">
                        <h4 className="text-xl font-normal text-black tracking-wide display-sans group-hover:text-black/80 transition-colors duration-300">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition & Awards Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-8 relative">
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
              <div className="max-w-5xl mx-auto relative">
                <div className="floating-quote absolute -top-4 -left-4 text-[120px] font-light text-black/5 pointer-events-none display-sans">
                  "
                </div>
                <blockquote className="text-3xl md:text-4xl font-light text-black leading-tight tracking-wide display-sans mb-8">
                  "Excellence is never an accident.<br/>
                  <span className="italic">It is the result of intention, effort, and execution.</span>"
                </blockquote>
                <cite className="block text-lg text-black/50 tracking-widest modern-sans">
                  — MAS EKNOB, CREATIVE DIRECTOR
                </cite>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-8 transform -translate-y-1/2 parallax-medium">
              <div className="w-px h-64 bg-gradient-to-b from-transparent via-black/15 to-transparent" />
            </div>
            
            <div className="absolute top-3/4 right-8 transform -translate-y-1/2 parallax-medium">
              <div className="w-px h-64 bg-gradient-to-b from-transparent via-black/15 to-transparent" />
            </div>

            {/* Floating Numbers */}
            <div className="absolute top-32 right-16 text-[200px] font-thin text-black/4 pointer-events-none display-sans parallax-slow">
              03
            </div>
            
            <div className="absolute bottom-32 left-16 text-[200px] font-thin text-black/4 pointer-events-none display-sans parallax-slow">
              04
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;