
import React, { useState } from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StudentRegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Registration submitted:', formData);
  };

  return (
    <PageWrapper 
      title="Inscription" 
      description="Inscrivez-vous aux programmes du CREC"
    >
      <div className="max-w-2xl mx-auto">
        <SectionTitle 
          title="Formulaire d'inscription" 
          subtitle="Remplissez le formulaire pour vous inscrire à nos programmes"
        />
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Prénom</Label>
              <Input 
                type="text" 
                name="firstName" 
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <Label htmlFor="lastName">Nom</Label>
              <Input 
                type="text" 
                name="lastName" 
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              name="email" 
              id="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input 
              type="tel" 
              name="phone" 
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>

          <div>
            <Label htmlFor="program">Programme</Label>
            <select 
              name="program" 
              id="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Sélectionnez un programme</option>
              <option value="license">Licence</option>
              <option value="master">Master</option>
              <option value="doctorat">Doctorat</option>
            </select>
          </div>

          <Button type="submit" className="w-full">
            S'inscrire
          </Button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default StudentRegistrationPage;
