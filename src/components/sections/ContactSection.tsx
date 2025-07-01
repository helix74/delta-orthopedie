import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SectionHeader from '@/components/ui/SectionHeader';

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
          <FontAwesomeIcon icon={faMapMarkerAlt} className="!w-6 !h-6 text-secondary-500 mr-4 flex-shrink-0" size="lg" />
          <span className="text-gray-600">{address}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="!w-6 !h-6 text-secondary-500 mr-4 flex-shrink-0" size="lg" />
          <a href={`tel:${phone}`} className="text-gray-600 hover:text-primary-600 transition-colors">{phone}</a>
        </div>
        {whatsapp.map((number, index) => (
          <div key={index} className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="!w-6 !h-6 text-secondary-500 mr-4 flex-shrink-0" size="lg" />
            <a href={`https://wa.me/${number}`} className="text-gray-600 hover:text-primary-600 transition-colors">
              WhatsApp {index + 1}: {number}
            </a>
          </div>
        ))}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="!w-6 !h-6 text-secondary-500 mr-4 flex-shrink-0" size="lg" />
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
        <SectionHeader title="Contactez-nous" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ContactInfo {...contactInfo.tunis} />
          <ContactInfo {...contactInfo.sousse} />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-heading font-semibold text-primary-600 mb-6">Horaires d'ouverture</h3>
          <div className="space-y-4 text-gray-600 font-sans">
            <p className="flex items-center justify-center">
              <FontAwesomeIcon icon={faClock} className="!w-6 !h-6 text-secondary-500 mr-3" size="lg" />
              Lundi à Vendredi — 8h00 à 17h00
            </p>
            <p className="flex items-center justify-center">
              <FontAwesomeIcon icon={faClock} className="!w-6 !h-6 text-secondary-500 mr-3" size="lg" />
              Samedi — 8h00 à 13h00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 