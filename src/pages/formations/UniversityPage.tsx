
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';

const UniversityPage = () => {
  return (
    <PageWrapper 
      title="Université CREC" 
      description="Notre université et ses valeurs fondamentales"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Notre Université" 
          subtitle="Un lieu d'excellence académique et de formation intégrale"
        />
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-crec-darkblue mb-4">
            Une tradition d'excellence
          </h2>
          <p className="text-lg text-crec-darkgray mb-6">
            L'Université CREC s'inscrit dans la tradition des grandes institutions 
            d'enseignement catholiques. Notre mission est de former des personnes 
            compétentes, conscientes et engagées, capables de contribuer positivement 
            à la société contemporaine.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-crec-blue mb-3">
                Formation académique
              </h3>
              <p className="text-crec-darkgray">
                Programmes d'études rigoureux alliant théorie et pratique, 
                enseignés par des professeurs reconnus dans leur domaine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-crec-blue mb-3">
                Recherche
              </h3>
              <p className="text-crec-darkgray">
                Centres de recherche dynamiques travaillant sur des problématiques 
                contemporaines en éducation et sciences humaines.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-crec-darkblue mb-4">
            Campus et installations
          </h2>
          <p className="text-lg text-crec-darkgray mb-6">
            Notre campus moderne offre un environnement propice à l'étude et à 
            l'épanouissement personnel, avec des installations de qualité :
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Bibliothèque riche de plus de 50 000 ouvrages</li>
            <li>Salles de cours équipées des dernières technologies</li>
            <li>Espaces de travail collaboratif</li>
            <li>Centre de ressources numériques</li>
            <li>Chapelle et espaces de recueillement</li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UniversityPage;
