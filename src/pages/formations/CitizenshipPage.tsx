
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';

const CitizenshipPage = () => {
  return (
    <PageWrapper 
      title="Citoyenneté étudiante" 
      description="Engagement et responsabilité au sein du CREC"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Citoyenneté étudiante" 
          subtitle="S'engager pour une communauté éducative responsable"
        />
        
        <div className="space-y-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-crec-darkblue mb-4">
              Notre vision de la citoyenneté
            </h2>
            <p className="text-crec-darkgray">
              Au CREC, nous considérons chaque étudiant comme un acteur responsable 
              de sa formation et de la vie communautaire. La citoyenneté étudiante 
              s'exprime à travers l'engagement, le dialogue et la participation active 
              à la vie de l'institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-crec-darkblue mb-3">
                Engagement étudiant
              </h3>
              <ul className="list-disc pl-6 text-crec-darkgray space-y-2">
                <li>Représentation dans les conseils</li>
                <li>Associations étudiantes</li>
                <li>Projets solidaires</li>
                <li>Tutorat et mentorat</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-crec-darkblue mb-3">
                Responsabilités
              </h3>
              <ul className="list-disc pl-6 text-crec-darkgray space-y-2">
                <li>Respect du règlement intérieur</li>
                <li>Participation à la vie académique</li>
                <li>Contribution aux événements</li>
                <li>Éthique et intégrité</li>
              </ul>
            </div>
          </div>
        </div>

        {/* TODO: Add student council registration form when API is ready */}
      </div>
    </PageWrapper>
  );
};

export default CitizenshipPage;
