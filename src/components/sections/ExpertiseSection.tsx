import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import OptimizedImage from '@/components/ui/OptimizedImage';

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

            {/* Team photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                icon={
                  <OptimizedImage
                    src="/images/team/imed-djebbi.jpg"
                    alt="M. Imed Djebbi - Orthoprothésiste diplômé et certifié ISPO Cat. II"
                    width={120}
                    height={120}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                    priority={true}
                  />
                }
                title="M. Imed Djebbi"
                description="Orthoprothésiste diplômé et certifié ISPO Cat. II"
                className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-100"
              />
              <Card
                icon={
                  <OptimizedImage
                    src="/images/team/cherifa-soltani.jpg"
                    alt="Mme Cherifa Soltani - Orthoprothésiste diplômée et certifiée ISPO Cat. II"
                    width={120}
                    height={120}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                    priority={true}
                  />
                }
                title="Mme Cherifa Soltani"
                description="Orthoprothésiste diplômée et certifiée ISPO Cat. II"
                className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 