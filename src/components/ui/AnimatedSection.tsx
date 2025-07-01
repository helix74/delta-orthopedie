"use client";

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in' | 'bounce-in';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
  });

  const getAnimationClass = () => {
    if (!isIntersecting) return '';
    
    const baseClass = `animate-${animation.replace('-', '-')}`;
    return delay > 0 ? `${baseClass} animate-stagger-${Math.min(Math.ceil(delay * 10), 5)}` : baseClass;
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{ animationDelay: delay > 0 ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
} 