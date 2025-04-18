
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';

const EventsPage = () => {
  // Données factices pour les événements
  const upcomingEvents = [
    {
      id: 1,
      title: "Conférence Internationale sur l'Éducation",
      date: "2024-05-15",
      description: "Une journée de partage et de réflexion sur les enjeux éducatifs contemporains.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
    },
    {
      id: 2,
      title: "Séminaire de Recherche",
      date: "2024-06-01",
      description: "Présentation des travaux de recherche des doctorants du CREC.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
    }
  ];

  return (
    <PageWrapper 
      title="Événements" 
      description="Découvrez les prochains événements du CREC"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Agenda des événements" 
          subtitle="Restez informé des activités et rencontres à venir"
        />
        
        {/* Liste des événements */}
        <div className="grid gap-8">
          {upcomingEvents.map(event => (
            <Card
              key={event.id}
              title={event.title}
              description={event.description}
              image={event.image}
              link={`/events/${event.id}`}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default EventsPage;
