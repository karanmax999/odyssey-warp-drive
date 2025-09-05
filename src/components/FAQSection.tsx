import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const faqs = [
    {
      question: "Who can participate in Odyssey Hackathon?",
      answer: "Odyssey is open to students, professionals, and anyone passionate about technology and innovation. Whether you're a developer, designer, product manager, or entrepreneur, we welcome participants from all backgrounds and skill levels."
    },
    {
      question: "Do I need a team to participate?",
      answer: "Not at all! You can register as an individual and we'll help you find teammates during the team formation session. Teams can have 2-4 members maximum. You're also welcome to come with a pre-formed team."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, and any development tools you prefer. We'll provide WiFi, power outlets, meals, snacks, and all the caffeine you need. Don't forget a sleeping bag if you plan to stay overnight!"
    },
    {
      question: "Is there a registration fee?",
      answer: "No, Odyssey Hackathon is completely free! This includes meals, snacks, swag, mentorship, and access to all workshops and events throughout the weekend."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be evaluated based on technical innovation, creativity, business viability, presentation quality, and adherence to the hackathon theme. Our panel includes industry experts, VCs, and successful entrepreneurs."
    },
    {
      question: "Can I work on an existing project?",
      answer: "No, all projects must be started from scratch during the hackathon. However, you can use open-source libraries, frameworks, and APIs. Pre-planning and research are allowed and encouraged!"
    },
    {
      question: "What if I'm a beginner?",
      answer: "Perfect! Odyssey welcomes beginners with open arms. We'll have mentors available throughout the event, beginner-friendly workshops, and plenty of resources to help you learn and contribute meaningfully to a project."
    },
    {
      question: "Are there any restrictions on technology or platforms?",
      answer: "You're free to use any programming language, framework, or platform you prefer. We encourage innovation and experimentation with new technologies, including AI/ML, blockchain, IoT, AR/VR, and more."
    }
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
            Mission Briefing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions about your upcoming adventure? We've got answers to help you prepare for the journey ahead.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="card-cosmic border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline group">
                    <span className="text-foreground font-semibold group-hover:text-primary-glow transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 border-t border-border/30">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="card-cosmic max-w-2xl mx-auto p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our mission control team is here to help! Reach out to us anytime for additional information or clarifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-nebula">
                Contact Mission Control
              </button>
              <button className="btn-aurora">
                Join Discord
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;