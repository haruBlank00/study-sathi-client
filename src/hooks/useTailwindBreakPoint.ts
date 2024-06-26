import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1400,
};

const getCurrentBreakpoint = (width: number) => {
  if (width >= breakpoints["2xl"]) return "2xl";
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  return "base";
};

export const useTailwindBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getCurrentBreakpoint(window.innerWidth),
  );

  const handleResize = () => {
    setBreakpoint(getCurrentBreakpoint(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};
