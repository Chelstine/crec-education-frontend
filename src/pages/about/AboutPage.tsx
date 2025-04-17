
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const aboutSections = [
    {
      title: 'Notre Mission',
      description: 'Découvrez notre vision et engagement pour une éducation intégrale.',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e',
      link: '/about/mission'
    },
    {
      title: 'Notre Équipe',
      description: 'Rencontrez nos chercheurs, enseignants et personnel administratif.',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5',
      link: '/about/team'
    },
    {
      title: 'Nos Partenaires',
      description: 'Explorez notre réseau d\'universités et institutions partenaires.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
      link: '/about/partners'
    }
  ];

  return (
    <PageWrapper 
      title="À propos du CREC" 
      description="Centre de Recherche, d'Étude et de Créativité - Une institution d'excellence au service de l'éducation"
    >
      {/* Introduction */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle 
              title="Notre Histoire" 
              subtitle="Un engagement de plus de 25 ans pour l'éducation et la recherche"
            />
            <div className="prose max-w-none">
              <p>
                Fondé en 1998, le Centre de Recherche, d'Étude et de Créativité (CREC) est né de la volonté 
                de créer un espace d'excellence académique alliant recherche, enseignement et innovation pédagogique.
              </p>
              <p>
                Inspiré par des valeurs chrétiennes et humanistes, le CREC s'est développé comme une institution 
                de référence dans la formation intégrale de la personne, conjuguant savoir intellectuel, 
                développement personnel et engagement sociétal.
              </p>
              <p>
                Au fil des années, notre centre a évolué pour répondre aux défis contemporains de l'éducation, 
                tout en restant fidèle à ses principes fondateurs : excellence académique, dialogue interdisciplinaire, 
                attention à la personne et ouverture au monde.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f" 
              alt="Campus du CREC" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-crec-darkblue to-transparent p-6">
              <p className="text-white text-lg">Campus principal du CREC à Paris</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section des valeurs */}
      <section className="mb-16">
        <SectionTitle 
          title="Nos Valeurs" 
          subtitle="Les principes qui guident notre action éducative"
          align="center"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-crec-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-crec-darkblue mb-2">Excellence</h3>
            <p className="text-crec-darkgray">
              Nous visons l'excellence dans tous les aspects de notre mission éducative et de recherche.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-crec-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-crec-darkblue mb-2">Intégralité</h3>
            <p className="text-crec-darkgray">
              Notre approche considère toutes les dimensions de la personne : intellectuelle, spirituelle, sociale et émotionnelle.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-crec-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-crec-darkblue mb-2">Ouverture</h3>
            <p className="text-crec-darkgray">
              Nous encourageons le dialogue, l'écoute et l'ouverture aux différentes cultures et perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Sections d'exploration */}
      <section className="mb-16">
        <SectionTitle 
          title="Explorez le CREC" 
          subtitle="Découvrez en détail les différentes facettes de notre institution"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <Card
              key={index}
              title={section.title}
              description={section.description}
              image={section.image}
              link={section.link}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-crec-offwhite p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-crec-darkblue mb-4">
          Rejoignez notre communauté éducative
        </h3>
        <p className="text-crec-darkgray mb-6 max-w-2xl mx-auto">
          Découvrez nos programmes d'enseignement, participez à nos événements ou soutenez notre mission.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="default" className="bg-crec-darkblue hover:bg-crec-blue">
            <Link to="/formations">Nos formations</Link>
          </Button>
          <Button asChild variant="outline" className="border-crec-gold text-crec-darkblue hover:bg-crec-gold hover:text-white">
            <Link to="/contact">Nous contacter</Link>
          </Button>
          <Button asChild variant="ghost" className="text-crec-darkblue hover:bg-crec-gray">
            <Link to="/donate">Faire un don</Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
};

export default AboutPage;
