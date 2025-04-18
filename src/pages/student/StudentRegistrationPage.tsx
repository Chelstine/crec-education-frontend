
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';

const StudentRegistrationPage = () => {
  return (
    <PageWrapper 
      title="Inscription" 
      description="Inscrivez-vous aux programmes du CREC"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Formulaire d'inscription" 
          subtitle="Remplissez le formulaire pour vous inscrire à nos programmes"
        />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="prose max-w-none">
            <p className="text-crec-darkgray">
              Le formulaire d'inscription sera bientôt disponible.
              // TODO: Intégrer le formulaire d'inscription
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentRegistrationPage;
