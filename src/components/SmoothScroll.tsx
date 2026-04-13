import {
  useEffect,
  useRef,
  type CSSProperties,
  type Ref,
  type MutableRefObject,
} from "react";
import Lenis from "lenis";

function assignRef<T>(ref: Ref<T> | undefined, value: T) {
  if (!ref) return;
  if (typeof ref === "function") (ref as (instance: T | null) => void)(value);
  else (ref as MutableRefObject<T | null>).current = value;
}

type SmoothScrollProps = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  /** The element that actually scrolls (overflow auto); exposed for chapter observers / navigation. */
  scrollRootRef?: Ref<HTMLDivElement | null>;
  onLenis?: (lenis: Lenis | null) => void;
};

export default function SmoothScroll({
  children,
  className,
  style,
  scrollRootRef,
  onLenis,
}: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const onLenisRef = useRef(onLenis);
  onLenisRef.current = onLenis;

  const setWrapperRef = (el: HTMLDivElement | null) => {
    wrapperRef.current = el;
    assignRef(scrollRootRef, el);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      eventsTarget: wrapper,
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      autoRaf: true,
    });

    onLenisRef.current?.(lenis);

    return () => {
      lenis.destroy();
      onLenisRef.current?.(null);
    };
  }, []);

  return (
    <div ref={setWrapperRef} className={className} style={style}>
      <div ref={contentRef} className="min-h-0 w-full">
        {children}
      </div>
    </div>
  );
}
