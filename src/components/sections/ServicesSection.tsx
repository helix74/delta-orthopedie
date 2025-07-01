import AnimatedSection from '@/components/ui/AnimatedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingWithCane, faHandHoldingMedical, faStar, faBaby, faShoePrints, faPrint, faBone, faBandAid } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  return (
    <AnimatedSection 
      animation="scale-in" 
      delay={index * 0.1}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover-lift"
    >
      <div className="text-primary-500 text-3xl mb-6 animate-bounce-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-primary-600 mb-3">{title}</h3>
      <p className="text-gray-600 font-sans">{description}</p>
    </AnimatedSection>
  );
}

export default function ServicesSection() {
  const services = {
    protheses: [
      {
        title: 'Membres inférieurs',
        description: 'Prothèses fémorales, tibiales, désarticulations et solutions complètes pour les membres inférieurs.',
        icon: <FontAwesomeIcon icon={faPersonWalkingWithCane} size="lg" />
      },
      {
        title: 'Membres supérieurs',
        description: "Prothèses d'avant-bras, de bras et solutions myoélectriques avancées.",
        icon: <FontAwesomeIcon icon={faHandHoldingMedical} size="lg" />
      },
      {
        title: 'Prothèses esthétiques en silicone',
        description: 'Solutions esthétiques personnalisées en silicone médical de haute qualité.',
        icon: <FontAwesomeIcon icon={faStar} size="lg" />
      },
      {
        title: 'Prothèses pédiatriques',
        description: 'Solutions adaptées aux besoins spécifiques des enfants et adolescents.',
        icon: <FontAwesomeIcon icon={faBaby} size="lg" />
      }
    ],
    ortheses: [
      {
        title: 'Semelles orthopédiques',
        description: 'Semelles sur mesure pour le confort et le soutien optimal.',
        icon: <FontAwesomeIcon icon={faShoePrints} size="lg" />
      },
      {
        title: 'Semelles en 3D',
        description: 'Solutions innovantes utilisant la technologie 3D pour un ajustement parfait.',
        icon: <FontAwesomeIcon icon={faPrint} size="lg" />
      },
      {
        title: 'Orthèses LECKKO',
        description: "Gamme complète d'orthèses de la marque LECKKO.",
        icon: <FontAwesomeIcon icon={faBone} size="lg" />
      },
      {
        title: 'Attelles membres supérieurs et inférieurs',
        description: "Solutions de soutien et d'immobilisation pour tous les membres.",
        icon: <FontAwesomeIcon icon={faBandAid} size="lg" />
      },
      {
        title: 'Appareillage pédiatrique',
        description: 'Solutions spécialement conçues pour les besoins des enfants.',
        icon: <FontAwesomeIcon icon={faBaby} size="lg" />
      }
    ]
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container">
        <SectionHeader title="Nos services - Des solutions sur mesure adaptées à chaque besoin" />

        <div className="space-y-20">
          {/* Prothèses */}
          <AnimatedSection animation="slide-left" delay={0.2}>
            <h3 className="text-2xl font-heading font-semibold text-primary-600 mb-8">Prothèses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.protheses.map((service, index) => (
                <AnimatedSection
                  key={index}
                  animation="scale-in"
                  delay={index * 0.1}
                  className="hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover-lift"
                >
                  <Card
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    className="shadow-none p-8"
                  />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Orthèses */}
          <AnimatedSection animation="slide-right" delay={0.4}>
            <h3 className="text-2xl font-heading font-semibold text-primary-600 mb-8">Orthèses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.ortheses.map((service, index) => (
                <AnimatedSection
                  key={index}
                  animation="scale-in"
                  delay={index * 0.1}
                  className="hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover-lift"
                >
                  <Card
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    className="shadow-none p-8"
                  />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 