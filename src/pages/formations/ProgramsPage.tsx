
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';

const ProgramsPage = () => {
  return (
    <PageWrapper 
      title="Nos Programmes" 
      description="Découvrez nos programmes de formation"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Programmes de Formation" 
          subtitle="Une formation intégrale pour répondre aux défis contemporains"
        />
        
        {/* TODO: Add program list component when API is ready */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-crec-darkblue mb-3">
              Master en Leadership Éducatif
            </h3>
            <p className="text-crec-darkgray mb-4">
              Formation approfondie en leadership et gestion des institutions éducatives,
              intégrant une perspective chrétienne et humaniste.
            </p>
            <div className="flex gap-4">
              <span className="text-sm bg-crec-offwhite px-3 py-1 rounded">2 ans</span>
              <span className="text-sm bg-crec-offwhite px-3 py-1 rounded">120 ECTS</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-crec-darkblue mb-3">
              Certificat en Pédagogie Personnalisée
            </h3>
            <p className="text-crec-darkgray mb-4">
              Programme spécialisé dans les approches pédagogiques centrées sur la personne
              et le développement intégral de l'élève.
            </p>
            <div className="flex gap-4">
              <span className="text-sm bg-crec-offwhite px-3 py-1 rounded">1 an</span>
              <span className="text-sm bg-crec-offwhite px-3 py-1 rounded">60 ECTS</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-crec-darkblue mb-3">
              Formation Continue en Éthique Éducative
            </h3>
            <p className="text-crec-darkgray mb-4">
              Modules courts destinés aux professionnels de l'éducation souhaitant approfondir
              leur réflexion éthique et leur pratique.
            </p>
            <div className="flex gap-4">
              <span className="text-sm bg-crec-offwhite px-3 py-1 rounded">Flexible</span>
              <span className="text-sm bg-crec-offwhite px-3 py-1 rounded">Modulaire</span>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProgramsPage;
