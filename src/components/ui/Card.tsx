import React from 'react';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ icon, title, description, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center ${className}`}>
      {icon && <div className="mb-4 text-3xl text-primary-600">{icon}</div>}
      <h3 className="text-lg font-heading font-semibold text-primary-600 mb-2">{title}</h3>
      {description && <p className="text-gray-600 font-sans mb-2">{description}</p>}
      {children}
    </div>
  );
} 