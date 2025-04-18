
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { FileText, Mail, ClipboardList } from 'lucide-react';

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
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-crec-darkblue" />
            <h3 className="text-xl font-semibold text-crec-darkblue mb-4">Mes Documents</h3>
            <p className="text-crec-darkgray mb-4">
              Consultez et téléchargez vos documents administratifs.
            </p>
            <Button asChild variant="outline">
              <Link to="/student/documents">Mes Documents</Link>
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Mail className="mx-auto mb-4 h-12 w-12 text-crec-darkblue" />
            <h3 className="text-xl font-semibold text-crec-darkblue mb-4">Mes Requêtes</h3>
            <p className="text-crec-darkgray mb-4">
              Suivez et gérez vos demandes administratives.
            </p>
            <Button asChild variant="outline">
              <Link to="/student/requests">Mes Requêtes</Link>
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ClipboardList className="mx-auto mb-4 h-12 w-12 text-crec-darkblue" />
            <h3 className="text-xl font-semibold text-crec-darkblue mb-4">Inscription</h3>
            <p className="text-crec-darkgray mb-4">
              Gérez votre inscription et vos informations personnelles.
            </p>
            <Button asChild variant="outline">
              <Link to="/student/registration">S'inscrire</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentPortalPage;
