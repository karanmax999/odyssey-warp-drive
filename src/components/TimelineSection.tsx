import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Clock, Calendar, CheckCircle } from "lucide-react";
import { GSAPAnimations } from "@/lib/gsapAnimations";

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      GSAPAnimations.createSectionReveal(".timeline-section");
      GSAPAnimations.create3DCardEffect(".timeline-card");
      
      // Enhanced timeline animations
      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item, index) => {
        const delay = index * 0.2;
        GSAPAnimations.createStaggerTextReveal(`.timeline-item-${index} .timeline-title`);
      });
    }
  }, [isInView]);

  const timelineEvents = [
    {
      time: "6:00 PM",
      day: "Friday, March 15",
      title: "Registration & Check-in",
      description: "Welcome reception, team formation, and kick-off ceremony"
    },
    {
      time: "8:00 PM",
      day: "Friday, March 15",
      title: "Opening Ceremony",
      description: "Theme reveal, rules explanation, and hacking begins!"
    },
    {
      time: "10:00 PM",
      day: "Friday, March 15",
      title: "Midnight Snacks",
      description: "Fuel up with pizza and energy drinks for the long night ahead"
    },
    {
      time: "8:00 AM",
      day: "Saturday, March 16",
      title: "Breakfast & Workshops",
      description: "Morning fuel and technical workshops with industry experts"
    },
    {
      time: "12:00 PM",
      day: "Saturday, March 16",
      title: "Lunch & Networking",
      description: "Connect with mentors, sponsors, and fellow developers"
    },
    {
      time: "6:00 PM",
      day: "Saturday, March 16",
      title: "Dinner & Lightning Talks",
      description: "Quick presentations from successful entrepreneurs and CTOs"
    },
    {
      time: "10:00 AM",
      day: "Sunday, March 17",
      title: "Final Submissions",
      description: "Code freeze! Time to submit your projects and demos"
    },
    {
      time: "2:00 PM",
      day: "Sunday, March 17",
      title: "Presentations & Judging",
      description: "Pitch your solutions to our panel of industry judges"
    },
    {
      time: "5:00 PM",
      day: "Sunday, March 17",
      title: "Awards Ceremony",
      description: "Winners announcement and closing celebration"
    }
  ];

  return (
    <section ref={ref} className="timeline-section py-24 relative">
      <div className="container mx-auto px-6">
        <div className="reveal-element text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-nebula-glow">
            Mission Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your 48-hour journey mapped out from launch to landing
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-item timeline-item-${index} relative flex items-center reveal-element ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-glow rounded-full shadow-[0_0_20px_hsl(var(--primary-glow))] z-10"></div>

                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="timeline-card card-cosmic hover:scale-105 transition-transform duration-300 transform-gpu">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <Clock className="w-5 h-5 text-primary-glow" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h3 className="timeline-title text-lg font-bold text-foreground">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-primary-glow">
                            <Calendar className="w-4 h-4" />
                            <span>{event.day}</span>
                            <span className="text-muted-foreground">•</span>
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;