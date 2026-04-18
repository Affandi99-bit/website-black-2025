import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import Card from "../Card";
import { portfolioItems } from "@/constant";

export function PortfolioChapter() {
  const [, setLocation] = useLocation();

  return (
    <section
      className="relative flex w-full flex-col items-center justify-center bg-gradient-to-b from-slate-700 via-cyan-950/25 to-slate-700 py-6 s25:py-8 sm:py-12 md:py-16"
      data-section="portfolio"
    >
      <div className="flex min-h-0 w-full max-w-7xl flex-1 flex-col px-3 s25:px-5 md:px-8">
        <div className="mb-6 text-center">
          <motion.h2
            className="mobile-text-3xl mb-3 font-bold leading-tight s25:mb-4 s25:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <span className="block text-white">OUR CREATIVE </span>
            <span className="animate-gradient-cyan-green font-bold">MAGIC</span>
          </motion.h2>
          <motion.p
            className="mobile-text-base mx-auto mb-5 max-w-2xl px-2 font-light text-gray-300 s25:mb-8 s25:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            A glimpse into the creative magic we create
          </motion.p>
        </div>

        <div className="grid min-h-0 grid-cols-1 grid-rows-[auto] gap-2.5 s25:grid-cols-2 md:grid-cols-3 md:gap-4">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.title}
              className="overflow-hidden rounded-md border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 hover:border-slate-600"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, margin: "-40px" }}
            >
              <Card
                title={item.title}
                desc={item.desc}
                img={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                alt={item.title}
                onClick={() => setLocation(`/page/${item.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
