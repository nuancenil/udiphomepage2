import React from 'react';

interface GeometricPatternProps {
  seed: string;
  className?: string;
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({ seed, className = "" }) => {
  // Simple pseudo-random function from seed string
  const getNumber = (str: string, max: number) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % max);
  };

  // Brand Guide Palette for generation
  const colors = [
    '#B6C6CF', // Brand Primary (Blue)
    '#94A3B8', // Brand Secondary (Slate)
    '#A09D95', // Warm Grey
    '#EEEFEF', // Light Grey
  ];

  const c1 = colors[getNumber(seed + 'c1', colors.length)];
  const c2 = colors[getNumber(seed + 'c2', colors.length)];
  
  // Generate random positions for organic blobs
  const cx1 = getNumber(seed + 'x1', 100);
  const cy1 = getNumber(seed + 'y1', 100);
  const r1 = 30 + getNumber(seed + 'r1', 40);

  const cx2 = getNumber(seed + 'x2', 100);
  const cy2 = getNumber(seed + 'y2', 100);
  const r2 = 20 + getNumber(seed + 'r2', 50);

  return (
    <div className={`relative overflow-hidden bg-[#F8FAFC] ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect width="100" height="100" fill="#FFFFFF" />
        
        {/* Soft Organic Gradients */}
        <defs>
          <radialGradient id={`grad1-${seed}`} cx={`${cx1}%`} cy={`${cy1}%`} r={`${r1}%`} fx={`${cx1}%`} fy={`${cy1}%`}>
            <stop offset="0%" stopColor={c1} stopOpacity="0.4" />
            <stop offset="100%" stopColor={c1} stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id={`grad2-${seed}`} cx={`${cx2}%`} cy={`${cy2}%`} r={`${r2}%`} fx={`${cx2}%`} fy={`${cy2}%`}>
            <stop offset="0%" stopColor={c2} stopOpacity="0.5" />
            <stop offset="100%" stopColor={c2} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Organic Blobs */}
        <circle cx={`${cx1}%`} cy={`${cy1}%`} r={`${r1}%`} fill={`url(#grad1-${seed})`} />
        <circle cx={`${cx2}%`} cy={`${cy2}%`} r={`${r2}%`} fill={`url(#grad2-${seed})`} />
        
        {/* Subtle noise texture overlay if possible, or just subtle lines */}
        <path d={`M0 ${100-cy1} Q ${50} ${cy2} 100 ${100-cy1}`} fill="none" stroke={c1} strokeWidth="0.2" opacity="0.3" />
        <path d={`M${cx1} 0 Q ${cx2} 50 ${cx1} 100`} fill="none" stroke={c2} strokeWidth="0.2" opacity="0.3" />

      </svg>
    </div>
  );
};

export default GeometricPattern;