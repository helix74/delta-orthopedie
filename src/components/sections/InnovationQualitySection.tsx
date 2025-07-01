import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faBolt, faStar } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '@/components/ui/SectionHeader';

export default function InnovationQualitySection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <SectionHeader title="Innovation & Qualité" />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
                Nous utilisons des matériaux haut de gamme (fibre de carbone, silicone médical, titane…) et collaborons avec des fournisseurs leaders à l'international via notre filiale Delta Med Plus. Notre atelier respecte les normes de fabrication rigoureuses pour assurer la sécurité et la durabilité des dispositifs livrés.
              </p>

              {/* Icônes illustratives */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-4xl mb-2"><FontAwesomeIcon icon={faMicroscope} size="lg" className="text-primary-600" /></div>
                  <p className="text-sm text-gray-600">Recherche</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2"><FontAwesomeIcon icon={faBolt} size="lg" className="text-primary-600" /></div>
                  <p className="text-sm text-gray-600">Innovation</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2"><FontAwesomeIcon icon={faStar} size="lg" className="text-primary-600" /></div>
                  <p className="text-sm text-gray-600">Qualité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 