import React from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  onNavigate: (chapterIndex: number) => void;
  currentChapter: number;
}

export function Header({ onNavigate, currentChapter }: HeaderProps) {
  const navItems = [
    { name: "Home", index: 0 },
    { name: "Services", index: 1 },
    { name: "Portfolio", index: 2 },
    { name: "Clients", index: 3 },
    { name: "About", index: 4 },
    { name: "Contact", index: 5 },
  ];

  const handleNavClick = (chapterIndex: number) => {
    onNavigate(chapterIndex);
  };

  const navButtonClass = (isActive: boolean, chapterIndex: number) => {
    let activeClasses = "";
    if (isActive) {
      switch (chapterIndex) {
        case 0:
          activeClasses = "animate-gradient-blue-cyan";
          break;
        case 1:
          activeClasses = "animate-gradient-orange-pink";
          break;
        case 2:
          activeClasses = "animate-gradient-cyan-green";
          break;
        case 3:
          activeClasses = "animate-gradient-purple-pink";
          break;
        case 4:
          activeClasses = "animate-gradient-yellow-orange";
          break;
        case 5:
          activeClasses = "animate-gradient-purple-pink";
          break;
        default:
          activeClasses = "text-white";
      }
    }
    return activeClasses;
  };

  const handleLogoClick = () => {
    onNavigate(0);
  };

  return (
    <motion.header
      id="site-header"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/40 px-3 py-2.5 backdrop-blur-md s25:px-4 sm:px-6 md:px-8 lg:px-14"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-2 s25:flex-row s25:items-center s25:justify-between">
        <button
          type="button"
          onClick={handleLogoClick}
          className="shrink-0 text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          aria-label="Home"
        >
          <img
            className="h-6 w-auto max-w-[8.5rem] object-contain s25:h-7 s25:max-w-[9.5rem] sm:h-10 sm:max-w-[11rem] md:h-8 md:max-w-[12rem] lg:max-w-[14rem]"
            src="/black.webp"
            alt="BlackStudio"
          />
        </button>

        <nav
          className="md:flex hidden w-full min-w-0 flex-1 justify-start gap-1.5 overflow-x-auto py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = currentChapter === item.index;
            const activeClasses = navButtonClass(isActive, item.index);
            return (
              <button
                type="button"
                key={item.name}
                onClick={() => handleNavClick(item.index)}
                aria-current={isActive ? "page" : undefined}
                className={`shrink-0 rounded-full px-2.5 py-1.5 text-[0.6875rem] font-medium leading-none transition-colors duration-300 s25:px-3 s25:text-xs md:text-sm ${
                  isActive ? activeClasses : "text-white/75 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        <nav
          className="hidden shrink-0 items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = currentChapter === item.index;
            const activeClasses = navButtonClass(isActive, item.index);
            return (
              <button
                type="button"
                key={item.name}
                onClick={() => handleNavClick(item.index)}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors duration-300 lg:text-[0.9375rem] ${
                  isActive ? activeClasses : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
