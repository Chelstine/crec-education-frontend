
import React, { useState } from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ClipboardList, Plus, EyeIcon } from 'lucide-react';

const StudentRequestsPage = () => {
  const [requests, setRequests] = useState([
    { 
      id: 1, 
      type: 'Demande de stage', 
      status: 'En cours', 
      date: '2024-02-15' 
    },
    { 
      id: 2, 
      type: 'Changement de programme', 
      status: 'Acceptée', 
      date: '2024-01-20' 
    }
  ]);

  const [newRequest, setNewRequest] = useState({
    type: '',
    description: ''
  });

  const handleNewRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewRequest(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitRequest = () => {
    // TODO: Implement request submission logic
    const requestToSubmit = {
      ...newRequest,
      id: requests.length + 1,
      status: 'En cours',
      date: new Date().toISOString().split('T')[0]
    };
    setRequests([...requests, requestToSubmit]);
    console.log('New request submitted:', requestToSubmit);
  };

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
        
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Nouvelle requête
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nouvelle Requête</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label htmlFor="type" className="block mb-2">Type de requête</label>
                  <Input 
                    type="text" 
                    name="type" 
                    value={newRequest.type}
                    onChange={handleNewRequestChange}
                    placeholder="Ex: Demande de stage" 
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block mb-2">Description</label>
                  <Textarea 
                    name="description" 
                    value={newRequest.description}
                    onChange={handleNewRequestChange}
                    placeholder="Décrivez votre requête en détail" 
                  />
                </div>
                <Button onClick={submitRequest} className="w-full">
                  Soumettre la requête
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {requests.length === 0 ? (
            <p className="text-center text-crec-darkgray">
              Aucune requête en cours.
            </p>
          ) : (
            <div className="space-y-4">
              {requests.map(request => (
                <div 
                  key={request.id} 
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <ClipboardList className="h-6 w-6 text-crec-darkblue" />
                    <div>
                      <h3 className="font-medium text-crec-darkblue">
                        {request.type}
                      </h3>
                      <p className="text-sm text-crec-darkgray">
                        Statut: {request.status} | Date: {request.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <EyeIcon className="mr-2 h-4 w-4" /> Détails
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

export default StudentRequestsPage;
