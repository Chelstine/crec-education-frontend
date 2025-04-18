
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const StudentPortalPage = () => {
  return (
    <PageWrapper 
      title="Portail Étudiant" 
      description="Accédez à vos ressources et services"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Bienvenue sur votre espace" 
          subtitle="Gérez vos documents et requêtes en quelques clics"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-crec-darkblue mb-4">Mes Documents</h3>
            <p className="text-crec-darkgray mb-4">
              Accédez à vos documents administratifs, relevés de notes et certificats.
            </p>
            <Button asChild>
              <Link to="/student/documents">Voir mes documents</Link>
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-crec-darkblue mb-4">Mes Requêtes</h3>
            <p className="text-crec-darkgray mb-4">
              Soumettez et suivez vos demandes administratives.
            </p>
            <Button asChild>
              <Link to="/student/requests">Gérer mes requêtes</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentPortalPage;
