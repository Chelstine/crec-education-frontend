
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { FileText } from 'lucide-react';

const StudentDocumentsPage = () => {
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
          <div className="space-y-4">
            {/* TODO: Intégrer la liste des documents depuis l'API */}
            <div className="flex items-center p-4 border rounded-lg">
              <FileText className="h-6 w-6 text-crec-darkblue mr-4" />
              <div>
                <h3 className="font-medium text-crec-darkblue">Certificat de scolarité</h3>
                <p className="text-sm text-crec-darkgray">Format: PDF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentDocumentsPage;
