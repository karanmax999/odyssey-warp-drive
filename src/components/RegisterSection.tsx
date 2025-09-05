import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, MapPin, Zap, Rocket, Star } from "lucide-react";
import { NeonGSAPAnimations } from "@/lib/gsapAnimations";

const RegisterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      NeonGSAPAnimations.createNeonSectionReveal(".register-section");
      NeonGSAPAnimations.createFloatingCTA(".floating-cta");
    }
  }, [isInView]);

  const stats = [
    { icon: Users, number: "500+", label: "Innovators", color: "#8080E0" },
    { icon: Clock, number: "48", label: "Epic Hours", color: "#E0A0C0" },
    { icon: MapPin, number: "1", label: "Legendary Venue", color: "#002040" }
  ];

  const benefits = [
    { 
      title: "Everything Free", 
      desc: "Meals, snacks, swag, and unlimited energy drinks",
      icon: Star,
      color: "#8080E0"
    },
    { 
      title: "Expert Mentorship", 
      desc: "Learn from industry legends and tech visionaries",
      icon: Zap,
      color: "#E0A0C0"
    },
    { 
      title: "Epic Prizes", 
      desc: "$50,000+ in prizes and life-changing opportunities",
      icon: Rocket,
      color: "#002040"
    }
  ];

  return (
    <section ref={ref} className="register-section py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(128, 128, 224, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(224, 160, 192, 0.4) 0%, transparent 50%),
            linear-gradient(45deg, rgba(0, 32, 64, 0.3) 0%, transparent 100%)
          `
        }}
      />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(128, 128, 224, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(128, 128, 224, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'grid-move 20s linear infinite'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="reveal-neon text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Rocket className="w-10 h-10 text-primary-glow" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neon-glow">
              READY FOR LAUNCH?
            </h2>
            <Zap className="w-10 h-10 text-accent-glow" />
          </div>
          <div className="neon-divider w-96 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Join hundreds of innovators for <span className="text-neon-glow font-bold">48 hours</span> of non-stop coding, 
            creativity, and collaboration. Your <span className="text-neon-glow font-bold">space adventure</span> awaits!
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 card-neon px-8 py-4 hover:scale-110 transition-all duration-300"
                style={{
                  border: `1px solid ${stat.color}40`,
                  background: `radial-gradient(circle, ${stat.color}10, transparent)`
                }}
              >
                <div 
                  className="p-3 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${stat.color}30, transparent)`,
                    border: `1px solid ${stat.color}50`
                  }}
                >
                  <stat.icon 
                    className="w-6 h-6" 
                    style={{ color: stat.color }}
                  />
                </div>
                <div>
                  <div 
                    className="text-3xl font-black"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Registration Card */}
        <div className="reveal-neon max-w-6xl mx-auto">
          <div className="card-neon p-12 text-center relative overflow-hidden">
            {/* Floating particles background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full opacity-60 float-animation"
                  style={{
                    backgroundColor: i % 3 === 0 ? '#8080E0' : i % 3 === 1 ? '#E0A0C0' : '#002040',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 3 + 's',
                    boxShadow: `0 0 10px currentColor`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold text-neon-glow mb-6">
                Secure Your Spot Now
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Registration is filling up fast! Don't miss your chance to be part of this 
                <span className="text-neon-glow font-semibold"> incredible journey</span> and compete for amazing prizes.
              </p>

              {/* Registration Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl hover:scale-105 transition-all duration-300"
                    style={{
                      background: `radial-gradient(circle, ${benefit.color}15, transparent)`,
                      border: `1px solid ${benefit.color}30`
                    }}
                  >
                    <div 
                      className="inline-flex p-4 rounded-full mb-4"
                      style={{
                        background: `radial-gradient(circle, ${benefit.color}20, transparent)`,
                        border: `1px solid ${benefit.color}40`
                      }}
                    >
                      <benefit.icon 
                        className="w-6 h-6" 
                        style={{ color: benefit.color }}
                      />
                    </div>
                    <h4 
                      className="font-bold text-lg mb-2"
                      style={{ color: benefit.color }}
                    >
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              {/* Registration Buttons */}
              <div className="floating-cta flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button className="magnetic-btn btn-neon-primary glow-pulse text-xl px-12 py-6 group gpu-accelerated">
                  <Rocket className="mr-3 w-6 h-6" />
                  Register Individual
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button className="magnetic-btn btn-neon-secondary text-xl px-12 py-6 group gpu-accelerated">
                  <Users className="mr-3 w-6 h-6" />
                  Register Team
                  <Star className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              <p className="text-sm text-gray-400 mb-8">
                Registration closes <span className="text-neon-glow font-semibold">March 10th</span> or when capacity is reached
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="reveal-neon text-center mt-12">
          <div className="card-neon max-w-2xl mx-auto p-8">
            <h4 className="text-xl font-bold text-neon-glow mb-4">
              Need Help with Registration?
            </h4>
            <p className="text-gray-300 mb-6">
              Our mission control team is standing by to assist you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-btn btn-neon-secondary">
                <Zap className="mr-2 w-4 h-4" />
                Contact Mission Control
              </button>
              <button className="magnetic-btn btn-neon-secondary">
                <Users className="mr-2 w-4 h-4" />
                Join Discord
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Questions? Reach out at{" "}
              <a 
                href="mailto:mission-control@odysseyhack.com" 
                className="text-primary-glow hover:text-neon-glow transition-colors underline"
              >
                mission-control@odysseyhack.com
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>
    </section>
  );
};

export default RegisterSection;