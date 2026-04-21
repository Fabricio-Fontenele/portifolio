"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

type Star = {
  id: string;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
};

type Meteor = {
  id: string;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
};

const createStars = (): Star[] => {
  const density = Math.floor((window.innerWidth * window.innerHeight) / 9000);

  return Array.from({ length: density }).map((_, index) => ({
    id: `star-${index}`,
    size: Math.random() * 2.8 + 0.8,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.45 + 0.4,
    animationDuration: Math.random() * 3.5 + 2,
  }));
};

const createMeteors = (): Meteor[] => {
  return Array.from({ length: 3 }).map((_, index) => ({
    id: `meteor-${index}`,
    size: Math.random() * 1.1 + 0.6,
    x: Math.random() * 100,
    y: Math.random() * 30,
    delay: Math.random() * 18,
    animationDuration: Math.random() * 3 + 5.5,
  }));
};

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const updateSky = () => {
      setStars(createStars());
      setMeteors(createMeteors());
    };

    updateSky();

    window.addEventListener("resize", updateSky);
    return () => window.removeEventListener("resize", updateSky);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-85 transition-opacity duration-300">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          } as CSSProperties}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 56}px`,
            height: `${meteor.size * 1.35}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            opacity: 0.72,
          } as CSSProperties}
        />
      ))}
    </div>
  );
};
