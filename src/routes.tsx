import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

// Pages principales et pages légales
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import LegalPage from '@/pages/LegalPage';
import PrivacyPage from '@/pages/PrivacyPage';
import ContactPage from '@/pages/contact/ContactPage';

// Pages À propos
import AboutPage from '@/pages/about/AboutPage';
import MissionPage from '@/pages/about/MissionPage';
import TeamPage from '@/pages/about/TeamPage';
import PartnersPage from '@/pages/about/PartnersPage';

// Pages Formations
import FormationsPage from '@/pages/formations/FormationsPage';
import ProgramsPage from '@/pages/formations/ProgramsPage';
import UniversityPage from '@/pages/formations/UniversityPage';
import AdmissionsPage from '@/pages/formations/AdmissionsPage';
import CitizenshipPage from '@/pages/formations/CitizenshipPage';

// Pages News
import CampusLifePage from '@/pages/news/CampusLifePage';
import TestimonialsPage from '@/pages/news/TestimonialsPage';

// Événements
import EventsPage from '@/pages/events/EventsPage';
import EventDetailsPage from '@/pages/events/EventDetailsPage';
import CalendarPage from '@/pages/events/CalendarPage';

// Espace étudiant
import StudentLoginPage from '@/pages/student/StudentLoginPage';
import StudentPortalPage from '@/pages/student/StudentPortalPage';
import StudentRegistrationPage from '@/pages/student/StudentRegistrationPage';
import StudentDocumentsPage from '@/pages/student/StudentDocumentsPage';
import StudentRequestsPage from '@/pages/student/StudentRequestsPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      
      // À propos
      { path: 'about', element: <AboutPage /> },
      { path: 'about/mission', element: <MissionPage /> },
      { path: 'about/team', element: <TeamPage /> },
      { path: 'about/partners', element: <PartnersPage /> },
      
      // Formations
      { path: 'formations', element: <FormationsPage /> },
      { path: 'formations/programs', element: <ProgramsPage /> },
      { path: 'formations/university', element: <UniversityPage /> },
      { path: 'formations/admissions', element: <AdmissionsPage /> },
      { path: 'formations/citizenship', element: <CitizenshipPage /> },
      
      // News
      { path: 'news', element: <HomePage /> },
      { path: 'news/campus', element: <CampusLifePage /> },
      { path: 'news/testimonials', element: <TestimonialsPage /> },
      
      // Événements
      { path: 'events', element: <EventsPage /> },
      { path: 'events/:id', element: <EventDetailsPage /> },
      { path: 'events/calendar', element: <CalendarPage /> },
      
      // Actualités
      { path: 'news', element: <HomePage /> },
      { path: 'news/articles', element: <HomePage /> },
      { path: 'news/campus', element: <HomePage /> },
      { path: 'news/testimonials', element: <HomePage /> },
      
      // Étudiant
      { path: 'student', element: <HomePage /> },
      { path: 'student/dashboard', element: <HomePage /> },
      { path: 'student/enrollment', element: <HomePage /> },
      { path: 'student/documents', element: <HomePage /> },
      { path: 'student/requests', element: <HomePage /> },
      
      // Enseignant
      { path: 'teacher', element: <HomePage /> },
      { path: 'teacher/courses', element: <HomePage /> },
      { path: 'teacher/resources', element: <HomePage /> },
      { path: 'teacher/admin', element: <HomePage /> },
      
      // Dons
      { path: 'donate', element: <HomePage /> },
      { path: 'donate/benefactor', element: <HomePage /> },
      { path: 'donate/scholarships', element: <HomePage /> },
      
      // Contact
      { path: 'contact', element: <ContactPage /> },
      
      // Ressources
      { path: 'resources', element: <HomePage /> },
      { path: 'resources/pdf', element: <HomePage /> },
      { path: 'resources/gallery', element: <HomePage /> },
      { path: 'resources/official', element: <HomePage /> },
      
      // Admin
      { path: 'admin', element: <HomePage /> },
      { path: 'admin/content', element: <HomePage /> },
      { path: 'admin/users', element: <HomePage /> },
      { path: 'admin/statistics', element: <HomePage /> },
      { path: 'admin/settings', element: <HomePage /> },
      
      // Pages légales
      { path: 'legal', element: <LegalPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      
      // 404
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
