import React from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Star, Target, Video, Camera } from "lucide-react";
// import { brand } from "../../assets/brands";
import group from "../../assets/group.png";
import { useState, useEffect } from "react";

const stats = [
  {
    icon: Users,
    number: 45,
    suffix: "+",
    label: "Digital Campaigns",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Video,
    number: 25,
    suffix: "+",
    label: "Corporate Films",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Camera,
    number: 720,
    suffix: "+",
    label: "Event Coverage",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: Trophy,
    number: 90,
    suffix: "+",
    label: "Brand Identities",
    color: "from-yellow-400 to-orange-500",
  },
];

// Counter component with counting animation
function CounterComponent({
  targetNumber,
  suffix = "",
  duration = 2000,
  inView,
}: {
  targetNumber: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * targetNumber);

      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [targetNumber, duration, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function ClientsChapter() {
  const [statsInView, setStatsInView] = useState(false);

  return (
    <section className="relative flex min-h-[100dvh] w-full items-center justify-center bg-gradient-to-b from-slate-700 via-purple-900/20 to-slate-700 py-10 sm:py-14 md:py-16">
      <div className="flex w-full max-w-7xl flex-col justify-center px-4 pb-8 s25:px-6 s25:pb-10 md:px-8">
        {/* Header - Area Kuning */}
        <div className="mb-12 text-center md:mb-16">
          <motion.h2
            className="mobile-text-2xl mb-3 font-bold leading-tight s25:mb-4 s25:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <span className="text-white block">TRUSTED BY </span>
            <span className="animate-gradient-purple-pink font-bold">
              AMAZING CLIENTS
            </span>
          </motion.h2>
          <motion.p
            className="mobile-text-base mx-auto max-w-2xl font-light text-gray-300 s25:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            Brands that believe in our creative vision
          </motion.p>
        </div>

        {/* Stats - Area Merah */}
        <motion.div
          className="mx-auto mb-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 md:mb-16 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onViewportEnter={() => setStatsInView(true)}
          onViewportLeave={() => setStatsInView(false)}
          viewport={{ once: false, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="mb-2 md:mb-3 flex justify-center">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-2">
                <CounterComponent
                  targetNumber={stat.number}
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                  inView={statsInView}
                />
              </div>
              <div className="text-xs md:text-sm text-gray-300 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <img
          src={group}
          className="w-full md:h-72 px-2 sm:pt-5 lg:pt-0 object-contain"
          alt=""
        />
      </div>
    </section>
  );
}
