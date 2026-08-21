import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'monogram';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-9 md:h-11',
    md: 'h-12 md:h-16',
    lg: 'h-20 md:h-28',
  };

  return (
    <div className={`inline-flex items-center group ${className}`}>
      <img
        src="/assets/logo.png"
        alt="Arsh Dhiman Art - Luxury Live Wedding Paintings"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-sm shadow-md`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
