
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';

const MissionPage = () => {
  return (
    <PageWrapper 
      title="Notre Mission" 
      description="La vision et les objectifs du CREC"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Mission et Vision" />
        
        {/* Mission */}
        <div className="mb-12 prose max-w-none">
          <h2 className="text-2xl font-semibold text-crec-darkblue mb-4">Notre Mission</h2>
          <p className="text-lg">
            Le CREC a pour mission de développer une éducation intégrale qui allie excellence académique, 
            valeurs spirituelles et engagement sociétal. Nous œuvrons pour former des personnes compétentes, 
            conscientes et engagées, capables de contribuer positivement au monde contemporain.
          </p>
          
          <p>
            Notre mission s'articule autour de trois piliers fondamentaux :
          </p>
          
          <ul className="list-disc pl-6">
            <li><strong>Former</strong> - Offrir des formations d'excellence qui conjuguent savoir, savoir-être et savoir-faire</li>
            <li><strong>Chercher</strong> - Développer la recherche dans nos domaines d'expertise en dialogue avec les questions contemporaines</li>
            <li><strong>Servir</strong> - Contribuer au bien commun par l'accompagnement, le conseil et l'engagement social</li>
          </ul>
        </div>
        
        {/* Vision */}
        <div className="mb-12 prose max-w-none">
          <h2 className="text-2xl font-semibold text-crec-darkblue mb-4">Notre Vision</h2>
          <p className="text-lg">
            Le CREC aspire à être reconnu comme un centre d'excellence et d'innovation éducative, 
            inspiré par des valeurs chrétiennes et humanistes. Nous envisageons une société où 
            l'éducation contribue pleinement au développement intégral des personnes et à la 
            construction d'un monde plus juste, solidaire et durable.
          </p>
          
          <p>
            Notre vision s'exprime à travers :
          </p>
          
          <ul className="list-disc pl-6">
            <li>Une communauté éducative dynamique, collaborative et internationale</li>
            <li>Des approches pédagogiques innovantes qui répondent aux défis contemporains</li>
            <li>Un dialogue continu entre foi, culture et raison</li>
            <li>Un engagement au service du développement humain intégral</li>
          </ul>
        </div>
        
        {/* Objectifs */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-crec-darkblue mb-4">Nos Objectifs</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-crec-blue mb-3">Excellence Académique</h3>
              <p className="text-crec-darkgray">
                Développer des programmes de formation et de recherche de haut niveau,
                reconnus pour leur qualité et leur pertinence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-crec-blue mb-3">Formation Intégrale</h3>
              <p className="text-crec-darkgray">
                Promouvoir une approche éducative qui considère toutes les dimensions de la personne :
                intellectuelle, spirituelle, sociale et émotionnelle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-crec-blue mb-3">Dialogue et Ouverture</h3>
              <p className="text-crec-darkgray">
                Favoriser le dialogue interdisciplinaire, interculturel et interreligieux comme
                source d'enrichissement mutuel et de compréhension.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-crec-blue mb-3">Innovation et Créativité</h3>
              <p className="text-crec-darkgray">
                Encourager l'innovation pédagogique et la créativité dans la recherche de
                solutions aux défis éducatifs contemporains.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-crec-blue mb-3">Engagement Sociétal</h3>
              <p className="text-crec-darkgray">
                Contribuer activement à la construction d'une société plus juste, solidaire
                et respectueuse de la dignité humaine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-crec-blue mb-3">Internationalisation</h3>
              <p className="text-crec-darkgray">
                Développer des partenariats internationaux pour enrichir nos perspectives
                et offrir une expérience éducative ouverte sur le monde.
              </p>
            </div>
          </div>
        </div>
        
        {/* Citation */}
        <div className="bg-crec-offwhite p-8 rounded-lg mb-12">
          <blockquote className="text-xl italic text-crec-darkblue">
            "Éduquer, ce n'est pas remplir un vase, c'est allumer un feu."
            <footer className="text-right text-crec-darkgray mt-2">— William Butler Yeats</footer>
          </blockquote>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MissionPage;
