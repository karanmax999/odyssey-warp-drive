import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import heroSpace from "@/assets/hero-space.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GSAPAnimations } from "@/lib/gsapAnimations";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    const heroTl = GSAPAnimations.createHeroAnimations();
    GSAPAnimations.createParallaxBackground();
    GSAPAnimations.createMagneticButtons(".magnetic-btn");
    GSAPAnimations.createFloatingParticles(".floating-particle");
    
    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "floating-particle star absolute w-1 h-1 bg-primary-glow rounded-full";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 3 + "s";
        particlesRef.current.appendChild(particle);
      }
    }

    // Text scramble effect for title
    setTimeout(() => {
      GSAPAnimations.createTextScramble(".hero-title", "ODYSSEY");
    }, 1000);

    return () => {
      heroTl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Starfield Background */}
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>
      <div className="starfield"></div>
      
      {/* Hero Background with Parallax */}
      <div 
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroSpace})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/5 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 text-cosmic-glow transform-gpu">
            ODYSSEY
          </h1>
          
          <h2 className="hero-subtitle text-2xl md:text-4xl font-light mb-8 text-nebula-glow">
            Hackathon 2024
          </h2>
          
          <p className="hero-description text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Embark on a 48-hour journey to build the future. Join developers, designers, and innovators 
            for an epic coding adventure that will push the boundaries of technology.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="magnetic-btn btn-cosmic group transform-gpu">
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="magnetic-btn border-border/50 bg-card/20 backdrop-blur-sm transform-gpu">
              Learn More
            </Button>
          </div>
          
          <div className="hero-details flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>TechHub Innovation Center</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-glow rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-3 h-3 bg-secondary-glow rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default HeroSection;