import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Trophy, Medal, Award, Star, Zap, Crown, Gem } from "lucide-react";
import { NeonGSAPAnimations } from "@/lib/gsapAnimations";

const PrizesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      NeonGSAPAnimations.createPrizeFlipCards(".prize-card");
      NeonGSAPAnimations.createNeonSectionReveal(".prizes-section");
    }
  }, [isInView]);

  const mainPrizes = [
    {
      icon: Crown,
      rank: "1st Place",
      title: "GRAND CHAMPION",
      amount: "$15,000",
      rewards: [
        "Cash prize + equity opportunities",
        "Latest MacBook Pro M3 Max",
        "Startup incubator program",
        "1-year premium cloud credits",
        "Mentorship with tech leaders"
      ],
      gradient: "from-yellow-400 to-yellow-600",
      glowColor: "#FFD700",
      special: true
    },
    {
      icon: Trophy,
      rank: "2nd Place", 
      title: "ELITE RUNNER-UP",
      amount: "$8,000",
      rewards: [
        "Cash prize + investment intro",
        "iPad Pro + Apple Pencil Pro",
        "Premium mentorship program",
        "6-month cloud credits",
        "Tech conference tickets"
      ],
      gradient: "from-gray-300 to-gray-500",
      glowColor: "#C0C0C0"
    },
    {
      icon: Medal,
      rank: "3rd Place",
      title: "RISING INNOVATOR",
      amount: "$5,000",
      rewards: [
        "Cash prize + networking access",
        "High-end gaming laptop",
        "Workshop access pass",
        "3-month cloud credits",
        "Industry meetup invites"
      ],
      gradient: "from-amber-600 to-amber-800",
      glowColor: "#CD7F32"
    }
  ];

  const specialPrizes = [
    { title: "Best AI/ML Innovation", amount: "$3,000", icon: Zap, color: "#8080E0" },
    { title: "Most Creative Solution", amount: "$2,500", icon: Star, color: "#E0A0C0" },
    { title: "Best Mobile Experience", amount: "$2,000", icon: Award, color: "#002040" },
    { title: "Social Impact Champion", amount: "$2,000", icon: Trophy, color: "#8080E0" },
    { title: "Best Use of Sponsor API", amount: "$1,500", icon: Gem, color: "#E0A0C0" },
    { title: "People's Choice Award", amount: "$1,000", icon: Star, color: "#002040" }
  ];

  return (
    <section ref={ref} className="prizes-section py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(128, 128, 224, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(224, 160, 192, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 60%)
          `
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="reveal-neon text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-6xl font-black text-neon-glow">
              STELLAR PRIZES
            </h2>
            <Gem className="w-8 h-8 text-accent-glow" />
          </div>
          <div className="neon-divider w-96 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Compete for over <span className="text-neon-glow font-bold">$50,000</span> in prizes, including cash, 
            cutting-edge tech, and career-defining opportunities that will launch your future.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {mainPrizes.map((prize, index) => (
            <div
              key={index}
              className={`prize-card card-neon relative overflow-hidden ${
                prize.special ? 'lg:scale-110 lg:z-10 lg:-mt-8' : ''
              }`}
            >
              {prize.special && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div 
                    className="px-4 py-2 rounded-full text-xs font-bold text-black"
                    style={{
                      background: `linear-gradient(45deg, ${prize.glowColor}, #FFD700)`,
                      boxShadow: `0 0 20px ${prize.glowColor}80`
                    }}
                  >
                    GRAND PRIZE
                  </div>
                </div>
              )}
              
              <div className="text-center relative z-10">
                <div 
                  className="inline-flex p-8 rounded-full mb-6 relative"
                  style={{
                    background: `radial-gradient(circle, ${prize.glowColor}20, transparent)`,
                    border: `2px solid ${prize.glowColor}40`,
                    boxShadow: `0 0 30px ${prize.glowColor}40`
                  }}
                >
                  <prize.icon 
                    className="w-16 h-16" 
                    style={{ color: prize.glowColor }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full animate-pulse"
                    style={{
                      background: `radial-gradient(circle, ${prize.glowColor}10, transparent)`,
                      boxShadow: `0 0 40px ${prize.glowColor}30`
                    }}
                  ></div>
                </div>
                
                <h3 className="text-sm font-medium text-gray-400 mb-2 tracking-wider">
                  {prize.rank}
                </h3>
                
                <h4 className="text-2xl font-bold text-gray-100 mb-4">
                  {prize.title}
                </h4>
                
                <div 
                  className="text-5xl font-black mb-8"
                  style={{
                    background: `linear-gradient(45deg, ${prize.glowColor}, #FFFFFF)`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: `0 0 30px ${prize.glowColor}60`
                  }}
                >
                  {prize.amount}
                </div>
                
                <ul className="space-y-3 text-left">
                  {prize.rewards.map((reward, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Star 
                        className="w-4 h-4 mt-1 flex-shrink-0" 
                        style={{ color: prize.glowColor }}
                      />
                      <span>{reward}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Special Category Awards */}
        <div className="reveal-neon">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neon-glow mb-4">
              Special Category Awards
            </h3>
            <div className="neon-divider w-64 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">
              Additional recognition for outstanding achievements in specific innovation areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialPrizes.map((prize, index) => (
              <div
                key={index}
                className="card-neon hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 p-6">
                  <div 
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{
                      background: `radial-gradient(circle, ${prize.color}20, transparent)`,
                      border: `1px solid ${prize.color}40`
                    }}
                  >
                    <prize.icon 
                      className="w-6 h-6" 
                      style={{ color: prize.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-100 group-hover:text-neon-glow transition-colors mb-1">
                      {prize.title}
                    </h4>
                    <p 
                      className="text-xl font-bold"
                      style={{ color: prize.color }}
                    >
                      {prize.amount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal-neon text-center mt-20">
          <div className="card-neon max-w-4xl mx-auto p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-neon-glow mb-6">
              Your Innovation Could Win Big
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              These incredible prizes await the most innovative solutions. Will your team claim the crown?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="magnetic-btn btn-neon-primary glow-pulse">
                <Crown className="mr-2 w-5 h-5" />
                Compete for Glory
              </button>
              <button className="magnetic-btn btn-neon-secondary">
                View Full Rules
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;