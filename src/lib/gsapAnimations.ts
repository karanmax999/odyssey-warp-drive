import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export class NeonGSAPAnimations {
  static initializeScrollTrigger() {
    ScrollTrigger.refresh();
  }

  // Cinematic Hero Entrance - Video-like reveal
  static createCinematicHero() {
    const tl = gsap.timeline();
    
    // Initial setup - everything hidden
    tl.set(".hero-title", { 
      opacity: 0, 
      scale: 0.8, 
      filter: "blur(20px)",
      textShadow: "0 0 0px rgba(128, 128, 224, 0)"
    })
    .set(".hero-subtitle", { opacity: 0, y: 50 })
    .set(".hero-description", { opacity: 0, y: 30 })
    .set(".hero-buttons", { opacity: 0, scale: 0.8 })
    .set(".hero-details", { opacity: 0, x: -50 })
    .set(".neon-particle", { opacity: 0, scale: 0 });

    // Neon particles entrance
    tl.to(".neon-particle", {
      opacity: 1,
      scale: gsap.utils.random(0.5, 1.5),
      duration: 2,
      stagger: {
        amount: 2,
        from: "random"
      },
      ease: "power2.out"
    }, 0);

    // Main title - cinematic blur to sharp with neon glow
    tl.to(".hero-title", {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      textShadow: "0 0 20px rgba(128, 128, 224, 0.8), 0 0 40px rgba(128, 128, 224, 0.6)",
      duration: 2.5,
      ease: "power4.out"
    }, 0.5);

    // Subtitle slide with glow
    tl.to(".hero-subtitle", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out"
    }, 1.2);

    // Description fade in
    tl.to(".hero-description", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, 1.8);

    // Buttons with magnetic entrance
    tl.to(".hero-buttons", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.75)"
    }, 2.2);

    // Details slide in
    tl.to(".hero-details", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out"
    }, 2.5);

    return tl;
  }

  // Magnetic button hover effect
  static createMagneticButtons(selector: string) {
    const buttons = gsap.utils.toArray(selector);
    
    buttons.forEach((button: any) => {
      let magneticStrength = 0.3;
      
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
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });

      button.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * magneticStrength,
          y: y * magneticStrength,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }

  // Neon glow pulse for CTA buttons
  static createNeonPulse(selector: string) {
    gsap.to(selector, {
      boxShadow: "0 0 30px rgba(128, 128, 224, 0.8), 0 0 60px rgba(128, 128, 224, 0.5), 0 0 90px rgba(224, 160, 192, 0.3)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }

  // Parallax background with neon gradients
  static createNeonParallax() {
    gsap.to(".parallax-bg", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Floating particles parallax
    gsap.to(".neon-particle", {
      y: gsap.utils.random(-100, -200),
      x: gsap.utils.random(-50, 50),
      rotation: gsap.utils.random(-180, 180),
      duration: gsap.utils.random(10, 20),
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 5,
        from: "random"
      }
    });
  }

  // Section reveal with neon line sweep
  static createNeonSectionReveal(section: string) {
    const elements = gsap.utils.toArray(`${section} .reveal-neon`);
    
    // Create neon line sweep
    gsap.fromTo(`${section} .neon-divider`, 
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stagger reveal elements
    gsap.fromTo(elements, 
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)"
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // Animated counters with neon flicker
  static createNeonCounters(selector: string, endValue: number) {
    const counter = { value: 0 };
    const element = document.querySelector(selector);
    
    if (!element) return;

    gsap.to(counter, {
      value: endValue,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.floor(counter.value).toLocaleString();
      },
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Add flicker effect
    gsap.to(element, {
      textShadow: "0 0 10px rgba(128, 128, 224, 0.8), 0 0 20px rgba(128, 128, 224, 0.6)",
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      delay: 2.5,
      ease: "power2.inOut"
    });
  }

  // 3D card hover with neon glow
  static createNeon3DCards(selector: string) {
    const cards = gsap.utils.toArray(selector);
    
    cards.forEach((card: any) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          rotationY: 10,
          rotationX: 5,
          z: 50,
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.9), 0 0 40px rgba(128, 128, 224, 0.6)",
          duration: 0.5,
          ease: "power2.out"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          z: 0,
          scale: 1,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 20px rgba(128, 128, 224, 0.2)",
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
        const rotateX = (y - centerY) / 8;
        const rotateY = (centerX - x) / 8;

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 0.2,
          ease: "power1.out"
        });
      });
    });
  }

  // Timeline with glowing line animation
  static createGlowingTimeline() {
    const timelineItems = gsap.utils.toArray(".timeline-item");
    
    // Animate the glowing line
    gsap.fromTo(".timeline-glow-line::before", 
      { height: "0%" },
      {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1
        }
      }
    );

    // Animate timeline items
    timelineItems.forEach((item: any, index) => {
      gsap.fromTo(item, 
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }

  // Prize cards flip entrance
  static createPrizeFlipCards(selector: string) {
    const cards = gsap.utils.toArray(selector);
    
    gsap.fromTo(cards, 
      {
        rotationY: 180,
        opacity: 0,
        scale: 0.8
      },
      {
        rotationY: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // Sponsor logo carousel with glow
  static createSponsorCarousel(selector: string) {
    const logos = gsap.utils.toArray(`${selector} .sponsor-logo`);
    
    gsap.to(logos, {
      x: -200,
      duration: 20,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 200)
      }
    });

    // Add hover glow effect
    logos.forEach((logo: any) => {
      logo.addEventListener("mouseenter", () => {
        gsap.to(logo, {
          scale: 1.1,
          filter: "drop-shadow(0 0 20px rgba(128, 128, 224, 0.8))",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, {
          scale: 1,
          filter: "drop-shadow(0 0 0px rgba(128, 128, 224, 0))",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }

  // Text neon flicker on hover
  static createTextFlicker(selector: string) {
    const elements = gsap.utils.toArray(selector);
    
    elements.forEach((element: any) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          textShadow: "0 0 5px #8080E0, 0 0 10px #8080E0, 0 0 15px #8080E0, 0 0 20px #8080E0",
          duration: 0.1,
          repeat: 3,
          yoyo: true,
          ease: "power2.inOut"
        });
      });
    });
  }

  // Floating CTA with particle background
  static createFloatingCTA(selector: string) {
    // Main CTA bounce
    gsap.to(selector, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Particle background
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-primary-glow rounded-full opacity-60";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      
      const container = document.querySelector(selector)?.parentElement;
      if (container) {
        container.appendChild(particle);
        
        gsap.to(particle, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-100, 100),
          opacity: gsap.utils.random(0.2, 0.8),
          duration: gsap.utils.random(3, 8),
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }
    }
  }

  // Initialize all animations
  static initializeAll() {
    this.initializeScrollTrigger();
    this.createCinematicHero();
    this.createNeonParallax();
    this.createMagneticButtons(".magnetic-btn");
    this.createNeonPulse(".glow-pulse");
    this.createTextFlicker(".text-neon-flicker");
    
    // Initialize section reveals
    this.createNeonSectionReveal(".about-section");
    this.createNeonSectionReveal(".tracks-section");
    this.createNeonSectionReveal(".prizes-section");
    
    // Initialize interactive elements
    this.createNeon3DCards(".card-neon");
    this.createGlowingTimeline();
    this.createPrizeFlipCards(".prize-card");
    this.createSponsorCarousel(".sponsor-carousel");
    
    // Initialize counters
    this.createNeonCounters(".counter-participants", 500);
    this.createNeonCounters(".counter-prizes", 50000);
    this.createNeonCounters(".counter-hours", 48);
  }
}