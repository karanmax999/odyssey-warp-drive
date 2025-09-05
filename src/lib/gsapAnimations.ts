import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin, MorphSVGPlugin);

export class GSAPAnimations {
  static initializeScrollTrigger() {
    ScrollTrigger.refresh();
  }

  // Hero Section Animations
  static createHeroAnimations() {
    const tl = gsap.timeline();
    
    // Starfield particle animation
    tl.set(".star", { opacity: 0, scale: 0 })
      .to(".star", {
        opacity: 1,
        scale: gsap.utils.random(0.5, 1.5),
        duration: 2,
        stagger: {
          amount: 3,
          from: "random"
        },
        ease: "power2.out"
      });

    // Main title with spectacular entrance
    tl.fromTo(".hero-title", 
      { 
        y: 200, 
        opacity: 0, 
        rotationX: 90,
        transformOrigin: "50% 50% -100px"
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 2,
        ease: "power4.out"
      }, 0.5);

    // Subtitle with typewriter effect
    tl.fromTo(".hero-subtitle",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5,
        ease: "power3.out"
      }, 1);

    // Description with stagger reveal
    tl.fromTo(".hero-description",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
      }, 1.5);

    // Buttons with magnetic hover effect
    tl.fromTo(".hero-buttons",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.75)"
      }, 2);

    // Event details with slide in
    tl.fromTo(".hero-details",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
      }, 2.2);

    return tl;
  }

  // Floating particles animation
  static createFloatingParticles(selector: string) {
    const particles = gsap.utils.toArray(selector);
    
    particles.forEach((particle: any) => {
      gsap.to(particle, {
        y: gsap.utils.random(-100, 100),
        x: gsap.utils.random(-50, 50),
        rotation: gsap.utils.random(-180, 180),
        duration: gsap.utils.random(8, 15),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });
  }

  // Parallax background animation
  static createParallaxBackground() {
    gsap.to(".parallax-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // Section reveal animations
  static createSectionReveal(section: string) {
    const elements = gsap.utils.toArray(`${section} .reveal-element`);
    
    gsap.fromTo(elements, 
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // Timeline section with horizontal scroll
  static createTimelineAnimation() {
    let sections = gsap.utils.toArray(".timeline-item");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (document.querySelector(".timeline-container") as HTMLElement)!.offsetWidth
      }
    });

    // Individual timeline item animations
    sections.forEach((section: any, i) => {
      gsap.fromTo(section.querySelector(".timeline-content"), 
        {
          opacity: 0,
          y: 50,
          rotationY: 45
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "left center",
            end: "right center",
            scrub: true
          }
        }
      );
    });
  }

  // 3D Card hover effects
  static create3DCardEffect(selector: string) {
    const cards = gsap.utils.toArray(selector);
    
    cards.forEach((card: any) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          rotationY: 10,
          rotationX: 5,
          z: 50,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          z: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      card.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 0.2,
          ease: "power1.out"
        });
      });
    });
  }

  // Magnetic button effect
  static createMagneticButtons(selector: string) {
    const buttons = gsap.utils.toArray(selector);
    
    buttons.forEach((button: any) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      button.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.2,
          ease: "power1.out"
        });
      });
    });
  }

  // Text scramble effect
  static createTextScramble(selector: string, finalText: string) {
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const element = document.querySelector(selector);
    if (!element) return;

    let iteration = 0;
    
    const interval = setInterval(() => {
      element.textContent = finalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return finalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      
      if (iteration >= finalText.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }

  // Morphing background shapes
  static createMorphingShapes() {
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(".morph-shape", {
      morphSVG: "M50,0 Q100,25 100,50 Q75,100 50,100 Q25,100 0,50 Q0,25 50,0z",
      duration: 3,
      ease: "power2.inOut"
    })
    .to(".morph-shape", {
      morphSVG: "M50,0 Q75,0 100,50 Q100,75 50,100 Q25,100 0,50 Q0,25 50,0z",
      duration: 3,
      ease: "power2.inOut"
    });
  }

  // Stagger text reveal
  static createStaggerTextReveal(selector: string) {
    const text = document.querySelector(selector);
    if (!text) return;

    const words = text.textContent!.split(" ");
    text.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");

    gsap.fromTo(".word", 
      {
        opacity: 0,
        y: 50,
        rotationX: -90
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 80%"
        }
      }
    );
  }
}