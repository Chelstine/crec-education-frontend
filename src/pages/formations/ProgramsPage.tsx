import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';

const FabLabPage = () => {
  return (
    <PageWrapper 
      title="Espace Fablab" 
      description="Innover, créer, fabriquer : le FabLab du CREC est un atelier pour tous les passionnés de technologie, de design et de solutions pratiques."
    >
      {/* Présentation */}
      <section className="max-w-4xl mx-auto mb-12">
        <SectionTitle 
          title="Un laboratoire de fabrication pour tous" 
          subtitle="Un espace où la technologie et la créativité se rencontrent pour transformer des idées en solutions concrètes."
        />
        <p className="text-crec-darkgray mb-6 text-justify">
          Le FabLab du CREC est un lieu unique d’expérimentation, ouvert aux étudiants, professionnels et amateurs passionnés. On y développe des projets concrets dans des domaines variés : électronique, programmation, robotique, design, environnement, etc. Notre objectif est de promouvoir l’apprentissage par le faire, en fournissant des outils modernes et un accompagnement pédagogique.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <img src="/img/fablab.png" alt="FabLab CREC" className="rounded shadow-lg object-cover w-full h-64" />
          <div className="flex flex-col justify-center">
            <ul className="list-disc ml-5 text-crec-darkgray space-y-2">
              <li>Découpe laser & impression 3D</li>
              <li>Raspberry Pi & Arduino pour prototypage</li>
              <li>Design de circuits imprimés (PCB)</li>
              <li>Ateliers collaboratifs encadrés</li>
              <li>Formation continue et événements thématiques</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="mb-16">
        <SectionTitle 
          title="Quelques réalisations du FabLab" 
          subtitle="Des idées concrètes nées dans notre atelier collaboratif."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-lg p-5">
            <img src="/img/project1.png" alt="Projet 1" className="h-40 w-full object-cover rounded mb-4" />
            <h4 className="text-lg font-semibold text-crec-darkblue mb-2">Système d’irrigation automatisé</h4>
            <p className="text-sm text-crec-darkgray">Un prototype conçu pour les petits exploitants agricoles intégrant capteurs d’humidité et interface mobile.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-5">
            <img src="/img/project2.png" alt="Projet 2" className="h-40 w-full object-cover rounded mb-4" />
            <h4 className="text-lg font-semibold text-crec-darkblue mb-2">Imprimante 3D éco-conçue</h4>
            <p className="text-sm text-crec-darkgray">Assemblage d'une imprimante 3D à partir de composants recyclés pour favoriser l’innovation locale accessible.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-5">
            <img src="/img/project3.png" alt="Projet 3" className="h-40 w-full object-cover rounded mb-4" />
            <h4 className="text-lg font-semibold text-crec-darkblue mb-2">Kit solaire éducatif</h4>
            <p className="text-sm text-crec-darkgray">Un kit de démonstration solaire pour sensibiliser les élèves à l’énergie renouvelable et aux circuits électriques de base.</p>
          </div>
        </div>
      </section>

      {/* Appel à participation */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-crec-darkblue mb-4">Rejoignez notre FabLab !</h2>
        <p className="text-lg text-crec-darkgray mb-6 max-w-2xl mx-auto">
          Que vous soyez étudiant, passionné ou professionnel, le FabLab du CREC est l’endroit idéal pour apprendre, innover et collaborer. Venez avec vos idées, repartez avec des projets !
        </p>
        <a 
          href="/contact" 
          className="px-6 py-3 bg-crec-gold hover:bg-crec-lightgold text-white rounded-md font-medium"
        >
          Nous contacter
        </a>
      </section>
    </PageWrapper>
  );
};

export default FabLabPage;
