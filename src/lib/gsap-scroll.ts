import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import type Lenis from "lenis";

let registered = false;

export function registerScrollToPlugin() {
  if (registered) return;
  gsap.registerPlugin(ScrollToPlugin);
  registered = true;
}

/** Fine-tune landing position when the scroll root uses padding-top for the fixed header */
const SCROLL_TO_NUDGE_PX = 6;

/** scrollTop that aligns `section` to the top of the visible scrollport (respects scroll-padding / scroll-margin). */
function scrollTopToAlignSection(
  scrollRoot: HTMLElement,
  section: HTMLElement,
  nudgePx: number,
): number {
  const rootStyle = getComputedStyle(scrollRoot);
  const padTop = Number.parseFloat(rootStyle.scrollPaddingTop);
  const secStyle = getComputedStyle(section);
  const marginTop = Number.parseFloat(secStyle.scrollMarginTop);
  const scrollPaddingTop = Number.isNaN(padTop) ? 0 : padTop;
  const scrollMarginTop = Number.isNaN(marginTop) ? 0 : marginTop;
  const rootRect = scrollRoot.getBoundingClientRect();
  const secRect = section.getBoundingClientRect();
  const delta = secRect.top - rootRect.top;
  const next =
    scrollRoot.scrollTop +
    delta -
    scrollPaddingTop -
    scrollMarginTop +
    nudgePx;
  const max = Math.max(
    0,
    scrollRoot.scrollHeight - scrollRoot.clientHeight,
  );
  return Math.max(0, Math.min(next, max));
}

export function setSiteHeaderHeightVar(): void {
  const header = document.getElementById("site-header");
  const h = header ? Math.round(header.getBoundingClientRect().height) : 80;
  document.documentElement.style.setProperty("--site-header-h", `${h}px`);
}

export function scrollContainerToElement(
  scrollRoot: HTMLElement,
  target: HTMLElement,
  opts?: {
    duration?: number;
    onComplete?: () => void;
    lenis?: Lenis | null;
  },
) {
  registerScrollToPlugin();
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const duration = reduceMotion ? 0.01 : (opts?.duration ?? 1.35);

  const lenis = opts?.lenis;
  if (lenis) {
    const y = scrollTopToAlignSection(
      scrollRoot,
      target,
      SCROLL_TO_NUDGE_PX,
    );
    lenis.scrollTo(y, {
      duration: reduceMotion ? 0 : duration,
      easing: reduceMotion ? undefined : (t) => 1 - Math.pow(1 - t, 4),
      immediate: reduceMotion,
      programmatic: true,
      force: true,
      onComplete: opts?.onComplete,
    });
    return;
  }

  gsap.killTweensOf(scrollRoot);

  gsap.to(scrollRoot, {
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
