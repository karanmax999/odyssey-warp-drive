import { motion } from "framer-motion";
import { useInView } from "framer-motion"; 
import { useRef, useEffect } from "react";
import { Code, Users, Trophy, Zap } from "lucide-react";
import { GSAPAnimations } from "@/lib/gsapAnimations";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      GSAPAnimations.createSectionReveal(".about-section");
      GSAPAnimations.create3DCardEffect(".feature-card");
      GSAPAnimations.createMagneticButtons(".feature-card");
    }
  }, [isInView]);

  const features = [
    {
      icon: Code,
      title: "48 Hours of Coding",
      description: "Non-stop innovation and development in an immersive coding environment."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with talented individuals from diverse backgrounds and skill sets."
    },
    {
      icon: Trophy,
      title: "Amazing Prizes",
      description: "Compete for prizes worth $50,000+ including cash, tech, and opportunities."
    },
    {
      icon: Zap,
      title: "Lightning Talks",
      description: "Learn from industry experts through workshops and mentoring sessions."
    }
  ];

  return (
    <section ref={ref} className="about-section py-24 relative">
      <div className="container mx-auto px-6">
        <div className="reveal-element text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-cosmic-glow">
            About Odyssey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Odyssey is more than a hackathon—it's a journey into the future of technology. 
            Bring your ideas to life, collaborate with brilliant minds, and compete for incredible prizes 
            in our space-themed coding adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card card-cosmic group hover:scale-105 transition-transform duration-300 reveal-element transform-gpu"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-glow" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;