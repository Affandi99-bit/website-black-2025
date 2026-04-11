import React, { useState, useLayoutEffect } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
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
  );

  return (
    <div className="relative flex h-[100dvh] min-h-0 w-full flex-col overflow-hidden bg-primary text-primary">
      <Header onNavigate={navigateToChapter} currentChapter={currentChapter} />

      <div
        ref={setScrollRoot}
        className="site-scroll-root min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-y-contain bg-primary"
        style={{
          paddingTop: "var(--site-header-h, 88px)",
          scrollPaddingTop: "var(--site-header-h, 88px)",
        }}
      >
        {chapters.map((Chapter, index) => (
          <div key={index} id={`section-${index}`} className="w-full max-w-[100vw]">
            {index === 0 ? (
              <Chapter onNavigateToPortfolio={() => navigateToChapter(2)} />
            ) : (
              <Chapter />
            )}
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}
