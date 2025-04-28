import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';

const programs = [
  {
    title: 'Développement de logiciels',
    description: "Apprenez à concevoir, structurer et développer des logiciels performants avec des langages modernes, des méthodologies agiles, et une vision éthique de la technologie.",
    image: '/img/dev-logiciel.png',
  },
  {
    title: 'Développement Web & Mobile',
    description: "Maîtrisez les technologies web et mobiles pour créer des applications élégantes, réactives et utiles à la société. HTML, CSS, JS, React, Flutter n’auront plus de secrets pour vous.",
    image: '/img/dev-web.png',
  },
  {
    title: 'Science des données',
    description: "Analysez, visualisez et exploitez les données pour en tirer du sens. Devenez un expert des outils modernes de traitement de données, de Python à PowerBI.",
    image: '/img/data-science.png',
  },
];

const UniversityPage = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-20 py-12 text-crec-darkblue bg-white">
      <SectionTitle
        title="Institut des Sciences et Technologies Matteo Ricci (ISTMR)"
        align="center"
      />
      <p className="max-w-4xl mx-auto mt-6 text-center text-lg text-crec-darkgray">
        Une école supérieure du CREC, fondée sur l’héritage des Jésuites : excellence, humanisme, innovation.<br/><br/>
        Situé à Godomey, l’ISTMR est une institution d’enseignement supérieur portée par le CREC. Nous croyons que les technologies sont un levier de transformation sociale. Nous formons des ingénieurs et développeurs responsables, engagés et compétents, au service du bien commun.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        {programs.map((prog, index) => (
        <div  key={index}
        className="flex flex-col md:flex-row items-center gap-6 bg-crec-offwhite rounded-lg border-2 border-crec-gold p-6 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-crec-darkblue">
            <img src={prog.image} alt={prog.title} className="w-full md:w-1/2 h-56 object-cover rounded" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-crec-darkblue">{prog.title}</h3>
              <p className="text-crec-darkgray leading-relaxed">{prog.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <SectionTitle
          title="Conditions d'admission"
          subtitle="Rejoindre l’ISTMR, c’est s’engager pour une formation d’excellence, fondée sur les valeurs humaines."
          align="center"
        />

        <div className="max-w-3xl mx-auto text-crec-darkgray text-lg mt-6 space-y-4">
          <p><strong>🎓 Niveau requis :</strong> Baccalauréat scientifique ou technique (ou équivalent reconnu).</p>
          <p><strong>📄 Pièces à fournir :</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>Lettre de motivation</li>
            <li>Copies des diplômes et relevés de notes</li>
            <li>Copie de la pièce d’identité</li>
            <li>Photo d’identité récente</li>
            <li>Frais de dossier</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="default" className="bg-crec-gold hover:bg-crec-lightgold text-white px-8 py-3 text-lg">
            <Link to="/formations/admission">Postuler maintenant</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UniversityPage;
