import React from 'react';
import { PebbleShape, BrandMark } from './BrandLogo';

// The signature thin orange arc seen on Page 1, 3, 11, 14
export const BrandCurveLine: React.FC<{ className?: string; flipped?: boolean }> = ({ className = "", flipped = false }) => {
  return (
    <svg 
      viewBox="0 0 1440 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <path 
        d={flipped 
          ? "M1440 800 C 1000 800, 400 600, 0 100" 
          : "M0 800 C 400 800, 1000 600, 1440 100"} 
        stroke="#D47854" // Brand Orange
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        className="opacity-80"
      />
    </svg>
  );
};


// B.04 輔助圖形 — the seed mark as a large, cropped, low-contrast background element.
// Brand guide: the seed may be freely cropped, scaled and rotated, and placed large
// and calm behind content. Never stretched, squashed or distorted (aspect is preserved).
export const SeedBackdrop: React.FC<{
  className?: string;
  color?: string;
  rotate?: number;
}> = ({ className = "", color = "rgba(255,255,255,0.045)", rotate = 0 }) => (
  <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
    <BrandMark
      className="w-full h-full"
      style={{ color, transform: `rotate(${rotate}deg)` }}
    />
  </div>
);

// A scientific/technical grid background
export const TechGrid: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`pointer-events-none absolute inset-0 w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-warm/10" />
      </pattern>
      <pattern id="grid" width="160" height="160" patternUnits="userSpaceOnUse">
        <rect width="160" height="160" fill="url(#smallGrid)" />
        <path d="M 160 0 L 0 0 0 160" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-warm/20" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

// The geometric cluster seen on Page 12/13 (Grey/Blue/Orange shapes)
export const BrandShapeCluster: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    {/* Grey Block */}
    <div className="absolute bottom-0 left-0 w-32 h-64 bg-brand-warm opacity-60 mix-blend-multiply clip-path-slant-left"></div>
    {/* Blue Pebble Crop */}
    <div className="absolute bottom-0 left-20 w-48 h-48 text-brand-primary opacity-80 mix-blend-multiply">
       <PebbleShape className="w-full h-full transform rotate-12" />
    </div>
    {/* Orange Accent Strip */}
    <div className="absolute bottom-0 left-[180px] w-4 h-32 bg-brand-orange"></div>
  </div>
);
