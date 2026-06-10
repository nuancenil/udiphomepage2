import React from 'react';

export type BrandTheme = 'light' | 'dark';

// PebbleShape: Organic blob shape for background decorations
export const PebbleShape = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 200 200" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`fill-current ${className}`} 
    style={style}
  >
    <path d="M42.7,-72.2C54.6,-66.1,63.1,-53.4,70.9,-40.8C78.7,-28.2,85.8,-15.7,83.9,-4.1C82,7.6,71.1,18.4,62.1,28.6C53.1,38.8,46,48.4,37.1,56.7C28.1,65,17.4,72,5.8,74C-5.8,75.9,-18.2,72.9,-30.2,66.5C-42.2,60.1,-53.8,50.3,-62.8,38.5C-71.8,26.7,-78.2,12.9,-77.8,-0.7C-77.4,-14.3,-70.2,-27.7,-60.2,-38.3C-50.2,-48.9,-37.4,-56.7,-24.8,-62.4C-12.2,-68.1,-1.2,-71.7,11.3,-74.8C23.8,-77.9,30.8,-78.3,42.7,-72.2Z" transform="translate(100 100)" />
  </svg>
);

// Brand Mark (Logo Icon)
// Now using the specific inline SVG paths provided by the user for the Eudaimonia logo.
// Used fill="currentColor" to allow color adaptation based on the parent's text color.
export const BrandMark = ({ className, style, theme = 'light' }: { className?: string, style?: React.CSSProperties, theme?: BrandTheme }) => {
  // We apply the text color class based on theme to the container or SVG directly if needed,
  // but usually the parent LogoHorizontal/Vertical handles the text color class, 
  // so 'currentColor' will pick it up.
  // Explicitly setting color just in case it's used standalone.
  const colorClass = theme === 'dark' ? 'text-brand-light' : 'text-brand-dark';

  return (
    <svg 
      viewBox="0 0 115.755 129.639" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${colorClass} ${className}`}
      style={style}
      fill="currentColor"
    >
       <g transform="translate(-502.141 -406.45)">
        <path 
          d="M 0,0 C 13.609,-11.295 40.599,0.265 56.52,17.348 H -12.194 C -9.559,9.111 -5.346,4.437 0,0" 
          transform="matrix(1.3333333,0,0,-1.3333333,524.1308,530.09747)" 
        />
        <path 
          d="m 0,0 v -75.385 l 4.299,-0.003 c -1.976,6.175 -3.065,14.352 -3.072,25.944 v 0.237 c 0.017,27.053 5.913,35.527 15.266,43.291 20.034,16.628 69.097,-16.261 69.097,-43.41 0,-8.707 -5.06,-17.997 -12.576,-26.062 l 13.802,0.003 V 0 Z" 
          transform="matrix(1.3333333,0,0,-1.3333333,502.13987,406.45)" 
        />
      </g>
    </svg>
  );
};

export interface LogoProps {
  lang: 'zh' | 'en';
  className?: string;
  theme?: BrandTheme; 
}

// A.04 Horizontal Lockup - Used in Navbar
export const LogoHorizontal = ({ lang, className = "", theme = "light" }: LogoProps) => {
  const textColor = theme === "dark" ? "text-brand-light" : "text-brand-dark";
  const subTextColor = theme === "dark" ? "text-brand-warm" : "text-brand-warm";
  
  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      {/* Icon */}
      <div className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0`}>
        <BrandMark className="w-full h-full" theme={theme} />
      </div>
      
      {/* Text */}
      <div className="flex flex-col justify-center">
        {lang === 'zh' ? (
          <div className="flex flex-col leading-none">
            <span className={`font-sans font-normal text-lg md:text-xl ${textColor} tracking-[0.2em]`}>
              寓待智權管理
            </span>
            <span className={`font-sans text-[0.5rem] ${subTextColor} tracking-[0.1em] uppercase mt-1`}>
              EUDAIMONIA IP
            </span>
          </div>
        ) : (
          <span className={`font-sans font-medium text-lg md:text-xl ${textColor} tracking-wide leading-none`}>
            Eudaimonia IP
          </span>
        )}
      </div>
    </div>
  );
};

// A.03 (English Vertical) & A.05 (Chinese Vertical) - Used in Footer
export const LogoVertical = ({ lang, className = "", theme = "dark" }: LogoProps) => {
  const textColor = theme === "dark" ? "text-brand-light" : "text-brand-dark";
  const subTextColor = theme === "dark" ? "text-brand-warm" : "text-brand-warm";
  
  return (
    <div className={`flex flex-col items-center md:items-start gap-6 ${className}`}>
      {/* Icon: Larger for vertical lockup */}
      <div className={`w-20 h-20`}>
        <BrandMark className="w-full h-full" theme={theme} />
      </div>

      <div className="flex flex-col items-center md:items-start">
        {lang === 'zh' ? (
          // Vertical layout for Chinese
          <div className={`${textColor} font-sans font-normal text-2xl leading-relaxed select-none`} 
               style={{ 
                 writingMode: 'vertical-rl', 
                 textOrientation: 'upright', 
                 letterSpacing: '0.4em' 
               }}>
             寓待智權管理
          </div>
        ) : (
          <span className={`font-sans font-medium text-2xl ${textColor} tracking-wide leading-tight`}>
            Eudaimonia IP
          </span>
        )}
      </div>
    </div>
  );
};

// Mobile Header Logo - Streamlined to be used in nav bars or menu headers
export const LogoMobileHeader = ({ lang, className = "", theme = "light" }: LogoProps) => {
   const textColor = theme === "dark" ? "text-brand-light" : "text-brand-dark";
   const subTextColor = theme === "dark" ? "text-brand-warm" : "text-brand-warm";
   
   return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`w-8 h-8 flex-shrink-0`}>
        <BrandMark className="w-full h-full" theme={theme} />
      </div>
      {lang === 'zh' ? (
         <div className="flex flex-col leading-none">
            <span className={`font-sans font-normal text-base ${textColor} tracking-[0.15em]`}>
               寓待智權管理
            </span>
            <span className={`font-sans text-[0.4rem] ${subTextColor} tracking-[0.1em] uppercase mt-0.5`}>
               EUDAIMONIA IP
            </span>
         </div>
      ) : (
         <span className={`font-sans font-medium text-base ${textColor} tracking-wide`}>
            Eudaimonia IP
         </span>
      )}
    </div>
   )
}