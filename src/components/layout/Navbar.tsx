"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md animate-slide-down">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-heading font-bold text-primary-600 hover:text-primary-700 transition-all duration-300 hover-scale"
          >
            Delta Orthopédie
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Accueil' },
              { href: '#services', label: 'Nos Services' },
              { href: '#expertise', label: 'Notre Expertise' },
              { href: '#contact', label: 'Contact' }
            ].map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="font-sans text-gray-700 hover:text-secondary-600 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-secondary-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="!w-6 !h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {[
                { href: '/', label: 'Accueil' },
                { href: '#services', label: 'Nos Services' },
                { href: '#expertise', label: 'Notre Expertise' },
                { href: '#contact', label: 'Contact' }
              ].map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="font-sans text-gray-700 hover:text-secondary-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 