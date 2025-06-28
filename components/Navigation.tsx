'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EknobAnimations } from './animations';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get Lenis instance from window if available
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element.offsetTop);
      } else {
        // Fallback to smooth scroll
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (burgerRef.current) {
      EknobAnimations.magneticHover('.burger-menu', 0.2);
    }
  }, []);

  useEffect(() => {
    if (!menuRef.current || !menuItemsRef.current || !menuOverlayRef.current) return;

    const tl = gsap.timeline();
    const menuItems = menuRef.current.querySelectorAll('.menu-item');
    const decorations = menuRef.current.querySelectorAll('.menu-decoration');

    if (isMenuOpen) {
      // Reset initial states
      gsap.set(menuItems, { y: 100, opacity: 0 });
      gsap.set(decorations, { scale: 0, rotation: 180 });
      
      // Open animation
      tl.set(menuRef.current, { display: 'flex' })
        .to(menuOverlayRef.current, {
          clipPath: 'inset(0 0 0 0)',
          duration: 0.8,
          ease: 'expo.inOut'
        })
        .to(menuItems, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out'
        }, '-=0.3')
        .to(decorations, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'back.out(1.7)'
        }, '-=0.4');
    } else {
      // Close animation
      tl.to(menuItems, {
        y: -50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.in'
      })
        .to(decorations, {
          scale: 0,
          rotation: 180,
          duration: 0.3,
          ease: 'power2.in'
        }, '-=0.3')
        .to(menuOverlayRef.current, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.6,
          ease: 'expo.inOut'
        }, '-=0.2')
        .set(menuRef.current, { display: 'none' });
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Collections', sectionId: 'collections' },
    { name: 'Craftsmanship', sectionId: 'craftsmanship' },
    { name: 'Philosophy', sectionId: 'philosophy' },
    { name: 'Testimonials', sectionId: 'testimonials' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .modern-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .display-sans {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          {/* Logo - Dynamic color based on menu state */}
          <div 
            className={`text-2xl font-medium tracking-[0.2em] transition-colors duration-300 cursor-pointer display-sans ${
              isMenuOpen ? 'text-white' : 'text-black'
            }`}
            onClick={() => scrollToSection('hero')}
          >
            EKNOB
          </div>

          {/* Burger Menu - Dynamic color based on menu state */}
          <div
            ref={burgerRef}
            className="burger-menu cursor-pointer relative w-8 h-8 flex flex-col justify-center items-center group"
            onClick={toggleMenu}
          >
            <span 
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-white rotate-45 translate-y-0.5' 
                  : 'bg-black'
              }`}
            />
            <span 
              className={`block h-0.5 w-6 transition-all duration-300 mt-1.5 ${
                isMenuOpen 
                  ? 'bg-white opacity-0' 
                  : 'bg-black'
              }`}
            />
            <span 
              className={`block h-0.5 w-6 transition-all duration-300 mt-1.5 ${
                isMenuOpen 
                  ? 'bg-white -rotate-45 -translate-y-2' 
                  : 'bg-black'
              }`}
            />
          </div>
        </div>
      </nav>

      {/* Full Page Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40"
        style={{ display: isMenuOpen ? 'flex' : 'none' }}
      >
        {/* Menu Overlay */}
        <div
          ref={menuOverlayRef}
          className="absolute inset-0 bg-black"
          style={{ clipPath: 'inset(0 0 100% 0)' }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 border border-white/10 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 border border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
          </div>

          {/* Menu Content */}
          <div
            ref={menuItemsRef}
            className="relative h-full flex flex-col items-center justify-center text-center z-10"
          >
            {/* Menu Items */}
            <div className="space-y-6">
              {menuItems.map((item, index) => (
                <div key={item.name} className="menu-item overflow-hidden">
                  <button
                    className="block text-4xl md:text-6xl lg:text-6xl font-light text-white hover:text-neutral-300 transition-colors duration-500 tracking-wide leading-none uppercase display-sans"
                    onClick={() => scrollToSection(item.sectionId)}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: 'power2.out'
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                      });
                    }}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="absolute bottom-8 md:bottom-20 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-8 md:px-20 space-y-4 md:space-y-0">
              <div className="menu-decoration">
                <div className="text-xs md:text-sm text-white/60 tracking-widest modern-sans">
                  CRAFTED WITH PRECISION
                </div>
              </div>
              
              <div className="menu-decoration flex space-x-6 md:space-x-8">
                <a href="#" className="text-xs md:text-sm text-white/60 hover:text-white transition-colors modern-sans">
                  Instagram
                </a>
                <a href="#" className="text-xs md:text-sm text-white/60 hover:text-white transition-colors modern-sans">
                  LinkedIn
                </a>
                <a href="#" className="text-xs md:text-sm text-white/60 hover:text-white transition-colors modern-sans">
                  Twitter
                </a>
              </div>
            </div>

            {/* Decorative Elements - Hidden on mobile */}
            <div className="menu-decoration absolute top-1/2 left-8 md:left-20 w-px h-16 md:h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
            <div className="menu-decoration absolute top-1/2 right-8 md:right-20 w-px h-16 md:h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;