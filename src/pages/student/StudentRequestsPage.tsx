
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { ClipboardList, Clock, CheckCircle2, XCircle } from 'lucide-react';

const requestsData = [
  { 
    title: "Changement de filière", 
    status: "En cours", 
    date: "15/04/2025",
    icon: Clock,
    statusColor: "text-yellow-500"
  },
  { 
    title: "Demande de bourse", 
    status: "Acceptée", 
    date: "02/03/2025",
    icon: CheckCircle2,
    statusColor: "text-green-500"
  },
  { 
    title: "Certificat de stage", 
    status: "Rejetée", 
    date: "10/01/2025",
    icon: XCircle,
    statusColor: "text-red-500"
  }
];

const StudentRequestsPage = () => {
  return (
    <PageWrapper 
      title="Mes Requêtes" 
      description="Suivez l'état de vos demandes administratives"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle 
          title="Mes Demandes" 
          subtitle="Historique et suivi de vos requêtes"
        />
        
        <div className="space-y-4">
          {requestsData.map((request, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <request.icon className={`${request.statusColor}`} />
                <div>
                  <h3 className="font-semibold">{request.title}</h3>
                  <p className={`text-sm font-medium ${request.statusColor}`}>
                    {request.status}
                  </p>
                  <p className="text-xs text-gray-400">Déposée le {request.date}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <ClipboardList className="mr-2 h-4 w-4" /> Détails
              </Button>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default StudentRequestsPage;
