import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let registered = false;

export function registerScrollToPlugin() {
  if (registered) return;
  gsap.registerPlugin(ScrollToPlugin);
  registered = true;
}

/** Fine-tune landing position when the scroll root uses padding-top for the fixed header */
const SCROLL_TO_NUDGE_PX = 6;

export function setSiteHeaderHeightVar(): void {
  const header = document.getElementById("site-header");
  const h = header ? Math.round(header.getBoundingClientRect().height) : 80;
  document.documentElement.style.setProperty("--site-header-h", `${h}px`);
}

export function scrollContainerToElement(
  scrollRoot: HTMLElement,
  target: HTMLElement,
  opts?: { duration?: number; onComplete?: () => void },
) {
  registerScrollToPlugin();
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const duration = reduceMotion ? 0.01 : (opts?.duration ?? 1.15);

  gsap.killTweensOf(scrollRoot);

  return gsap.to(scrollRoot, {
    duration,
    ease: reduceMotion ? "none" : "power3.inOut",
    scrollTo: {
      y: target,
      offsetY: SCROLL_TO_NUDGE_PX,
      autoKill: true,
    },
    overwrite: "auto",
    onComplete: opts?.onComplete,
  });
}
