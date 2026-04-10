import React, { useRef, useState, useEffect, type ReactNode } from "react";
import { Box } from "@mui/material";

type Props = {
  index: number;
  children: ReactNode;
};

export const TiltCardContainer = ({ index, children }: Props) => {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y - height / 2) / height) * -25;
    const rotateY = ((x - width / 2) / width) * 25;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
  };

  const handleMouseLeave = () =>
    setTransform("rotateX(0deg) rotateY(0deg) scale(1)");

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: { xs: "calc(50% - 8px)", sm: 200, lg: 220 },
        minWidth: { xs: 150, sm: "auto" },
        maxWidth: 220,
        height: { xs: 230, sm: 280, lg: 320 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <Box
        sx={{
          height: "100%",
          transform,
          transition: "transform 0.2s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
