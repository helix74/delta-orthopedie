import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold text-primary-600 hover:text-primary-700 transition-colors">
            Delta Orthopédie
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-sans text-gray-700 hover:text-secondary-600 hover:underline transition-colors">
              Accueil
            </Link>
            <Link href="#services" className="font-sans text-gray-700 hover:text-secondary-600 hover:underline transition-colors">
              Nos Services
            </Link>
            <Link href="#expertise" className="font-sans text-gray-700 hover:text-secondary-600 hover:underline transition-colors">
              Notre Expertise
            </Link>
            <Link href="#contact" className="font-sans text-gray-700 hover:text-secondary-600 hover:underline transition-colors">
              Contact
            </Link>
          </div>
          {/* Mobile menu button - will be implemented later */}
          <button className="md:hidden text-gray-700 hover:text-secondary-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 