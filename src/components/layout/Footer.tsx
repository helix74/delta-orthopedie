import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-700 font-sans">
              © {new Date().getFullYear()} Delta Orthopédie. Tous droits réservés.
            </p>
          </div>
          <div className="flex items-center">
            <Link 
              href="https://deltamedplus.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-secondary-600 hover:text-secondary-700 hover:underline transition-colors font-sans"
            >
              Partenaire : Delta Medical Plus
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 