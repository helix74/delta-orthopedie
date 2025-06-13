export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-4">
            Notre expertise - Une équipe pluridisciplinaire à votre écoute
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full" />
        </div>
        
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
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg aspect-[3/4] flex items-center justify-center p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary-600 text-4xl">👨‍⚕️</span>
                  </div>
                  <span className="text-primary-600 font-heading font-semibold">M. Imed Djebbi</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg aspect-[3/4] flex items-center justify-center p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary-600 text-4xl">👩‍⚕️</span>
                  </div>
                  <span className="text-primary-600 font-heading font-semibold">Mme Cherifa Soltani</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 