"use client";
import { useEffect, useState } from "react";
import "./FloatingDots.css";

type Dot = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
};

export default function FloatingDots() {
  const numDots = 6;
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // Initialize dots
    const initialDots: Dot[] = Array.from({ length: numDots }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 3,
      opacity: Math.random() * 0.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.5, // horizontal speed - slow
      vy: (Math.random() - 0.5) * 0.5, // vertical speed - slow
    }));
    setDots(initialDots);

    let animationFrameId: number;

    const animate = () => {
      setDots(prevDots =>
        prevDots.map(dot => {
          let newX = dot.x + dot.vx;
          let newY = dot.y + dot.vy;

          // Wrap around screen edges
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;

          return { ...dot, x: newX, y: newY };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="dots-container">
      {dots.map((dot, idx) => (
        <div
          key={idx}
          className="dot"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            transform: `translate(${dot.x}px, ${dot.y}px)`,
          }}
        />
      ))}
    </div>
  );
}