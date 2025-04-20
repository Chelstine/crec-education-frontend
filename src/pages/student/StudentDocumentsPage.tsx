
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { FileText, Download } from 'lucide-react';

const documentsData = [
  { 
    title: "Relevé de notes", 
    description: "Semestres 1 et 2", 
    date: "Mis à jour le 15/04/2025" 
  },
  { 
    title: "Attestation d'inscription", 
    description: "Année académique 2024-2025", 
    date: "Généré le 02/03/2025" 
  },
  { 
    title: "Certificat de scolarité", 
    description: "Document officiel", 
    date: "Mis à jour le 10/01/2025" 
  }
];

const StudentDocumentsPage = () => {
  return (
    <PageWrapper 
      title="Mes Documents" 
      description="Consultez et téléchargez vos documents administratifs"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Documents Administratifs" 
          subtitle="Tous vos documents en un seul endroit"
        />
        
        <div className="space-y-4">
          {documentsData.map((doc, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <FileText className="text-crec-darkblue" />
                <div>
                  <h3 className="font-semibold">{doc.title}</h3>
                  <p className="text-sm text-gray-500">{doc.description}</p>
                  <p className="text-xs text-gray-400">{doc.date}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" /> Télécharger
              </Button>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentDocumentsPage;
