import { useState, useEffect, useCallback, useRef } from "react";
import type Lenis from "lenis";
import { scrollContainerToElement } from "../lib/gsap-scroll";

function getActiveSectionIndex(
  scrollRoot: HTMLElement | null,
  totalChapters: number,
): number {
  if (!scrollRoot) return 0;
  const rootRect = scrollRoot.getBoundingClientRect();
  const midpoint = rootRect.top + rootRect.height * 0.35;
  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < totalChapters; i++) {
    const el = document.getElementById(`section-${i}`);
    if (!el) continue;
    const r = el.getBoundingClientRect();
    const center = r.top + r.height / 2;
    const d = Math.abs(center - midpoint);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  }
  return best;
}

export function useNavigation(
  totalChapters: number,
  scrollRoot: HTMLElement | null,
  getLenis?: () => Lenis | null,
) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const scrollRootRef = useRef(scrollRoot);
  scrollRootRef.current = scrollRoot;
  const getLenisRef = useRef(getLenis);
  getLenisRef.current = getLenis;

  const navigateToChapter = useCallback(
    (chapterIndex: number) => {
      if (chapterIndex < 0 || chapterIndex >= totalChapters) return;

      const run = () => {
        const root = scrollRootRef.current;
        const el = document.getElementById(`section-${chapterIndex}`);
        if (!root || !el) return;
        scrollContainerToElement(root, el, {
          lenis: getLenisRef.current?.() ?? null,
        });
      };

      if (getLenisRef.current?.()) {
        run();
        return;
      }
      requestAnimationFrame(() => {
        if (getLenisRef.current?.()) {
          run();
          return;
        }
        requestAnimationFrame(run);
      });
    },
    [totalChapters],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      e.preventDefault();
      const active = getActiveSectionIndex(scrollRootRef.current, totalChapters);
      if (e.key === "ArrowUp") {
        navigateToChapter(active - 1);
      } else {
        navigateToChapter(active + 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigateToChapter, totalChapters]);

  useEffect(() => {
    if (!scrollRoot) return;

    const sections = Array.from({ length: totalChapters }, (_, i) =>
      document.getElementById(`section-${i}`),
    ).filter((n): n is HTMLElement => n !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id;
        const m = id?.match(/^section-(\d+)$/);
        if (m) setCurrentChapter(Number(m[1]));
      },
      {
        root: scrollRoot,
        threshold: [0.12, 0.35, 0.55, 0.75],
        rootMargin: "-28% 0px -28% 0px",
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [scrollRoot, totalChapters]);

  return {
    currentChapter,
    navigateToChapter,
  };
}
