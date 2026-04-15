import React from "react";
import { motion } from "framer-motion";
type ServiceItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  iconGradient: string;
  hoverGradient: string;
  cardColor: string;
  videoBg?: string;
};

type ServicesProps = {
  service: ServiceItem;
};

const Services = ({ service }: ServicesProps) => {
  return (
    <motion.div
      key={service.name}
      className={`${service.cardColor} ${service.hoverGradient} relative overflow-hidden border border-slate-700/50 rounded-lg md:rounded-xl p-3 md:p-6 text-center group cursor-pointer hover:border-slate-600 transition-all duration-300 aspect-square flex flex-col justify-center`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: false }}
    >
      {service.videoBg ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
          src={service.videoBg}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />

      <div className="relative mb-2 flex justify-center md:mb-6">
        <div
          className={`w-10 h-10 md:w-16 md:h-16 ${service.iconGradient} rounded-lg md:rounded-xl flex items-center justify-center`}
        >
          <service.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
        </div>
      </div>
      <h3 className="relative mb-1 text-sm font-bold leading-tight text-white md:mb-3 md:text-xl">
        {service.name}
      </h3>
      <p className="relative text-xs leading-relaxed text-gray-300 md:text-sm">
        {service.description}
      </p>
    </motion.div>
  );
};

export default Services;
