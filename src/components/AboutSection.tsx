import { motion } from "framer-motion";
import { useInView } from "framer-motion"; 
import { useRef, useEffect } from "react";
import { Code, Users, Trophy, Zap, Cpu, Rocket } from "lucide-react";
import { NeonGSAPAnimations } from "@/lib/gsapAnimations";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      NeonGSAPAnimations.createNeonSectionReveal(".about-section");
      NeonGSAPAnimations.createNeon3DCards(".feature-card");
      NeonGSAPAnimations.createNeonCounters(".counter-participants", 500);
      NeonGSAPAnimations.createNeonCounters(".counter-prizes", 50000);
      NeonGSAPAnimations.createNeonCounters(".counter-hours", 48);
    }
  }, [isInView]);

  const features = [
    {
      icon: Code,
      title: "48 Hours of Innovation",
      description: "Non-stop coding in a futuristic environment with cutting-edge tools and technologies.",
      color: "#8080E0"
    },
    {
      icon: Users,
      title: "Elite Collaboration",
      description: "Connect with brilliant minds from diverse backgrounds in our neon-lit innovation space.",
      color: "#E0A0C0"
    },
    {
      icon: Trophy,
      title: "$50K+ in Prizes",
      description: "Compete for incredible rewards including cash, tech, and career opportunities.",
      color: "#002040"
    },
    {
      icon: Zap,
      title: "Lightning Workshops",
      description: "Learn from industry experts through immersive sessions and mentoring programs.",
      color: "#8080E0"
    }
  ];

  const stats = [
    { number: 500, label: "Participants", suffix: "+", className: "counter-participants" },
    { number: 50000, label: "Prize Pool", prefix: "$", className: "counter-prizes" },
    { number: 48, label: "Hours", suffix: "", className: "counter-hours" }
  ];

  return (
    <section ref={ref} className="about-section py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(128, 128, 224, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(224, 160, 192, 0.3) 0%, transparent 50%)
          `
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="reveal-neon text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Cpu className="w-8 h-8 text-primary-glow" />
            <h2 className="text-4xl md:text-6xl font-black text-neon-glow">
              ABOUT ODYSSEY
            </h2>
            <Rocket className="w-8 h-8 text-accent-glow" />
          </div>
          <div className="neon-divider w-96 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Odyssey isn't just a hackathon—it's a <span className="text-neon-glow font-semibold">journey into the future</span> of technology. 
            Bring your wildest ideas to life, collaborate with brilliant minds, and compete for incredible prizes 
            in our <span className="text-neon-glow font-semibold">neon-powered coding adventure</span>.
          </p>
        </div>

        {/* Stats Counter */}
        <div className="reveal-neon grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="card-neon p-8 mb-4">
                <div className="counter-glow text-4xl md:text-6xl font-black mb-2">
                  {stat.prefix}
                  <span className={stat.className}>0</span>
                  {stat.suffix}
                </div>
                <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card card-neon group hover:scale-105 transition-all duration-500 reveal-neon gpu-accelerated"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div 
                  className="mb-6 p-6 rounded-full relative overflow-hidden"
                  style={{
                    background: `radial-gradient(circle, ${feature.color}20, transparent)`,
                    border: `2px solid ${feature.color}40`
                  }}
                >
                  <feature.icon 
                    className="w-10 h-10 relative z-10" 
                    style={{ color: feature.color }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${feature.color}40, transparent)`,
                      boxShadow: `0 0 30px ${feature.color}60`
                    }}
                  ></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-100 group-hover:text-neon-glow transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="reveal-neon text-center mt-20">
          <div className="card-neon max-w-4xl mx-auto p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-neon-glow mb-6">
              Ready to Shape the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of innovators in the most electrifying hackathon experience ever created. 
              Your journey to technological greatness starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="magnetic-btn btn-neon-primary glow-pulse">
                <Zap className="mr-2 w-5 h-5" />
                Start Your Journey
              </button>
              <button className="magnetic-btn btn-neon-secondary">
                View Challenges
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;