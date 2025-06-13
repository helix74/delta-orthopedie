interface ContactInfoProps {
  city: string;
  address: string;
  phone: string;
  whatsapp: string[];
  email: string;
}

function ContactInfo({ city, address, phone, whatsapp, email }: ContactInfoProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-heading font-semibold text-primary-600 mb-6">{city}</h3>
      <div className="space-y-6">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-secondary-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-600">{address}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 text-secondary-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href={`tel:${phone}`} className="text-gray-600 hover:text-primary-600 transition-colors">{phone}</a>
        </div>
        {whatsapp.map((number, index) => (
          <div key={index} className="flex items-center">
            <svg className="w-6 h-6 text-secondary-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <a href={`https://wa.me/${number}`} className="text-gray-600 hover:text-primary-600 transition-colors">
              WhatsApp {index + 1}: {number}
            </a>
          </div>
        ))}
        <div className="flex items-center">
          <svg className="w-6 h-6 text-secondary-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href={`mailto:${email}`} className="text-gray-600 hover:text-primary-600 transition-colors">{email}</a>
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const contactInfo = {
    tunis: {
      city: 'Tunis',
      address: 'Rue du Lac de Constance, Les Berges du Lac, 1053 Tunis',
      phone: '+216 71 964 964',
      whatsapp: ['+216 98 364 964', '+216 98 364 965'],
      email: 'contact@deltaorthopedie.tn'
    },
    sousse: {
      city: 'Sousse',
      address: 'Rue de la Médina, 4000 Sousse',
      phone: '+216 73 227 227',
      whatsapp: ['+216 98 364 966'],
      email: 'sousse@deltaorthopedie.tn'
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-4">
            Contactez-nous
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ContactInfo {...contactInfo.tunis} />
          <ContactInfo {...contactInfo.sousse} />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-heading font-semibold text-primary-600 mb-6">Horaires d'ouverture</h3>
          <div className="space-y-4 text-gray-600 font-sans">
            <p className="flex items-center justify-center">
              <svg className="w-6 h-6 text-secondary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lundi à Vendredi — 8h00 à 17h00
            </p>
            <p className="flex items-center justify-center">
              <svg className="w-6 h-6 text-secondary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Samedi — 8h00 à 13h00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 