import React from 'react';
import OptimizedImage from './OptimizedImage';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ icon, title, description, image, imageAlt, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center ${className}`}>
      {image && (
        <div className="mb-4 w-full">
          <OptimizedImage
            src={image}
            alt={imageAlt || title}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      {icon && <div className="mb-4 text-3xl text-primary-600">{icon}</div>}
      <h3 className="text-lg font-heading font-semibold text-primary-600 mb-2">{title}</h3>
      {description && <p className="text-gray-600 font-sans mb-2">{description}</p>}
      {children}
    </div>
  );
} 