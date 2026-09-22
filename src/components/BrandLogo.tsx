import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'terracotta';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = false,
}) => {
  const isDarkBg = variant === 'light';
  const textColor = isDarkBg ? 'text-white' : 'text-[#261E1A]';
  const strokeColor = variant === 'terracotta' ? '#C86D51' : isDarkBg ? '#FAF6F0' : '#C86D51';
  const taglineColor = isDarkBg ? 'text-[#FAF6F0]/70' : 'text-[#7E9584]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Curved wave symbol representing "tepi" - ruang jeda yang tenang */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#C86D51]/10 flex-shrink-0">
        <svg
          viewBox="0 0 40 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-5"
          aria-hidden="true"
        >
          <path
            d="M2 17C7 17 10 7 17 7C24 7 27 15 34 15C36.5 15 38 13.5 39 12"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M6 21C10 21 13 13 19 13C25 13 28 19 33 19"
            stroke="#DAA03D"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.75"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.22em] text-lg font-bold uppercase leading-none ${textColor}`}
        >
          CAFE TEPI
        </span>
        {showTagline && (
          <span className={`text-[10px] tracking-wider font-sans font-medium uppercase mt-0.5 ${taglineColor}`}>
            Ruang Jeda & Kopi
          </span>
        )}
      </div>
    </div>
  );
};
