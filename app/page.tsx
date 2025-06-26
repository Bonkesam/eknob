'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { EknobAnimations } from '@/components/animations';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import BrandPhilosophy from '@/components/BrandPhilosophy';
import Craftsmanship from '@/components/Craftsmanship';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

// Import all components


gsap.registerPlugin(ScrollTrigger);

const MainPage: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Lenis scroll event
    lenis.on('scroll', (e: any) => {
      const progress = e.progress;
      setScrollProgress(progress);
      
      // Update progress bar
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: progress,
          duration: 0.1,
          ease: 'none'
        });
      }
    });

    // GSAP integration with Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Loading sequence
    const loadingTimeline = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        // Start page entrance animation
        gsap.to(pageRef.current, {
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out'
        });
      }
    });

    loadingTimeline
      .to('.loading-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .to('.loading-progress', {
        scaleX: 1,
        duration: 2.5,
        ease: 'power2.inOut'
      }, '-=0.5')
      .to('.loading-text', {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: 'power3.in'
      }, '-=0.5')
      .to(loadingRef.current, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.2,
        ease: 'expo.inOut'
      });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.9,
          ease: 'power3.out'
        });
        
        gsap.to(cursorDotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    // Add cursor interactions to clickable elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Scroll-triggered section animations
  useEffect(() => {
    if (isLoading) return;

    // Section reveal animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 90%',
        end: 'bottom 10%',
        onEnter: () => {
          gsap.to(section, {
            backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafafa',
            duration: 1.5,
            ease: 'power2.inOut'
          });
        }
      });
    });

    // Parallax background elements
    EknobAnimations.parallaxDepth('.parallax-bg', 0.3);
    
    // Global floating animations
    EknobAnimations.floatingElements('.floating-global', 25);

    // Section-specific interactions
    const heroSection = document.querySelector('#hero-section');
    if (heroSection) {
      ScrollTrigger.create({
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(heroSection, {
            scale: 1 + progress * 0.1,
            filter: `blur(${progress * 5}px)`,
            duration: 0.1
          });
        }
      });
    }

  }, [isLoading]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lenisRef.current) {
        switch (e.key) {
          case 'ArrowDown':
          case ' ':
            e.preventDefault();
            lenisRef.current.scrollTo(window.scrollY + window.innerHeight * 0.8);
            break;
          case 'ArrowUp':
            e.preventDefault();
            lenisRef.current.scrollTo(window.scrollY - window.innerHeight * 0.8);
            break;
          case 'Home':
            e.preventDefault();
            lenisRef.current.scrollTo(0);
            break;
          case 'End':
            e.preventDefault();
            lenisRef.current.scrollTo(document.body.scrollHeight);
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div 
          ref={loadingRef}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <div className="loading-text opacity-0 transform translate-y-8 mb-8">
              <h1 className="text-4xl md:text-6xl font-light text-white tracking-wider">
                EKNOB
              </h1>
              <p className="text-white/60 font-light tracking-widest mt-4">
                STYLE IS A LANGUAGE
              </p>
            </div>
            <div className="w-64 h-px bg-white/20 mx-auto">
              <div className="loading-progress h-full bg-white origin-left scale-x-0" />
            </div>
          </div>
        </div>
      )}

      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-40 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-full h-full border border-white rounded-full" />
      </div>
      
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-white pointer-events-none z-40 rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-30">
        <div 
          ref={progressBarRef}
          className="h-full bg-black origin-left scale-x-0"
        />
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 space-y-4">
        {['Hero', 'Collections', 'Philosophy', 'Craftsmanship', 'Testimonials', 'Contact'].map((section, index) => (
          <button
            key={section}
            data-cursor
            onClick={() => {
              const sectionEl = document.getElementById(section.toLowerCase());
              if (sectionEl && lenisRef.current) {
                lenisRef.current.scrollTo(sectionEl.offsetTop);
              }
            }}
            className={`w-3 h-3 rounded-full border border-black/30 transition-all duration-300 hover:scale-150 ${
              Math.floor(scrollProgress * 6) === index ? 'bg-black' : 'bg-transparent'
            }`}
            title={section}
          />
        ))}
      </div>

      {/* Main Content */}
      <main 
        ref={pageRef}
        className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-1'}`}
      >
        {/* Background Elements */}
        <div className="parallax-bg fixed inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-black rounded-full floating-global" />
          <div className="absolute top-40 right-32 w-3 h-3 bg-black/50 rounded-full floating-global" />
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-black/30 rounded-full floating-global" />
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-black/20 rounded-full floating-global" />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Page Sections */}
        <div id="hero">
          <Hero />
        </div>

        <div id="collections">
          <Collections />
        </div>

        <div id="philosophy">
          <BrandPhilosophy />
        </div>

        <div id="craftsmanship">
          <Craftsmanship />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="contact">
          <Footer />
        </div>

        {/* Interactive Elements */}
        <div className="fixed bottom-8 left-8 z-30">
          <button
            data-cursor
            onClick={() => lenisRef.current?.scrollTo(0)}
            className="group flex items-center space-x-3 px-6 py-3 bg-black/5 backdrop-blur-sm border border-black/10 hover:bg-black hover:text-white transition-all duration-500"
          >
            <div className="w-3 h-3 border-t border-l border-current transform rotate-45 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="text-sm font-light tracking-wider">BACK TO TOP</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="fixed bottom-8 right-1/2 transform translate-x-1/2 z-30">
          <div className="flex flex-col items-center space-y-2 opacity-70">
            <div className="text-xs font-light tracking-widest text-black/60">
              SCROLL
            </div>
            <div className="w-px h-12 bg-black/30 relative">
              <div 
                className="absolute top-0 left-0 w-full bg-black origin-top transition-all duration-300"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Emergency Navigation (hidden by default) */}
        <div className="fixed top-1/2 left-4 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="flex flex-col space-y-2">
            {['H', 'C', 'P', 'CR', 'T', 'F'].map((letter, index) => (
              <button
                key={letter}
                data-cursor
                onClick={() => {
                  const sections = ['hero', 'collections', 'philosophy', 'craftsmanship', 'testimonials', 'contact'];
                  const sectionEl = document.getElementById(sections[index]);
                  if (sectionEl && lenisRef.current) {
                    lenisRef.current.scrollTo(sectionEl.offsetTop);
                  }
                }}
                className="w-8 h-8 bg-black/10 backdrop-blur-sm text-xs font-light text-black/60 hover:bg-black hover:text-white transition-all duration-300"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;