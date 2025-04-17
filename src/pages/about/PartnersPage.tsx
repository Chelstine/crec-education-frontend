
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';

interface Partner {
  id: number;
  name: string;
  type: string;
  country: string;
  logo: string;
  description: string;
  website?: string;
}

const PartnersPage = () => {
  // Données factices pour les partenaires
  const academicPartners: Partner[] = [
    {
      id: 1,
      name: 'Université Catholique de Paris',
      type: 'Université',
      country: 'France',
      logo: 'https://via.placeholder.com/150',
      description: 'Partenariat historique pour des programmes conjoints en théologie et sciences religieuses.',
      website: 'https://www.example.com'
    },
    {
      id: 2,
      name: 'Pontifical Gregorian University',
      type: 'Université',
      country: 'Italie',
      logo: 'https://via.placeholder.com/150',
      description: 'Collaboration académique pour l\'échange d\'enseignants et d\'étudiants en philosophie et théologie.',
      website: 'https://www.example.com'
    },
    {
      id: 3,
      name: 'Catholic University of America',
      type: 'Université',
      country: 'États-Unis',
      logo: 'https://via.placeholder.com/150',
      description: 'Programme d\'échange en éthique sociale et leadership éducatif.',
      website: 'https://www.example.com'
    },
    {
      id: 4,
      name: 'Universidad Pontificia Comillas',
      type: 'Université',
      country: 'Espagne',
      logo: 'https://via.placeholder.com/150',
      description: 'Partenariat pour des projets de recherche en éducation intégrale et humanisme chrétien.',
      website: 'https://www.example.com'
    }
  ];

  const institutionalPartners: Partner[] = [
    {
      id: 5,
      name: 'Conférence des Évêques de France',
      type: 'Institution',
      country: 'France',
      logo: 'https://via.placeholder.com/150',
      description: 'Collaboration pour la formation des acteurs pastoraux et éducatifs.',
      website: 'https://www.example.com'
    },
    {
      id: 6,
      name: 'UNESCO',
      type: 'Organisation internationale',
      country: 'International',
      logo: 'https://via.placeholder.com/150',
      description: 'Partenariat pour des projets éducatifs dans les pays en développement.',
      website: 'https://www.example.com'
    },
    {
      id: 7,
      name: 'Centre National de la Recherche Scientifique',
      type: 'Institution de recherche',
      country: 'France',
      logo: 'https://via.placeholder.com/150',
      description: 'Collaboration sur des projets de recherche interdisciplinaires en sciences humaines.',
      website: 'https://www.example.com'
    }
  ];

  const corporatePartners: Partner[] = [
    {
      id: 8,
      name: 'Fondation Pierre Fabre',
      type: 'Fondation',
      country: 'France',
      logo: 'https://via.placeholder.com/150',
      description: 'Soutien financier pour des bourses d\'études et des projets de recherche.',
      website: 'https://www.example.com'
    },
    {
      id: 9,
      name: 'Crédit Mutuel',
      type: 'Institution financière',
      country: 'France',
      logo: 'https://via.placeholder.com/150',
      description: 'Partenaire pour les initiatives de développement et d\'innovation pédagogique.',
      website: 'https://www.example.com'
    },
    {
      id: 10,
      name: 'Éditions du Cerf',
      type: 'Maison d\'édition',
      country: 'France',
      logo: 'https://via.placeholder.com/150',
      description: 'Partenariat pour la publication et la diffusion des travaux de recherche du CREC.',
      website: 'https://www.example.com'
    }
  ];

  const PartnerGrid = ({ partners }: { partners: Partner[] }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {partners.map((partner) => (
        <div key={partner.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center h-24 mb-4">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="max-h-full max-w-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-crec-darkblue text-center mb-2">{partner.name}</h3>
          <div className="flex justify-center gap-3 text-sm text-crec-darkgray mb-3">
            <span>{partner.type}</span>
            <span>•</span>
            <span>{partner.country}</span>
          </div>
          <p className="text-crec-darkgray text-center mb-4">{partner.description}</p>
          {partner.website && (
            <div className="text-center">
              <a 
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crec-blue hover:text-crec-gold transition"
              >
                Visiter le site web
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <PageWrapper 
      title="Nos Partenaires" 
      description="Découvrez notre réseau de partenaires académiques, institutionnels et corporatifs"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-crec-darkgray">
          Le CREC a développé un réseau international de partenariats avec des universités, 
          des institutions et des organisations. Ces collaborations enrichissent notre offre 
          de formation, dynamisant nos projets de recherche et renforçant notre impact sociétal.
        </p>
      </div>

      {/* Partenaires académiques */}
      <section className="mb-16">
        <SectionTitle 
          title="Partenaires Académiques" 
          subtitle="Institutions d'enseignement supérieur collaborant avec le CREC"
        />
        <PartnerGrid partners={academicPartners} />
      </section>
      
      {/* Partenaires institutionnels */}
      <section className="mb-16">
        <SectionTitle 
          title="Partenaires Institutionnels" 
          subtitle="Organisations et institutions avec lesquelles nous collaborons"
        />
        <PartnerGrid partners={institutionalPartners} />
      </section>
      
      {/* Partenaires corporatifs */}
      <section className="mb-16">
        <SectionTitle 
          title="Partenaires Corporatifs" 
          subtitle="Entreprises et fondations qui soutiennent notre mission"
        />
        <PartnerGrid partners={corporatePartners} />
      </section>

      {/* Devenez partenaire */}
      <section className="bg-crec-darkblue text-white p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Devenez Partenaire du CREC
          </h3>
          <p className="mb-6">
            Nous sommes toujours ouverts à de nouvelles collaborations qui permettent d'enrichir notre mission 
            éducative et de recherche. Si vous représentez une institution académique, une organisation ou une 
            entreprise intéressée par un partenariat avec le CREC, nous serions ravis d'échanger avec vous.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-crec-gold text-white rounded-md hover:bg-crec-lightgold transition"
          >
            Nous contacter pour un partenariat
          </a>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PartnersPage;
