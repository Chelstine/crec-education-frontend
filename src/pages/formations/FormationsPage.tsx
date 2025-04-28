import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';

const OpenCoursesPage = () => {
  const openCourses = [
    {
      id: 1,
      title: "Cours d’Anglais",
      image: "/img/anglais.png",
      description: "Développez vos compétences en anglais oral et écrit, du niveau débutant à avancé, dans une ambiance conviviale et interactive.",
    },
    {
      id: 2,
      title: "Initiation à l’informatique",
      image: "/img/informatique.png",
      description: "Apprenez à utiliser un ordinateur, naviguer sur internet, et maîtriser les outils bureautiques essentiels (Word, Excel…).",
    },
    {
      id: 3,
      title: "Accompagnement scolaire",
      image: "/img/accompagnement.png",
      description: "Soutien en mathématiques, français, physique, pour élèves en difficulté ou en recherche d’excellence. Coaching personnalisé.",
    },
  ];

  return (
    <PageWrapper title="Formations Ouvertes à Tous" description="Des opportunités éducatives accessibles pour toutes et tous">
      {/* Intro */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <SectionTitle 
          title="📚 Formations Ouvertes" 
          subtitle="Apprendre, se former et évoluer à tout âge"
        />
        <p className="text-crec-darkgray text-lg leading-relaxed mt-4">
          Le CREC propose des formations courtes, certifiantes et accessibles à toutes les personnes motivées, qu’elles soient en reconversion, en insertion, ou simplement en quête de nouvelles compétences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {openCourses.map(course => (
          <Card
            key={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
            link="/formations/admission"
            linkText="Postuler"
          />
        ))}
      </div>

      {/* Admission */}
      <section className="bg-crec-offwhite p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold text-crec-darkblue mb-4 text-center">🎓 Conditions d’admission</h2>
        <ul className="list-disc list-inside text-crec-darkgray max-w-2xl mx-auto text-lg leading-relaxed">
          <li>Avoir 16 ans minimum</li>
          <li>Être motivé(e) à apprendre et à progresser</li>
          <li>Aucune exigence de diplôme requis</li>
          <li>Dossier de candidature avec :
            <ul className="ml-6 list-disc">
              <li>Formulaire d’inscription</li>
              <li>Pièce d’identité</li>
              <li>Photo d’identité</li>
              <li>Lettre de motivation (facultative)</li>
            </ul>
          </li>
        </ul>
        <div className="text-center mt-8">
          <a href="/formations/admission" className="px-6 py-3 bg-crec-gold text-white rounded-md hover:bg-crec-lightgold transition">
            Déposer ma candidature
          </a>
        </div>
      </section>

      {/* Contact */}
      <div className="text-center">
        <h3 className="text-xl text-crec-darkblue font-semibold mb-2">Besoin d’aide ?</h3>
        <p className="text-crec-darkgray mb-4">Notre équipe est à votre disposition pour répondre à vos questions.</p>
        <a href="/contact" className="underline text-crec-gold hover:text-crec-darkblue font-medium">Nous contacter</a>
      </div>
    </PageWrapper>
  );
};

export default OpenCoursesPage;
