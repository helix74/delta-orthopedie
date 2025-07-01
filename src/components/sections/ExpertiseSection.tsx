import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container">
        <SectionHeader title="Notre expertise - Une équipe pluridisciplinaire à votre écoute" />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-600 font-sans">
              <p className="leading-relaxed">
                Delta Orthopédie est dirigée par M. Imed Djebbi & Mme Cherifa Soltani, orthoprothésistes diplômés, certifiés ISPO Cat. II. Ils sont formés par des marques internationales comme Ottobock, experts en orthopédie et en gestion de projets médicaux.
              </p>
              <p className="leading-relaxed">
                Notre équipe maîtrise les technologies les plus récentes et suit une formation continue afin de garantir des appareillages toujours plus efficaces et confortables.
              </p>
            </div>

            {/* Placeholder pour les photos de l'équipe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                icon={<span className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto text-3xl">👨‍⚕️</span>}
                title="M. Imed Djebbi"
                className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-100"
              />
              <Card
                icon={<span className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto text-3xl">👩‍⚕️</span>}
                title="Mme Cherifa Soltani"
                className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 