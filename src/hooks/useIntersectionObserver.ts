import { useEffect, useState, RefObject } from "react";

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.25 },
  onIntersectionChange?: (isIntersecting: boolean) => void
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      onIntersectionChange?.(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options, onIntersectionChange]);

  return isIntersecting;
}
