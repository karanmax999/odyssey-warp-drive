import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const titleSponsors = [
    { name: "TechCorp", logo: "🚀", tier: "Presenting Sponsor" },
    { name: "InnovateLab", logo: "⚡", tier: "Title Sponsor" }
  ];

  const goldSponsors = [
    { name: "CloudBase", logo: "☁️" },
    { name: "DevTools Pro", logo: "🛠️" },
    { name: "AI Dynamics", logo: "🤖" },
    { name: "CyberSec Solutions", logo: "🛡️" }
  ];

  const silverSponsors = [
    { name: "StartupHub", logo: "💡" },
    { name: "CodeAcademy", logo: "📚" },
    { name: "DesignForge", logo: "🎨" },
    { name: "DataFlow", logo: "📊" },
    { name: "MobileFirst", logo: "📱" },
    { name: "WebMasters", logo: "🌐" }
  ];

  const MarqueeSponsors = ({ sponsors, direction = "left" }: { sponsors: any[], direction?: "left" | "right" }) => (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex gap-12 items-center"
        animate={{
          x: direction === "left" ? [0, -1000] : [0, 1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={`${sponsor.name}-${index}`}
            className="flex items-center gap-4 bg-card/20 backdrop-blur-sm border border-border/30 rounded-lg px-6 py-4 hover:bg-card/40 transition-colors"
          >
            <span className="text-2xl">{sponsor.logo}</span>
            <span className="text-foreground font-medium whitespace-nowrap">
              {sponsor.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-nebula-glow">
            Mission Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by industry-leading companies committed to fostering innovation and supporting the next generation of tech pioneers
          </p>
        </motion.div>

        {/* Title Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-cosmic-glow">
            Title Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {titleSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="card-cosmic text-center p-12 hover:scale-105 transition-transform"
              >
                <div className="text-6xl mb-4">{sponsor.logo}</div>
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  {sponsor.name}
                </h4>
                <p className="text-primary-glow font-medium">
                  {sponsor.tier}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-secondary-glow">
            Gold Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="card-cosmic text-center p-6 hover:scale-105 transition-transform"
              >
                <div className="text-3xl mb-2">{sponsor.logo}</div>
                <h4 className="text-lg font-semibold text-foreground">
                  {sponsor.name}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-lg font-bold text-center mb-8 text-accent-glow">
            Silver Sponsors
          </h3>
          <div className="space-y-6">
            <MarqueeSponsors sponsors={silverSponsors.slice(0, 3)} direction="left" />
            <MarqueeSponsors sponsors={silverSponsors.slice(3)} direction="right" />
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card-cosmic max-w-2xl mx-auto p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in Sponsoring?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our mission to empower the next generation of innovators. 
              Partner with us to showcase your brand to top talent.
            </p>
            <button className="btn-cosmic">
              Become a Sponsor
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;