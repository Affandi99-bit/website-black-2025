import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Card from "../Card";

const portfolioItems = [
  {
    title: "PT MAKMUR BERKAH AMANDA",
    category: "Video Production | Company Profile",
    desc: "A corporate profile video crafted to strengthen brand credibility and communicate business values through clean visuals, structured storytelling, and a professional tone tailored for stakeholders and clients.",
    videoId: "lnMqEmce-wc",
  },
  {
    title: "ADMEDIKA",
    category: "Video Production | Company Profile",
    desc: "A modern company profile highlighting healthcare innovation and service excellence, designed to simplify complex offerings into an engaging and trustworthy visual narrative.",
    videoId: "4yzYw9hmZ9Y",
  },
  {
    title: "TUTORIAL QRIS TAP",
    category: "Video Production | Digital Ads",
    desc: "A fast-paced instructional ad that demonstrates QRIS Tap usage in a simple, intuitive flow—optimized for digital platforms to boost user adoption and understanding instantly.",
    videoId: "tdFq80-2hrs",
  },
  {
    title: "Book Cabin Call Center",
    category: "Video Production | Digital Ads",
    desc: "A conversion-focused digital ad showcasing call center solutions with clear messaging, dynamic visuals, and a strong call-to-action aimed at business efficiency.",
    videoId: "IWDNJrSd0Yo",
  },
  {
    title: "PT. Garuda Yamato Steel (GYS)",
    category: "Motion Graphic | Company Profile",
    desc: "A motion graphic-driven company profile transforming industrial processes into visually engaging content, making complex operations accessible and compelling.",
    videoId: "IAG684g8Tv0",
  },
  {
    title: "PARIVARTANA RASA",
    category: "Film Documentary",
    desc: "A documentary exploring transformation and human experience, captured through cinematic storytelling that emphasizes emotion, authenticity, and cultural depth.",
    videoId: "2dRLw5zRaTI",
  },
  {
    title: "BEI Pasar Modal",
    category: "Motion Graphic | Explainer Videos",
    desc: "An explainer video breaking down capital market concepts into clear, digestible visuals—designed to educate audiences while maintaining engagement and clarity.",
    videoId: "GNYa6ZOE6zk",
  },
  {
    title: "Kemakmuran Semesta",
    category: "Film Documentary",
    desc: "A visually rich documentary portraying social and environmental narratives, delivering a meaningful story through strong visuals and immersive pacing.",
    videoId: "PnHfKOg3fI0",
  },
];

export function PortfolioChapter() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  return (
    <motion.section
      className="relative flex w-full flex-col items-center justify-center bg-gradient-to-b from-slate-700 via-cyan-950/25 to-slate-700 py-8 sm:py-12 md:py-16"
      data-section="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
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

        <div className="short-screen-grid grid min-h-0 max-h-[min(58dvh,34rem)] flex-1 grid-cols-1 grid-rows-[auto] gap-3 overflow-y-auto overscroll-y-contain pr-0.5 xs:grid-cols-2 md:max-h-none md:grid-cols-3 md:gap-4 md:overflow-visible lg:grid-cols-4">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.title}
              className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 hover:border-slate-600"
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
                onClick={() => {
                  setSelectedVideo(item.videoId);
                  setSelectedTitle(item.title);
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Pop-up - Positioned within portfolio section area */}
      {selectedVideo && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          />
          <motion.div
            className="relative bg-slate-900 rounded-lg md:rounded-xl overflow-hidden border border-slate-700 w-[calc(100%-2rem)] md:w-[65%] max-w-[800px] aspect-video"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>

            {/* YouTube Embed */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
              title={selectedTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Video Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4 pointer-events-none">
              <h3 className="text-white font-bold text-sm md:text-lg">
                {selectedTitle}
              </h3>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
