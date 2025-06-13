export default function InnovationQualitySection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-4">
            Innovation & Qualité
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full" />
        </div>
        
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
                  <div className="text-4xl mb-2">🔬</div>
                  <p className="text-sm text-gray-600">Recherche</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2">⚡</div>
                  <p className="text-sm text-gray-600">Innovation</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-2">✨</div>
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