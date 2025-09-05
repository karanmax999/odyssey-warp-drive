import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { NeonGSAPAnimations } from "@/lib/gsapAnimations";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    NeonGSAPAnimations.createCinematicHero();
    NeonGSAPAnimations.createNeonParallax();
    NeonGSAPAnimations.createMagneticButtons(".magnetic-btn");
    NeonGSAPAnimations.createNeonPulse(".glow-pulse");
    
    // Create floating neon particles
    if (particlesRef.current) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.className = "neon-particle absolute rounded-full";
        
        // Random neon colors
        const colors = ["#8080E0", "#E0A0C0", "#002040"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 4 + 1;
        
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 4}px ${color}`;
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.filter = `blur(${Math.random() * 1}px)`;
        
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <section ref={heroRef} className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden gpu-accelerated">
      {/* Neon Starfield Background */}
      <div ref={particlesRef} className="starfield-neon absolute inset-0 z-0"></div>
      
      {/* Parallax Background with Neon Gradients */}
      <div 
        className="parallax-bg absolute inset-0 scale-110"
        style={{ 
          background: `
            radial-gradient(ellipse at top, rgba(128, 128, 224, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(224, 160, 192, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #000020 50%, #000040 100%)
          `
        }}
      />
      
      {/* Animated Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(128, 128, 224, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(128, 128, 224, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main Title with Neon Glow */}
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-neon-glow gpu-accelerated">
            ODYSSEY
          </h1>
          
          {/* Subtitle with Flicker Effect */}
          <h2 className="hero-subtitle text-2xl md:text-4xl lg:text-5xl font-light mb-8 text-neon-flicker">
            HACKATHON 2024
          </h2>
          
          {/* Neon Divider */}
          <div className="neon-divider w-64 mx-auto mb-8"></div>
          
          {/* Description */}
          <p className="hero-description text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Embark on a <span className="text-neon-glow font-semibold">48-hour journey</span> to build the future. 
            Join developers, designers, and innovators for an epic coding adventure that will push the 
            <span className="text-neon-glow font-semibold"> boundaries of technology</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="magnetic-btn btn-neon-primary glow-pulse group gpu-accelerated text-lg px-8 py-4">
              <Zap className="mr-2 w-6 h-6" />
              Register Now
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="magnetic-btn btn-neon-secondary gpu-accelerated text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
          
          {/* Event Details with Neon Accents */}
          <div className="hero-details flex flex-col sm:flex-row gap-8 justify-center items-center text-sm md:text-base">
            <div className="flex items-center gap-3 card-neon px-6 py-3 rounded-full">
              <Calendar className="w-5 h-5 text-primary-glow" />
              <span className="text-gray-300">March 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-3 card-neon px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5 text-accent-glow" />
              <span className="text-gray-300">TechHub Innovation Center</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Neon Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full"
        style={{ backgroundColor: "#8080E0", boxShadow: "0 0 20px #8080E0" }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-6 h-6 rounded-full"
        style={{ backgroundColor: "#E0A0C0", boxShadow: "0 0 30px #E0A0C0" }}
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;