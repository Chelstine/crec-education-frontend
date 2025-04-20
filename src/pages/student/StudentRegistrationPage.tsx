
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StudentRegistrationPage = () => {
  return (
    <PageWrapper 
      title="Inscription Étudiant" 
      description="Rejoignez notre communauté éducative"
    >
      <div className="max-w-2xl mx-auto">
        <SectionTitle 
          title="Inscription" 
          subtitle="Compléter votre dossier d'admission"
        />
        
        <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Prénom</Label>
              <Input id="firstName" placeholder="Votre prénom" />
            </div>
            <div>
              <Label htmlFor="lastName">Nom</Label>
              <Input id="lastName" placeholder="Votre nom" />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="votre.email@exemple.com" />
          </div>
          
          <div>
            <Label htmlFor="formation">Formation souhaitée</Label>
            <select 
              id="formation" 
              className="w-full p-2 border rounded-md"
            >
              <option>Licence</option>
              <option>Master</option>
              <option>Doctorat</option>
            </select>
          </div>
          
          <Button type="submit" className="w-full">
            Soumettre ma candidature
          </Button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default StudentRegistrationPage;
