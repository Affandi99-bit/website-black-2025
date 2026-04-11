import React, { useRef } from "react";
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

  const handleEnter = () => {
    const el = cardRef.current;
    if (!el) return;
    const overlay = el.querySelector(".overlay");
    const text = el.querySelector(".text");
    if (!overlay) return;

    gsap.to(el, {
      filter: "grayscale(0%)",
      duration: 0.4,
      ease: "linear",
    });

    gsap.to(overlay, {
      background: "rgba(0,0,0,0.6)",
      duration: 0.4,
    });

    if (text) {
      gsap.fromTo(
        text,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "linear" },
      );
    }
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    const overlay = el.querySelector(".overlay");
    const text = el.querySelector(".text");
    if (!overlay) return;

    gsap.to(el, {
      filter: "grayscale(100%)",
      duration: 0.4,
    });

    gsap.to(overlay, {
      background: "rgba(0,0,0,0.3)",
      duration: 0.4,
    });

    if (text) {
      gsap.to(text, {
        y: 40,
        opacity: 0,
        duration: 0.3,
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
      className={`relative h-[220px] xs:h-[240px] sm:h-[260px] md:h-[300px] overflow-hidden cursor-pointer ${className}`}
      style={{ filter: "grayscale(100%)" }}
    >
      <img
        src={img}
        alt={alt || title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      <div className="overlay absolute inset-0 bg-black/30 transition-all pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-5">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-white drop-shadow-sm md:text-base">
          {title}
        </h3>

        {desc ? (
          <p className="text mt-1.5 text-xs text-gray-200 opacity-0 md:text-sm">
            {desc}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
