import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import RegisterSection from "@/components/RegisterSection";
import { NeonGSAPAnimations } from "@/lib/gsapAnimations";

const Index = () => {
  useEffect(() => {
    // Initialize all GSAP animations
    NeonGSAPAnimations.initializeAll();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Cleanup
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Global Neon Starfield */}
      <div className="starfield-neon fixed inset-0 z-0"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <PrizesSection />
        <SponsorsSection />
        <FAQSection />
        <RegisterSection />
        
        {/* Footer */}
        <footer className="py-12 border-t border-border/30 relative">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-neon-glow mb-4">ODYSSEY 2024</h3>
              <p className="text-gray-400 mb-6">
                The future of innovation starts here
              </p>
              <div className="flex justify-center gap-6 mb-6">
                {['Twitter', 'Discord', 'LinkedIn', 'GitHub'].map((social, index) => (
                  <button
                    key={social}
                    className="w-12 h-12 rounded-full border border-border/30 flex items-center justify-center hover:border-primary-glow hover:text-primary-glow transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'radial-gradient(circle, rgba(128, 128, 224, 0.1), transparent)'
                    }}
                  >
                    {social[0]}
                  </button>
                ))}
              </div>
              <div className="neon-divider w-64 mx-auto mb-6"></div>
              <p className="text-sm text-gray-500">
                © 2024 Odyssey Hackathon. All rights reserved. | Built with ⚡ and 🚀
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;