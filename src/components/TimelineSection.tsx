import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Clock, Calendar, CheckCircle, Zap, Coffee, Trophy, Rocket } from "lucide-react";
import { NeonGSAPAnimations } from "@/lib/gsapAnimations";

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      NeonGSAPAnimations.createGlowingTimeline();
      NeonGSAPAnimations.createNeonSectionReveal(".timeline-section");
    }
  }, [isInView]);

  const timelineEvents = [
    {
      time: "6:00 PM",
      day: "Friday, March 15",
      title: "Registration & Ignition",
      description: "Welcome to the future! Check-in, team formation, and opening ceremony in our neon-lit arena.",
      icon: Rocket,
      color: "#8080E0"
    },
    {
      time: "8:00 PM",
      day: "Friday, March 15",
      title: "Mission Launch",
      description: "Theme reveal, rules briefing, and the countdown begins! Let the coding odyssey commence.",
      icon: Zap,
      color: "#E0A0C0"
    },
    {
      time: "10:00 PM",
      day: "Friday, March 15",
      title: "Midnight Fuel",
      description: "Neon-powered pizza and energy drinks to keep your creative engines running through the night.",
      icon: Coffee,
      color: "#002040"
    },
    {
      time: "8:00 AM",
      day: "Saturday, March 16",
      title: "Dawn Workshops",
      description: "Recharge with breakfast and technical workshops led by industry pioneers and tech visionaries.",
      icon: CheckCircle,
      color: "#8080E0"
    },
    {
      time: "12:00 PM",
      day: "Saturday, March 16",
      title: "Midday Networking",
      description: "Connect with mentors, sponsors, and fellow innovators in our interactive collaboration zones.",
      icon: CheckCircle,
      color: "#E0A0C0"
    },
    {
      time: "6:00 PM",
      day: "Saturday, March 16",
      title: "Evening Lightning Talks",
      description: "Inspiring presentations from successful entrepreneurs, CTOs, and tech industry leaders.",
      icon: Zap,
      color: "#002040"
    },
    {
      time: "10:00 AM",
      day: "Sunday, March 17",
      title: "Final Sprint",
      description: "Code freeze approaches! Last chance to polish your innovation and prepare for the showcase.",
      icon: Clock,
      color: "#8080E0"
    },
    {
      time: "2:00 PM",
      day: "Sunday, March 17",
      title: "Demo Showcase",
      description: "Present your groundbreaking solutions to our panel of expert judges and industry leaders.",
      icon: Trophy,
      color: "#E0A0C0"
    },
    {
      time: "5:00 PM",
      day: "Sunday, March 17",
      title: "Victory Ceremony",
      description: "Winners revealed! Celebrate achievements and network with the future leaders of tech.",
      icon: Trophy,
      color: "#002040"
    }
  ];

  return (
    <section ref={ref} className="timeline-section py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(128, 128, 224, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(224, 160, 192, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(128, 128, 224, 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(224, 160, 192, 0.1) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="reveal-neon text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Clock className="w-8 h-8 text-primary-glow" />
            <h2 className="text-4xl md:text-6xl font-black text-neon-glow">
              MISSION TIMELINE
            </h2>
            <Calendar className="w-8 h-8 text-accent-glow" />
          </div>
          <div className="neon-divider w-96 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your <span className="text-neon-glow font-semibold">48-hour journey</span> mapped out from launch to landing. 
            Every moment designed to fuel innovation and push the boundaries of what's possible.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative timeline-glow-line max-w-6xl mx-auto">
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-center reveal-neon ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full z-10 flex items-center justify-center"
                  style={{
                    backgroundColor: event.color,
                    boxShadow: `0 0 20px ${event.color}, 0 0 40px ${event.color}60`
                  }}
                >
                  <event.icon className="w-3 h-3 text-black" />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="card-neon hover:scale-105 transition-all duration-500 gpu-accelerated group">
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex-shrink-0 p-3 rounded-lg"
                        style={{
                          background: `radial-gradient(circle, ${event.color}20, transparent)`,
                          border: `1px solid ${event.color}40`
                        }}
                      >
                        <event.icon 
                          className="w-6 h-6" 
                          style={{ color: event.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-gray-100 group-hover:text-neon-glow transition-colors">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm">
                            <span 
                              className="font-semibold px-3 py-1 rounded-full"
                              style={{
                                color: event.color,
                                background: `${event.color}20`,
                                border: `1px solid ${event.color}40`
                              }}
                            >
                              {event.time}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">{event.day}</span>
                          </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
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

        {/* Bottom CTA */}
        <div className="reveal-neon text-center mt-20">
          <div className="card-neon max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-neon-glow mb-4">
              Ready for the Adventure?
            </h3>
            <p className="text-gray-300 mb-6">
              Every second counts in this high-energy coding marathon. Secure your spot now!
            </p>
            <button className="magnetic-btn btn-neon-primary glow-pulse">
              <Rocket className="mr-2 w-5 h-5" />
              Join the Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;