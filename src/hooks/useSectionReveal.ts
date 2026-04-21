"use client";

import type { RefObject } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isGsapRegistered = false;

const registerGsap = () => {
  if (!isGsapRegistered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    isGsapRegistered = true;
  }
};

export const useSectionReveal = (
  scopeRef: RefObject<HTMLElement | null>
): void => {
  useLayoutEffect(() => {
    if (!scopeRef.current) {
      return undefined;
    }

    registerGsap();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from("[data-reveal-line]", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, scopeRef);

    return () => {
      context.revert();
    };
  }, [scopeRef]);
};
