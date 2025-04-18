
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';

const AdmissionsPage = () => {
  return (
    <PageWrapper 
      title="Admissions" 
      description="Processus d'admission au CREC"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Processus d'admission" 
          subtitle="Rejoignez notre communauté éducative"
        />
        
        {/* TODO: Add admission form component when API is ready */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-crec-darkblue mb-3">
              Critères d'admission
            </h3>
            <ul className="list-disc pl-6 text-crec-darkgray space-y-2">
              <li>Baccalauréat ou équivalent</li>
              <li>Lettre de motivation</li>
              <li>CV académique et professionnel</li>
              <li>Deux lettres de recommandation</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-crec-darkblue mb-3">
              Calendrier d'admission
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-crec-blue">Session d'automne</h4>
                <p className="text-crec-darkgray">Dépôt des candidatures : 1er février - 30 avril</p>
              </div>
              <div>
                <h4 className="font-medium text-crec-blue">Session de printemps</h4>
                <p className="text-crec-darkgray">Dépôt des candidatures : 1er septembre - 30 novembre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AdmissionsPage;
