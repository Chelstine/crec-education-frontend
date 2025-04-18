
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { FileText, Download } from 'lucide-react';

const StudentDocumentsPage = () => {
  // Mock documents data - replace with actual API call later
  const documents = [
    { 
      id: 1, 
      name: 'Certificat de scolarité', 
      type: 'PDF', 
      date: '2024-01-15' 
    },
    { 
      id: 2, 
      name: 'Relevé de notes', 
      type: 'PDF', 
      date: '2024-01-10' 
    },
    { 
      id: 3, 
      name: 'Attestation d\'inscription', 
      type: 'PDF', 
      date: '2024-01-05' 
    }
  ];

  const handleDownload = (documentId: number) => {
    // TODO: Implement document download logic
    console.log(`Downloading document ${documentId}`);
  };

  return (
    <PageWrapper 
      title="Mes Documents" 
      description="Accédez à vos documents administratifs"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Documents disponibles" 
          subtitle="Retrouvez tous vos documents administratifs"
        />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          {documents.length === 0 ? (
            <p className="text-center text-crec-darkgray">
              Aucun document disponible pour le moment.
            </p>
          ) : (
            <div className="space-y-4">
              {documents.map(document => (
                <div 
                  key={document.id} 
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <FileText className="h-6 w-6 text-crec-darkblue" />
                    <div>
                      <h3 className="font-medium text-crec-darkblue">
                        {document.name}
                      </h3>
                      <p className="text-sm text-crec-darkgray">
                        Format: {document.type} | Date: {document.date}
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDownload(document.id)}
                  >
                    <Download className="mr-2 h-4 w-4" /> Télécharger
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentDocumentsPage;
