import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class EknobAnimations {
  
  // Morphing Text Animation
  static morphText(element: string | Element, texts: string[], options: any = {}) {
    const tl = gsap.timeline({ repeat: -1, ...options });
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    
    texts.forEach((text, index) => {
      tl.to(el, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
          if (el) el.textContent = text;
        }
      })
      .to(el, {
        duration: 0.5,
        opacity: 1,
        ease: "power2.inOut"
      })
      .to({}, { duration: 2 }); // Hold text
    });
    
    return tl;
  }

  // Text Scramble Effect
  static scrambleText(element: string | Element, finalText: string) {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;
    
    let iteration = 0;
    const interval = setInterval(() => {
      el.textContent = finalText
        .split('')
        .map((letter, index) => {
          if (index < iteration) return finalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
        
      if (iteration >= finalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  }

  // Reveal on Scroll with Stagger
  static revealOnScroll(elements: string, options: any = {}) {
    const defaultOptions = {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      ...options
    };

    gsap.set(elements, { y: defaultOptions.y, opacity: defaultOptions.opacity });
    
    ScrollTrigger.create({
      trigger: elements,
      start: "top 90%",
      onEnter: () => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          duration: defaultOptions.duration,
          stagger: defaultOptions.stagger,
          ease: defaultOptions.ease
        });
      }
    });
  }

  // Parallax Depth Layering
  static parallaxDepth(element: string, speed: number = 0.5) {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // ENHANCED: Much Faster Clip Path Reveal for Better UX
  static clipPathReveal(element: string, direction: 'left' | 'right' | 'top' | 'bottom' = 'left') {
    const clipPaths = {
      left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
      right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0% 0 0)' },
      top: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
      bottom: { from: 'inset(0 0 100% 0)', to: 'inset(0% 0 0% 0)' }
    };

    gsap.set(element, { clipPath: clipPaths[direction].from });
    
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%", // Start earlier
      end: "top 60%",   // End much sooner for faster reveal
      scrub: 0.5,       // Reduced scrub for faster response
      animation: gsap.to(element, {
        clipPath: clipPaths[direction].to,
        ease: "power2.out" // Better easing for luxury feel
      })
    });
  }

  // Enhanced Magnetic Hover with refined movement
  static magneticHover(element: string, strength: number = 0.3) {
    const el = document.querySelector(element) as HTMLElement;
    if (!el) return;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4, // Slightly slower for luxury feel
        ease: "power2.out"
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6, // Smoother return
        ease: "power2.out"
      });
    });
  }

  // FIXED: Horizontal Scroll Section - Clean & Reliable
  static horizontalScroll(container: string, items: string) {
    const containerEl = document.querySelector(container) as HTMLElement;
    const itemsEl = document.querySelectorAll(items);
    
    if (!containerEl || !itemsEl.length) return;
    
    // Calculate total width more reliably
    const getScrollWidth = () => {
      return Array.from(itemsEl).reduce((acc, item) => {
        const itemEl = item as HTMLElement;
        const styles = window.getComputedStyle(itemEl);
        const marginLeft = parseFloat(styles.marginLeft) || 0;
        const marginRight = parseFloat(styles.marginRight) || 0;
        return acc + itemEl.offsetWidth + marginLeft + marginRight;
      }, 0);
    };

    const totalWidth = getScrollWidth();
    const viewportWidth = window.innerWidth;
    
    // Only proceed if there's actual horizontal overflow
    if (totalWidth <= viewportWidth) {
      console.warn('Horizontal scroll: Content fits in viewport, no scroll needed');
      return;
    }

    const scrollDistance = totalWidth - viewportWidth;
    
    let scrollTriggerInstance: ScrollTrigger | null = null;

    const tween = gsap.to(items, {
      xPercent: -100 * (itemsEl.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: `+=${scrollDistance}`,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefresh: () => {
          // Recalculate on window resize
          const newTotalWidth = getScrollWidth();
          const newViewportWidth = window.innerWidth;
          const newScrollDistance = newTotalWidth - newViewportWidth;
          
          if (newScrollDistance > 0 && scrollTriggerInstance) {
            scrollTriggerInstance.refresh();
          }
        }
      }
    });

    // Store the ScrollTrigger instance for later use
    scrollTriggerInstance = tween.scrollTrigger as ScrollTrigger;

    return tween;
  }

  // ALTERNATIVE: Container-based horizontal scroll (more reliable for complex layouts)
  static horizontalScrollContainer(container: string, wrapper: string, options: any = {}) {
    const containerEl = document.querySelector(container) as HTMLElement;
    const wrapperEl = document.querySelector(wrapper) as HTMLElement;
    
    if (!containerEl || !wrapperEl) return;

    const defaults = {
      scrub: 1,
      snap: false,
      ...options
    };

    // Force wrapper to be flex for proper width calculation
    gsap.set(wrapperEl, { display: 'flex', flexWrap: 'nowrap' });

    const getScrollDistance = () => {
      const scrollWidth = wrapperEl.scrollWidth;
      const viewportWidth = containerEl.offsetWidth || window.innerWidth;
      return Math.max(0, scrollWidth - viewportWidth);
    };

    let scrollDistance = getScrollDistance();

    if (scrollDistance <= 0) {
      console.warn('Horizontal scroll container: No overflow detected');
      return;
    }

    const tween = gsap.to(wrapperEl, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: defaults.scrub,
        start: "top top",
        end: `+=${scrollDistance}`,
        snap: defaults.snap ? {
          snapTo: "labels",
          duration: 0.5,
          delay: 0.1
        } : undefined,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onRefresh: () => {
          scrollDistance = getScrollDistance();
          if (scrollDistance > 0) {
            tween.vars.x = -scrollDistance;
            tween.invalidate();
          }
        }
      }
    });

    return tween;
  }

  // Enhanced Number Counter Animation
  static countUp(element: string, target: number, duration: number = 2) {
    const obj = { value: 0 };
    const el = document.querySelector(element);
    if (!el) return;

    ScrollTrigger.create({
      trigger: element,
      start: "top 85%", // Start earlier
      onEnter: () => {
        gsap.to(obj, {
          value: target,
          duration: duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toLocaleString();
          }
        });
      }
    });
  }

  // Image Sequence Scroll Animation
  static imageSequence(canvas: string, images: string[], totalFrames: number) {
    const canvasEl = document.querySelector(canvas) as HTMLCanvasElement;
    if (!canvasEl) return;

    const context = canvasEl.getContext('2d');
    const imageArray: HTMLImageElement[] = [];
    let currentFrame = 0;

    // Preload images
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      imageArray[index] = img;
    });

    const updateImage = (index: number) => {
      if (imageArray[index] && context) {
        context.clearRect(0, 0, canvasEl.width, canvasEl.height);
        context.drawImage(imageArray[index], 0, 0, canvasEl.width, canvasEl.height);
      }
    };

    ScrollTrigger.create({
      trigger: canvas,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const frame = Math.round(self.progress * (totalFrames - 1));
        if (frame !== currentFrame) {
          currentFrame = frame;
          updateImage(frame);
        }
      }
    });
  }

  // Smooth Page Transitions
  static pageTransition(element: string) {
    const tl = gsap.timeline();
    
    tl.to(element, {
      clipPath: 'inset(0 0 0 0)',
      duration: 1,
      ease: "expo.inOut"
    })
    .from(`${element} > *`, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.5");

    return tl;
  }

  // Floating Elements
  static floatingElements(elements: string, intensity: number = 20) {
    gsap.to(elements, {
      y: `random(-${intensity}, ${intensity})`,
      x: `random(-${intensity/2}, ${intensity/2})`,
      rotation: `random(-5, 5)`,
      duration: `random(3, 6)`,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.2,
        from: "random"
      }
    });
  }

  // Enhanced Luxury Fade In with Scale
  static luxuryReveal(element: string, delay: number = 0) {
    gsap.set(element, { opacity: 0, scale: 0.95, y: 30 });
    
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2, // Slightly faster
          delay: delay,
          ease: "power2.out"
        });
      }
    });
  }

  // NEW: Instant Reveal for Critical Elements
  static instantReveal(element: string, direction: 'left' | 'right' | 'top' | 'bottom' = 'left') {
    const clipPaths = {
      left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
      right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0% 0 0)' },
      top: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
      bottom: { from: 'inset(0 0 100% 0)', to: 'inset(0% 0 0% 0)' }
    };

    gsap.set(element, { clipPath: clipPaths[direction].from });
    
    ScrollTrigger.create({
      trigger: element,
      start: "top 90%",
      onEnter: () => {
        gsap.to(element, {
          clipPath: clipPaths[direction].to,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });
  }
}