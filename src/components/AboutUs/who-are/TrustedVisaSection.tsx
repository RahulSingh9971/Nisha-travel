import { useState, useEffect, useRef } from "react";

export const useScrollCounter = (target: number, duration: number = 2500) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animateCount = () => {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(percentage * target));

        if (percentage < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      animationFrameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
        } else {
          setCount(0);
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return { count, ref };
};
