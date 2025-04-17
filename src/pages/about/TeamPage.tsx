
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
}

const TeamPage = () => {
  // Données factices pour l'équipe
  const leadership: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Marie Laurent',
      role: 'Présidente',
      department: 'Direction',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Docteure en théologie et en sciences de l\'éducation, Marie Laurent dirige le CREC depuis 2018. Elle a précédemment enseigné à l\'Université Catholique de Lyon et travaillé comme consultante pour plusieurs organisations éducatives internationales.'
    },
    {
      id: 2,
      name: 'Pr. Thomas Dubois',
      role: 'Directeur Académique',
      department: 'Direction',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Professeur de philosophie morale, Thomas Dubois supervise l\'ensemble des programmes académiques du CREC. Auteur de plusieurs ouvrages sur l\'éthique de l\'éducation, il est reconnu internationalement pour ses travaux sur la pédagogie personnaliste.'
    },
    {
      id: 3,
      name: 'Claire Moreau',
      role: 'Directrice Administrative',
      department: 'Direction',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Avec une formation en gestion des organisations à but non lucratif, Claire Moreau assure la coordination administrative et financière du CREC depuis 2015. Son expertise a contribué au développement et à la stabilité de l\'institution.'
    }
  ];

  const faculty: TeamMember[] = [
    {
      id: 4,
      name: 'Pr. Jean Lefèvre',
      role: 'Professeur de Théologie',
      department: 'Faculté de Théologie',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      bio: 'Spécialiste en théologie morale et en éthique sociale, Jean Lefèvre a rejoint le CREC en 2010 après avoir enseigné dans plusieurs universités européennes. Ses recherches portent sur le dialogue entre foi et culture contemporaine.'
    },
    {
      id: 5,
      name: 'Dr. Sophie Martin',
      role: 'Maître de Conférences',
      department: 'Département d\'Éducation',
      image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f',
      bio: 'Docteure en sciences de l\'éducation, Sophie Martin est spécialisée dans les approches pédagogiques innovantes et l\'éducation inclusive. Elle coordonne le Master en Leadership Éducatif du CREC.'
    },
    {
      id: 6,
      name: 'Pr. Marc Petit',
      role: 'Professeur de Philosophie',
      department: 'Faculté de Philosophie',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'Philosophe reconnu pour ses travaux sur la personne humaine et l\'éthique, Marc Petit enseigne au CREC depuis sa fondation. Il dirige également le Centre d\'Études Personalis, une unité de recherche associée au CREC.'
    },
    {
      id: 7,
      name: 'Dr. Élise Durand',
      role: 'Chercheure',
      department: 'Centre de Recherche',
      image: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd',
      bio: 'Spécialiste des relations entre science et foi, Élise Durand mène des recherches interdisciplinaires au sein du CREC. Elle intervient régulièrement dans des conférences internationales sur le dialogue science-religion.'
    }
  ];

  const administrative: TeamMember[] = [
    {
      id: 8,
      name: 'Philippe Bernard',
      role: 'Responsable Communication',
      department: 'Service Communication',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Avec une expérience de plus de 15 ans dans le domaine de la communication institutionnelle, Philippe Bernard supervise la stratégie de communication du CREC et ses relations extérieures.'
    },
    {
      id: 9,
      name: 'Isabelle Fournier',
      role: 'Responsable Bibliothèque',
      department: 'Ressources Documentaires',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      bio: 'Bibliothécaire de formation, Isabelle Fournier gère le centre de documentation du CREC, riche de plus de 50 000 ouvrages spécialisés en théologie, philosophie et sciences de l\'éducation.'
    },
    {
      id: 10,
      name: 'Nicolas Leroux',
      role: 'Responsable Technique',
      department: 'Service Informatique',
      image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218',
      bio: 'Expert en technologies éducatives, Nicolas Leroux assure le développement des infrastructures numériques du CREC et accompagne l\'innovation pédagogique par le numérique.'
    }
  ];

  const TeamSection = ({ title, members }: { title: string; members: TeamMember[] }) => (
    <section className="mb-16">
      <SectionTitle title={title} />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-60">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-crec-darkblue">{member.name}</h3>
              <p className="text-crec-gold font-medium">{member.role}</p>
              <p className="text-sm text-crec-darkgray mb-4">{member.department}</p>
              <p className="text-crec-darkgray">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <PageWrapper 
      title="Notre Équipe" 
      description="Rencontrez les membres de notre équipe qui œuvrent au quotidien pour la mission du CREC"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-crec-darkgray">
          Le CREC réunit des chercheurs, enseignants et professionnels dédiés à notre mission d'éducation intégrale.
          Notre équipe pluridisciplinaire conjugue expertise académique, expérience de terrain et engagement commun 
          pour le développement de la personne.
        </p>
      </div>

      {/* Équipe de direction */}
      <TeamSection title="Équipe de Direction" members={leadership} />
      
      {/* Corps enseignant et chercheurs */}
      <TeamSection title="Corps Enseignant et Chercheurs" members={faculty} />
      
      {/* Équipe administrative */}
      <TeamSection title="Équipe Administrative" members={administrative} />

      {/* Rejoindre l'équipe */}
      <section className="bg-crec-offwhite p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-crec-darkblue mb-4">
          Rejoindre Notre Équipe
        </h3>
        <p className="text-crec-darkgray mb-6 max-w-2xl mx-auto">
          Le CREC recherche régulièrement des talents pour renforcer ses équipes. Si vous partagez nos valeurs et 
          souhaitez contribuer à notre mission éducative, consultez nos offres d'emploi ou envoyez-nous une candidature spontanée.
        </p>
        <a 
          href="#" 
          className="inline-block px-6 py-3 bg-crec-darkblue text-white rounded-md hover:bg-crec-blue transition"
        >
          Voir nos offres d'emploi
        </a>
      </section>
    </PageWrapper>
  );
};

export default TeamPage;
