import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, MapPin } from "lucide-react";

const RegisterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Users, number: "500+", label: "Participants" },
    { icon: Clock, number: "48", label: "Hours" },
    { icon: MapPin, number: "1", label: "Epic Venue" }
  ];

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-cosmic-glow">
            Ready for Launch?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of innovators for 48 hours of non-stop coding, creativity, and collaboration. 
            Your space adventure awaits!
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="p-3 rounded-full bg-primary/20">
                  <stat.icon className="w-6 h-6 text-primary-glow" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-cosmic text-center p-12">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Secure Your Spot Now
              </h3>
              <p className="text-muted-foreground mb-6">
                Registration is filling up fast! Don't miss your chance to be part of this 
                incredible journey and compete for amazing prizes.
              </p>
            </div>

            {/* Registration Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Free Everything", desc: "Meals, snacks, swag, and more" },
                { title: "Expert Mentorship", desc: "Learn from industry leaders" },
                { title: "Amazing Prizes", desc: "$50,000+ in prizes and opportunities" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-lg bg-muted/10 border border-border/20"
                >
                  <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Registration Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="btn-cosmic text-lg px-12 py-6 group">
                Register Individual
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button className="btn-nebula text-lg px-12 py-6 group">
                Register Team
                <Users className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8"
            >
              <p className="text-sm text-muted-foreground">
                Registration closes March 10th or when capacity is reached
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Questions about registration? Contact us at{" "}
            <a 
              href="mailto:mission-control@odysseyhack.com" 
              className="text-primary-glow hover:text-primary transition-colors underline"
            >
              mission-control@odysseyhack.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;