import React from "react";
import { motion } from "framer-motion";
import { services } from "@/constant";
import Services from "../Services";

export function ServicesChapter() {
  return (
    <section className="relative flex min-h-[100dvh] w-full items-center justify-center bg-gradient-to-b from-slate-800 via-blue-950/30 to-slate-700 py-10 sm:py-14 md:py-16">
      <div className=" w-full max-w-7xl px-4 s25:px-6 md:px-8">
        <div className="text-center mb-12 short-screen-header">
          <motion.h2
            className="mobile-text-xl s25:text-2xl md:text-4xl lg:text-6xl font-bold mb-3 s25:mb-4 md:mb-6 leading-tight px-2 short-screen-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <span className="block text-white">
              A FULL-SERVICE CREATIVE STUDIO
              <span className="block">DELIVERING IMPACTFUL VISUALS</span>
            </span>
            <span className="block animate-gradient-blue-purple font-bold">
              FROM CONCEPT TO FINAL PRODUCTION
            </span>
          </motion.h2>

          <motion.p
            className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 font-light px-4 short-screen-text short-screen-spacing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            Because we're not using everyone else's approach.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 short-screen-services">
          {services.map((service, index) => (
            <Services service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
