import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export interface CardProps {
  title: string;
  desc?: string;
  img: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
}

const Card = ({
  title,
  desc,
  img,
  alt,
  onClick,
  className = "",
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descWrapRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const wrap = descWrapRef.current;
    const d = descRef.current;
    if (!title) return;
    gsap.set(title, { y: 0 });
    if (wrap && d) {
      gsap.set(wrap, { height: 0, overflow: "hidden" });
      gsap.set(d, { autoAlpha: 0, y: 8 });
    }
  }, [desc]);

  const handleEnter = () => {
    const el = cardRef.current;
    const title = titleRef.current;
    const wrap = descWrapRef.current;
    const d = descRef.current;
    if (!el) return;
    const overlay = el.querySelector(".overlay");
    if (!overlay) return;

    gsap.killTweensOf([el, overlay, title, wrap, d].filter(Boolean));

    gsap.to(el, {
      filter: "grayscale(0%)",
      duration: 0.4,
      ease: "linear",
    });

    gsap.to(overlay, {
      background: "rgba(0,0,0,0.6)",
      duration: 0.4,
    });

    gsap.to(title, {
      y: wrap && d ? -8 : 0,
      duration: 0.45,
      ease: "power2.out",
    });

    if (wrap && d) {
      gsap.set(wrap, { height: "auto", overflow: "hidden" });
      const targetH = wrap.offsetHeight;
      gsap.set(wrap, { height: 0 });
      gsap.to(wrap, {
        height: targetH,
        duration: 0.45,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(wrap, { height: "auto" });
        },
      });
      gsap.to(d, {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
      });
    }
  };

  const handleLeave = () => {
    const el = cardRef.current;
    const title = titleRef.current;
    const wrap = descWrapRef.current;
    const d = descRef.current;
    if (!el) return;
    const overlay = el.querySelector(".overlay");
    if (!overlay) return;

    gsap.killTweensOf([el, overlay, title, wrap, d].filter(Boolean));

    gsap.to(el, {
      filter: "grayscale(100%)",
      duration: 0.4,
    });

    gsap.to(overlay, {
      background: "rgba(0,0,0,0.3)",
      duration: 0.4,
    });

    gsap.to(title, {
      y: 0,
      duration: 0.35,
      ease: "power2.in",
    });

    if (wrap && d) {
      const current = wrap.offsetHeight;
      gsap.set(wrap, { height: current, overflow: "hidden" });
      gsap.to(wrap, {
        height: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(d, {
        autoAlpha: 0,
        y: 8,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative aspect-[16/9] w-full cursor-pointer overflow-hidden ${className}`}
      style={{ filter: "grayscale(100%)" }}
    >
      <img
        src={img}
        alt={alt || title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      <div className="overlay pointer-events-none absolute inset-0 bg-black/30 transition-all" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 max-h-[50%] overflow-hidden p-4 md:p-5">
        <div className="pointer-events-none relative">
          <h3
            ref={titleRef}
            className="card-title relative line-clamp-2 text-sm font-semibold leading-snug text-white drop-shadow-sm will-change-transform md:text-base"
          >
            {title}
          </h3>
          {desc ? (
            <div ref={descWrapRef} className="overflow-hidden">
              <p
                ref={descRef}
                className="card-desc mt-1 line-clamp-4 text-xs text-gray-200 md:text-sm"
              >
                {desc}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
