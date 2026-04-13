import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import type Lenis from "lenis";
import { Header } from "./Header";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import { HeroChapter } from "./chapters/HeroChapter";
import { ServicesChapter } from "./chapters/ServicesChapter";
import { PortfolioChapter } from "./chapters/PortfolioChapter";
import { ClientsChapter } from "./chapters/ClientsChapter";
import { AboutChapter } from "./chapters/AboutChapter";
import { ContactChapter } from "./chapters/ContactChapter";
import { useNavigation } from "../hooks/use-navigation";
import { setSiteHeaderHeightVar } from "../lib/gsap-scroll";

const chapters = [
  HeroChapter,
  ServicesChapter,
  PortfolioChapter,
  ClientsChapter,
  AboutChapter,
  ContactChapter,
];

export function InfiniteCanvas() {
  const [scrollRoot, setScrollRoot] = useState<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const getLenis = useCallback(() => lenisRef.current, []);
  const handleLenis = useCallback((instance: Lenis | null) => {
    lenisRef.current = instance;
  }, []);

  useLayoutEffect(() => {
    const sync = () => setSiteHeaderHeightVar();
    sync();
    window.addEventListener("resize", sync);
    const header = document.getElementById("site-header");
    const ro = header ? new ResizeObserver(sync) : null;
    if (header && ro) ro.observe(header);
    return () => {
      window.removeEventListener("resize", sync);
      ro?.disconnect();
    };
  }, []);

  const { currentChapter, navigateToChapter } = useNavigation(
    chapters.length,
    scrollRoot,
    getLenis,
  );

  return (
    <div className="relative flex h-[100dvh] min-h-0 w-full flex-col bg-primary text-primary">
      <Header onNavigate={navigateToChapter} currentChapter={currentChapter} />
      <SmoothScroll
        scrollRootRef={setScrollRoot}
        onLenis={handleLenis}
        className="site-scroll-root min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-y-contain bg-primary"
        style={{
          paddingTop: "var(--site-header-h, 88px)",
          scrollPaddingTop: "var(--site-header-h, 88px)",
        }}
      >
        {chapters.map((Chapter, index) => (
          <div
            key={index}
            id={`section-${index}`}
            className="w-full max-w-[100vw]"
          >
            {index === 0 ? (
              <Chapter onNavigateToPortfolio={() => navigateToChapter(2)} />
            ) : (
              <Chapter />
            )}
          </div>
        ))}
        <Footer />
      </SmoothScroll>
    </div>
  );
}
