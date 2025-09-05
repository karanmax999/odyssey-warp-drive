import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Star } from "lucide-react";

const PrizesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const prizes = [
    {
      icon: Trophy,
      rank: "1st Place",
      title: "Grand Prize",
      amount: "$15,000",
      rewards: [
        "Cash prize",
        "Latest MacBook Pro",
        "Startup incubator spot",
        "1-year cloud credits"
      ],
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Medal,
      rank: "2nd Place",
      title: "Runner Up",
      amount: "$8,000",
      rewards: [
        "Cash prize",
        "iPad Pro + Apple Pencil",
        "Mentorship program",
        "6-month cloud credits"
      ],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: Award,
      rank: "3rd Place",
      title: "Third Place",
      amount: "$5,000",
      rewards: [
        "Cash prize",
        "High-end gaming laptop",
        "Workshop access",
        "3-month cloud credits"
      ],
      gradient: "from-primary to-primary-glow"
    }
  ];

  const specialPrizes = [
    "Best AI/ML Implementation - $3,000",
    "Most Creative Solution - $2,500", 
    "Best Mobile App - $2,000",
    "Social Impact Award - $2,000",
    "Best Use of Sponsor API - $1,500"
  ];

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-cosmic-glow">
            Stellar Prizes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compete for over $50,000 in prizes, including cash, cutting-edge tech, and career opportunities
          </p>
        </motion.div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`card-cosmic hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'lg:scale-110 lg:z-10' : ''
              }`}
            >
              <div className="text-center">
                <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${prize.gradient} mb-6`}>
                  <prize.icon className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  {prize.rank}
                </h3>
                
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  {prize.title}
                </h4>
                
                <div className={`text-4xl font-bold bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent mb-6`}>
                  {prize.amount}
                </div>
                
                <ul className="space-y-3 text-left">
                  {prize.rewards.map((reward, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Star className="w-4 h-4 text-accent-glow flex-shrink-0" />
                      <span>{reward}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card-cosmic"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-nebula-glow mb-4">
              Special Category Awards
            </h3>
            <p className="text-muted-foreground">
              Additional prizes for outstanding achievements in specific categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialPrizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/20 border border-border/30"
              >
                <Star className="w-5 h-5 text-accent-glow flex-shrink-0" />
                <span className="text-foreground">{prize}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;