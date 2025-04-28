
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  linkText?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
  linkText = 'En savoir plus',
  className = '',
  children
}) => {
  const CardContent = () => (
    <div className={`bg-white border border-crec-gold rounded-xl shadow-lg hover:shadow-4xl transition-shadow duration-300 hover:-translate-y-1 transform overflow-hidden h-full ${className}`}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-crec-darkblue mb-3">{title}</h3>
        {description && (
          <p className="text-crec-darkgray mb-4">{description}</p>
        )}
        {children}
        {link && (
          <div className="mt-4 pt-2">
            <Link 
              to={link}
              className="text-crec-blue font-medium hover:text-crec-gold transition flex items-center"
            >
              {linkText}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block h-full">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default Card;
