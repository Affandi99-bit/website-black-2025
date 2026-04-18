import React from "react";
import { motion } from "framer-motion";
import { services } from "@/constant";
import Services from "../Services";

export function ServicesChapter() {
  return (
    <section className="relative flex min-h-[100dvh] w-full items-center justify-center bg-gradient-to-b from-slate-800 via-blue-950/30 to-slate-700 py-10 sm:py-14 md:py-16">
      <div className=" w-full max-w-7xl px-4 s25:px-6 md:px-8">
        <div className="mb-12 text-center">
          <motion.h2
            className="mobile-text-xl mb-3 px-2 font-bold leading-tight s25:mb-4 s25:text-2xl md:mb-6 md:text-4xl lg:text-6xl"
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
            className="mx-auto mb-8 max-w-2xl px-4 text-sm font-light text-gray-300 md:mb-12 md:text-lg"
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
        <div className="grid grid-cols-1 gap-3 s25:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {services.map((service, index) => (
            <Services key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
