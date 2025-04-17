
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';

const FormationsPage = () => {
  // Données factices pour les types de formations
  const formationTypes = [
    {
      id: 1,
      title: 'Licences',
      description: 'Formations universitaires de premier cycle',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1',
      link: '/formations/programs'
    },
    {
      id: 2,
      title: 'Masters',
      description: 'Formations universitaires de second cycle',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      link: '/formations/programs'
    },
    {
      id: 3,
      title: 'Certificats',
      description: 'Formations courtes et spécialisées',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66',
      link: '/formations/programs'
    },
    {
      id: 4,
      title: 'Formation Continue',
      description: 'Modules adaptés aux professionnels en activité',
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca',
      link: '/formations/courses'
    }
  ];

  return (
    <PageWrapper 
      title="Nos Formations" 
      description="Découvrez l'ensemble de notre offre de formation"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12">
        <SectionTitle 
          title="Une éducation intégrale" 
          subtitle="Des parcours de formation qui allient excellence académique, développement personnel et engagement sociétal"
        />
        <p className="text-crec-darkgray">
          Le CREC propose un ensemble de formations universitaires et professionnelles fondées sur une approche 
          intégrale de l'éducation. Nos programmes conjuguent rigueur académique, ouverture au dialogue et 
          attention à la personne dans sa globalité.
        </p>
      </div>

      {/* Types de formations */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-crec-darkblue mb-8">Types de Formations</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formationTypes.map((formation) => (
            <Card
              key={formation.id}
              title={formation.title}
              description={formation.description}
              image={formation.image}
              link={formation.link}
            />
          ))}
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="bg-crec-offwhite p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold text-crec-darkblue mb-6 text-center">Explorer nos formations</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <a 
            href="/formations/programs" 
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-medium text-crec-darkblue mb-2">Programmes d'études</h3>
            <p className="text-crec-darkgray mb-4">Consultez nos programmes complets</p>
            <span className="text-crec-gold font-medium">Découvrir →</span>
          </a>
          
          <a 
            href="/formations/courses" 
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-medium text-crec-darkblue mb-2">Cours et modules</h3>
            <p className="text-crec-darkgray mb-4">Explorez notre catalogue de cours</p>
            <span className="text-crec-gold font-medium">Découvrir →</span>
          </a>
          
          <a 
            href="/formations/admission" 
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-medium text-crec-darkblue mb-2">Admission</h3>
            <p className="text-crec-darkgray mb-4">Procédure et critères d'admission</p>
            <span className="text-crec-gold font-medium">Découvrir →</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-crec-darkblue mb-4">Prêt à nous rejoindre ?</h2>
        <p className="text-lg text-crec-darkgray mb-6 max-w-2xl mx-auto">
          Commencez votre parcours au CREC et développez vos compétences dans un environnement stimulant et bienveillant.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/formations/admission" 
            className="px-6 py-3 bg-crec-darkblue text-white rounded-md hover:bg-crec-blue transition"
          >
            Candidater
          </a>
          <a 
            href="/contact" 
            className="px-6 py-3 border border-crec-darkblue text-crec-darkblue rounded-md hover:bg-crec-darkblue hover:text-white transition"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FormationsPage;
