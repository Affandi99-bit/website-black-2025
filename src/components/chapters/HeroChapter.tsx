import React from "react";
import { motion } from "framer-motion";

interface HeroChapterProps {
  onNavigateToPortfolio?: () => void;
}

export function HeroChapter({ onNavigateToPortfolio }: HeroChapterProps) {
  return (
    <motion.section
      className="relative flex h-screen w-full items-center justify-center bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mobile-container max-w-4xl px-4 text-center s25:px-6 md:px-8">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        >
          <h1 className="mobile-text-2xl s25:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 s25:mb-8 leading-tight short-screen-title">
            <span className="block text-white uppercase">
              Craft Your Story
              <span className="block">with Visual Impact</span>
            </span>
            <span className="block animate-gradient-blue-purple font-bold uppercase">
              BlackStudio.ID
            </span>
          </h1>

          <motion.p
            className="mobile-text-base text-center w-full px-5 s25:text-lg text-gray-300 max-w-2xl mx-auto mb-8 s25:mb-12 leading-relaxed font-light short-screen-text short-screen-spacing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            A creative hub based in Batu City, East Java. specializing in video
            production, motion graphics, photography, and design. We transform
            imaginative ideas into stunning reality
          </motion.p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <motion.a
              className="inline-flex min-h-11 w-full min-w-[10rem] items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-pink-600 sm:w-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/+628113577793"
              target="_blank"
              rel="noreferrer"
            >
              Contact us
            </motion.a>
            <motion.button
              type="button"
              className="inline-flex min-h-11 w-full min-w-[10rem] items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigateToPortfolio?.()}
            >
              View portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
