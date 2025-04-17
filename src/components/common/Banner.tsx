
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  bgImage,
  ctaText,
  ctaLink,
  overlay = true,
  size = 'md',
  align = 'center',
  className = '',
  children
}) => {
  // Hauteur du banner en fonction de la taille
  const sizeClasses = {
    sm: 'py-12',
    md: 'py-20',
    lg: 'py-32',
  };

  // Alignement du texte
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  const defaultBg = 'bg-crec-darkblue';

  return (
    <div 
      className={`relative ${sizeClasses[size]} ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: bgImage ? undefined : defaultBg
      }}
    >
      {/* Overlay */}
      {overlay && bgImage && (
        <div className="absolute inset-0 bg-crec-darkblue bg-opacity-70"></div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl ${alignClasses[align]}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 mb-6">
              {subtitle}
            </p>
          )}
          {ctaText && ctaLink && (
            <Button asChild variant="default" className="bg-crec-gold hover:bg-crec-lightgold text-white">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
