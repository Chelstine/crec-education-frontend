
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';

const StudentLoginPage = () => {
  return (
    <PageWrapper 
      title="Connexion Étudiant" 
      description="Accédez à votre espace étudiant"
    >
      <div className="max-w-md mx-auto">
        <SectionTitle 
          title="Espace Étudiant" 
          subtitle="Connectez-vous pour accéder à vos ressources"
        />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-crec-darkgray">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crec-gold focus:ring-crec-gold"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-crec-darkgray">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crec-gold focus:ring-crec-gold"
              />
            </div>
            
            <Button className="w-full">
              Se connecter
            </Button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentLoginPage;
