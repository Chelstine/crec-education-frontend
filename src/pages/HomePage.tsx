
import React from 'react';
import Banner from '@/components/common/Banner';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  // Données factices pour les formations
  const courses = [
    {
      id: 1,
      title: 'Licence Théologie',
      description: 'Formation complète en théologie catholique avec une approche interdisciplinaire.',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      link: '/formations/programs'
    },
    {
      id: 2,
      title: 'Master Éthique et Leadership',
      description: 'Formation avancée sur les défis éthiques contemporains et le leadership responsable.',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
      link: '/formations/programs'
    },
    {
      id: 3,
      title: 'Certificat Dialogue Interreligieux',
      description: 'Parcours court pour comprendre et pratiquer le dialogue entre traditions religieuses.',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      link: '/formations/programs'
    }
  ];

  // Données factices pour les événements
  const events = [
    {
      id: 1,
      title: 'Colloque International: Éducation et Spiritualité',
      date: '10-12 juin 2024',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
      link: '/events/1'
    },
    {
      id: 2,
      title: 'Séminaire: Écologie et Responsabilité Chrétienne',
      date: '24 mai 2024',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
      link: '/events/2'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner 
        title="Centre de Recherche, d'Étude et de Créativité"
        subtitle="Formation, Recherche et Accompagnement pour une éducation intégrale fondée sur des valeurs chrétiennes."
        bgImage="https://images.unsplash.com/photo-1551038247-3d9af20df552"
        ctaText="Découvrir nos formations"
        ctaLink="/formations"
        size="lg"
      />

      {/* À propos section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Bienvenue au CREC"
                subtitle="Une institution engagée dans la formation intégrale de la personne."
              />
              <p className="mb-6 text-crec-darkgray">
                Le CREC est un centre d'excellence dédié à la formation, la recherche et l'accompagnement. 
                Notre mission est de développer une éducation intégrale qui allie excellence académique, 
                valeurs spirituelles et engagement sociétal.
              </p>
              <p className="mb-8 text-crec-darkgray">
                Fondé sur des valeurs chrétiennes, notre centre est un lieu d'étude, de dialogue et de création 
                où enseignants et étudiants collaborent pour répondre aux défis contemporains.
              </p>
              <Button asChild variant="outline" className="border-crec-gold text-crec-darkblue hover:bg-crec-gold hover:text-white">
                <Link to="/about">En savoir plus sur nous</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
                  alt="CREC Campus" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-crec-gold p-4 rounded-lg shadow-lg w-40 h-40 flex items-center justify-center">
                <p className="text-white text-center font-bold">
                  <span className="block text-3xl">25</span>
                  <span className="block text-sm mt-1">ans d'excellence</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations section */}
      <section className="py-16 bg-crec-offwhite">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos formations"
            subtitle="Des parcours académiques d'excellence conjuguant savoir, savoir-être et savoir-faire."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                link={course.link}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="default" className="bg-crec-darkblue hover:bg-crec-blue">
              <Link to="/formations">Toutes nos formations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Événements section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Événements à venir"
            subtitle="Participez à nos colloques, séminaires et conférences."
            align="left"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card
                key={event.id}
                title={event.title}
                description={event.date}
                image={event.image}
                link={event.link}
                linkText="Plus de détails"
              />
            ))}
          </div>
          
          <div className="mt-12">
            <Button asChild variant="outline" className="border-crec-gold text-crec-darkblue hover:bg-crec-gold hover:text-white">
              <Link to="/events">Tous les événements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <Banner 
        title="Rejoignez notre communauté éducative"
        subtitle="Devenez acteur d'une éducation transformatrice fondée sur des valeurs."
        bgImage="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
        ctaText="Postuler"
        ctaLink="/formations/admission"
        size="md"
      >
        <div className="flex gap-4 justify-center mt-4">
          <Button asChild variant="secondary" className="bg-white text-crec-darkblue hover:bg-crec-gray">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </Banner>
    </div>
  );
};

export default HomePage;
