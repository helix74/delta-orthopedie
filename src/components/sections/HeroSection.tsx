import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" /> {/* Overlay pour le contraste */}
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/8 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="slide-up" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8">
              Delta Orthopédie — Votre partenaire en mobilité et autonomie
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={0.4}>
            <p className="text-lg md:text-xl font-sans text-white/90 mb-12">
              Depuis plus de 12 ans, notre centre d'appareillage conçoit, fabrique et adapte des dispositifs orthopédiques sur mesure pour améliorer la qualité de vie des personnes amputées ou en situation de handicap. Nous mettons au cœur de notre mission l'innovation, le confort et la dignité de chaque patient.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.6}>
            <ul className="space-y-4 mb-12 text-left bg-white/10 backdrop-blur-sm p-6 rounded-lg hover-lift">
              {[
                'Orthoprothésistes diplômés et certifiés',
                'Atelier de fabrication sur place',
                'Prise en charge personnalisée',
                'Collaboration avec des hôpitaux, cliniques et caisses sociales'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white animate-slide-left" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                  <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="bounce-in" delay={1.2}>
            <Button href="#services" variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-animate">
              Découvrir nos solutions
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 