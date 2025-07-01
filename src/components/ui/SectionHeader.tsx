import React from 'react';

type SectionHeaderProps = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};

export default function SectionHeader({ title, className = '', children }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-4">{title}</h2>
      <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full" />
      {children}
    </div>
  );
} 