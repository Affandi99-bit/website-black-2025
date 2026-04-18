import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import Card from "../Card";
import { portfolioItems } from "@/constant";

export function PortfolioChapter() {
  const [, setLocation] = useLocation();

  return (
    <section
      className="relative flex w-full flex-col items-center justify-center bg-gradient-to-b from-slate-700 via-cyan-950/25 to-slate-700 py-8 sm:py-12 md:py-16"
      data-section="portfolio"
    >
      <div className=" flex min-h-0 w-full max-w-7xl flex-1 flex-col px-4 s25:px-6 md:px-8">
        <div className="text-center mb-6 short-screen-header">
          <motion.h2
            className="mobile-text-3xl s25:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 s25:mb-4 leading-tight short-screen-title"
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
            className="mobile-text-base s25:text-base text-gray-300 max-w-2xl mx-auto mb-6 s25:mb-8 font-light short-screen-text short-screen-spacing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            A glimpse into the creative magic we create
          </motion.p>
        </div>

        <div className=" grid min-h-0 max-h-[min(58dvh,34rem)] flex-1 grid-cols-1 grid-rows-[auto] gap-3 overflow-y-auto overscroll-y-contain pr-0.5 xs:grid-cols-2 md:max-h-none md:grid-cols-3 md:gap-4 md:overflow-visible">
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
