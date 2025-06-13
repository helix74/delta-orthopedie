import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-24">
      <div className="absolute inset-0 bg-black/20" /> {/* Overlay pour le contraste */}
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8">
            Delta Orthopédie — Votre partenaire en mobilité et autonomie
          </h1>
          <p className="text-lg md:text-xl font-sans text-white/90 mb-12">
            Depuis plus de 12 ans, notre centre d'appareillage conçoit, fabrique et adapte des dispositifs orthopédiques sur mesure pour améliorer la qualité de vie des personnes amputées ou en situation de handicap. Nous mettons au cœur de notre mission l'innovation, le confort et la dignité de chaque patient.
          </p>
          <ul className="space-y-4 mb-12 text-left bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            {[
              'Orthoprothésistes diplômés et certifiés',
              'Atelier de fabrication sur place',
              'Prise en charge personnalisée',
              'Collaboration avec des hôpitaux, cliniques et caisses sociales'
            ].map((item, index) => (
              <li key={index} className="flex items-center text-white">
                <svg className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <Link 
            href="#services"
            className="inline-block bg-secondary-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-secondary-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Découvrir nos solutions
          </Link>
        </div>
      </div>
    </section>
  );
} 