import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-700 font-sans">
              © {new Date().getFullYear()} Delta Orthopédie. Tous droits réservés.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center md:w-1/3">
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <span>Designed by</span>
              <img src="/images/logo/foxify_logo.svg" alt="Foxify Logo" width={100} height={100} style={{ marginLeft: 8, marginTop: 2 }} />
            </div>
          </div>
          <div className="flex items-center md:justify-end md:w-1/3">
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