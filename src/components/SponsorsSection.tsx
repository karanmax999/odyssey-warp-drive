import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Building2, Sparkles, Zap } from "lucide-react";
import { NeonGSAPAnimations } from "@/lib/gsapAnimations";

const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      NeonGSAPAnimations.createNeonSectionReveal(".sponsors-section");
      NeonGSAPAnimations.createSponsorCarousel(".sponsor-carousel");
    }
  }, [isInView]);

  const titleSponsors = [
    { 
      name: "TechCorp", 
      logo: "🚀", 
      tier: "Presenting Sponsor",
      description: "Leading the future of AI and quantum computing",
      color: "#8080E0"
    },
    { 
      name: "InnovateLab", 
      logo: "⚡", 
      tier: "Title Sponsor",
      description: "Pioneering breakthrough technologies since 2020",
      color: "#E0A0C0"
    }
  ];

  const goldSponsors = [
    { name: "CloudBase", logo: "☁️", color: "#8080E0" },
    { name: "DevTools Pro", logo: "🛠️", color: "#E0A0C0" },
    { name: "AI Dynamics", logo: "🤖", color: "#002040" },
    { name: "CyberSec Solutions", logo: "🛡️", color: "#8080E0" }
  ];

  const silverSponsors = [
    { name: "StartupHub", logo: "💡", color: "#E0A0C0" },
    { name: "CodeAcademy", logo: "📚", color: "#002040" },
    { name: "DesignForge", logo: "🎨", color: "#8080E0" },
    { name: "DataFlow", logo: "📊", color: "#E0A0C0" },
    { name: "MobileFirst", logo: "📱", color: "#002040" },
    { name: "WebMasters", logo: "🌐", color: "#8080E0" }
  ];

  const MarqueeSponsors = ({ sponsors, direction = "left" }: { sponsors: any[], direction?: "left" | "right" }) => (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex gap-8 items-center sponsor-carousel"
        animate={{
          x: direction === "left" ? [0, -1000] : [0, 1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={`${sponsor.name}-${index}`}
            className="sponsor-logo card-neon flex items-center gap-4 px-8 py-4 hover:scale-110 transition-all duration-300 group"
            style={{
              minWidth: '200px',
              border: `1px solid ${sponsor.color}40`,
              background: `radial-gradient(circle, ${sponsor.color}10, transparent)`
            }}
          >
            <span className="text-3xl">{sponsor.logo}</span>
            <span 
              className="font-semibold whitespace-nowrap text-lg group-hover:text-neon-glow transition-colors"
              style={{ color: sponsor.color }}
            >
              {sponsor.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section ref={ref} className="sponsors-section py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              rgba(128, 128, 224, 0.1) 0px,
              rgba(128, 128, 224, 0.1) 2px,
              transparent 2px,
              transparent 40px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(224, 160, 192, 0.1) 0px,
              rgba(224, 160, 192, 0.1) 2px,
              transparent 2px,
              transparent 40px
            )
          `
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="reveal-neon text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Building2 className="w-8 h-8 text-primary-glow" />
            <h2 className="text-4xl md:text-6xl font-black text-neon-glow">
              MISSION PARTNERS
            </h2>
            <Sparkles className="w-8 h-8 text-accent-glow" />
          </div>
          <div className="neon-divider w-96 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Powered by <span className="text-neon-glow font-semibold">industry-leading companies</span> committed to fostering innovation 
            and supporting the next generation of tech pioneers in their journey to greatness.
          </p>
        </div>

        {/* Title Sponsors */}
        <div className="reveal-neon mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-neon-glow">Title Sponsors</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {titleSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="card-neon text-center p-12 hover:scale-105 transition-all duration-500 group"
                style={{
                  border: `2px solid ${sponsor.color}40`,
                  background: `radial-gradient(circle, ${sponsor.color}10, transparent)`
                }}
              >
                <div className="text-8xl mb-6">{sponsor.logo}</div>
                <h4 className="text-3xl font-bold text-gray-100 mb-3 group-hover:text-neon-glow transition-colors">
                  {sponsor.name}
                </h4>
                <p 
                  className="font-semibold text-lg mb-4"
                  style={{ color: sponsor.color }}
                >
                  {sponsor.tier}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {sponsor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="reveal-neon mb-16">
          <h3 className="text-2xl font-bold text-center mb-10">
            <span className="text-yellow-400">Gold Sponsors</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="card-neon text-center p-8 hover:scale-110 transition-all duration-300 group"
                style={{
                  border: `1px solid ${sponsor.color}40`,
                  background: `radial-gradient(circle, ${sponsor.color}10, transparent)`
                }}
              >
                <div className="text-4xl mb-4">{sponsor.logo}</div>
                <h4 
                  className="text-lg font-semibold group-hover:text-neon-glow transition-colors"
                  style={{ color: sponsor.color }}
                >
                  {sponsor.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors Marquee */}
        <div className="reveal-neon mb-16">
          <h3 className="text-xl font-bold text-center mb-10">
            <span className="text-gray-400">Silver Sponsors</span>
          </h3>
          <div className="space-y-8">
            <MarqueeSponsors sponsors={silverSponsors.slice(0, 3)} direction="left" />
            <MarqueeSponsors sponsors={silverSponsors.slice(3)} direction="right" />
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="reveal-neon text-center">
          <div className="card-neon max-w-4xl mx-auto p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-primary-glow" />
              <h3 className="text-3xl font-bold text-neon-glow">
                Join Our Mission
              </h3>
              <Zap className="w-8 h-8 text-accent-glow" />
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Partner with us to empower the next generation of innovators and showcase your brand 
              to the brightest minds in technology. Together, we'll shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="magnetic-btn btn-neon-primary glow-pulse">
                <Building2 className="mr-2 w-5 h-5" />
                Become a Sponsor
              </button>
              <button className="magnetic-btn btn-neon-secondary">
                Partnership Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;