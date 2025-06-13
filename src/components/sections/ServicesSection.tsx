interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100">
      <div className="text-primary-500 text-3xl mb-6">{icon}</div>
      <h3 className="text-xl font-heading font-semibold text-primary-600 mb-3">{title}</h3>
      <p className="text-gray-600 font-sans">{description}</p>
    </div>
  );
}

export default function ServicesSection() {
  const services = {
    protheses: [
      {
        title: 'Membres inférieurs',
        description: 'Prothèses fémorales, tibiales, désarticulations et solutions complètes pour les membres inférieurs.',
        icon: '🦿'
      },
      {
        title: 'Membres supérieurs',
        description: 'Prothèses d\'avant-bras, de bras et solutions myoélectriques avancées.',
        icon: '🦾'
      },
      {
        title: 'Prothèses esthétiques en silicone',
        description: 'Solutions esthétiques personnalisées en silicone médical de haute qualité.',
        icon: '✨'
      },
      {
        title: 'Prothèses pédiatriques',
        description: 'Solutions adaptées aux besoins spécifiques des enfants et adolescents.',
        icon: '👶'
      }
    ],
    ortheses: [
      {
        title: 'Semelles orthopédiques',
        description: 'Semelles sur mesure pour le confort et le soutien optimal.',
        icon: '👞'
      },
      {
        title: 'Semelles en 3D',
        description: 'Solutions innovantes utilisant la technologie 3D pour un ajustement parfait.',
        icon: '🖨️'
      },
      {
        title: 'Orthèses LECKKO',
        description: 'Gamme complète d\'orthèses de la marque LECKKO.',
        icon: '🦴'
      },
      {
        title: 'Attelles membres supérieurs et inférieurs',
        description: 'Solutions de soutien et d\'immobilisation pour tous les membres.',
        icon: '🩹'
      },
      {
        title: 'Appareillage pédiatrique',
        description: 'Solutions spécialement conçues pour les besoins des enfants.',
        icon: '👶'
      }
    ]
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-4">
            Nos services - Des solutions sur mesure adaptées à chaque besoin
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-20">
          {/* Prothèses */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-primary-600 mb-8">Prothèses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.protheses.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Orthèses */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-primary-600 mb-8">Orthèses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.ortheses.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 