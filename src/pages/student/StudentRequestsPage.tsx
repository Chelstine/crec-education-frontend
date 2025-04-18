
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";

const StudentRequestsPage = () => {
  return (
    <PageWrapper 
      title="Mes Requêtes" 
      description="Gérez vos demandes administratives"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Gestion des requêtes" 
          subtitle="Soumettez et suivez vos demandes"
        />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <Button>Nouvelle requête</Button>
          </div>
          
          <div className="space-y-4">
            {/* TODO: Intégrer la liste des requêtes depuis l'API */}
            <p className="text-crec-darkgray">
              Aucune requête en cours.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentRequestsPage;
