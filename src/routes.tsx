
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

// Pages d'accueil et pages légales
// Pages principales
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import LegalPage from '@/pages/LegalPage';
import PrivacyPage from '@/pages/PrivacyPage';

// Pages À propos
import AboutPage from '@/pages/about/AboutPage';
import MissionPage from '@/pages/about/MissionPage';
import TeamPage from '@/pages/about/TeamPage';
import PartnersPage from '@/pages/about/PartnersPage';

// Pages Formations
import FormationsPage from '@/pages/formations/FormationsPage';
// import CoursesPage from '@/pages/formations/CoursesPage';
// import ProgramsPage from '@/pages/formations/ProgramsPage';
// import UniversityPage from '@/pages/formations/UniversityPage';
// import AdmissionPage from '@/pages/formations/AdmissionPage';
// import CitizenshipPage from '@/pages/formations/CitizenshipPage';

// Pages Événements
// import EventsPage from '@/pages/events/EventsPage';
// import EventDetailPage from '@/pages/events/EventDetailPage';
// import CalendarPage from '@/pages/events/CalendarPage';

// Pages Actualités
// import NewsPage from '@/pages/news/NewsPage';
// import ArticlesPage from '@/pages/news/ArticlesPage';
// import CampusLifePage from '@/pages/news/CampusLifePage';
// import TestimonialsPage from '@/pages/news/TestimonialsPage';

// Pages Étudiants
// import StudentLoginPage from '@/pages/student/StudentLoginPage';
// import StudentDashboardPage from '@/pages/student/StudentDashboardPage';
// import EnrollmentPage from '@/pages/student/EnrollmentPage';
// import DocumentsPage from '@/pages/student/DocumentsPage';
// import RequestsPage from '@/pages/student/RequestsPage';

// Pages Enseignants
// import TeacherLoginPage from '@/pages/teacher/TeacherLoginPage';
// import TeacherCoursesPage from '@/pages/teacher/TeacherCoursesPage';
// import ResourcesForTeachersPage from '@/pages/teacher/ResourcesForTeachersPage';
// import TeacherAdminPage from '@/pages/teacher/TeacherAdminPage';

// Pages Dons
// import DonatePage from '@/pages/donate/DonatePage';
// import BenefactorPage from '@/pages/donate/BenefactorPage';
// import ScholarshipsPage from '@/pages/donate/ScholarshipsPage';

// Page Contact
import ContactPage from '@/pages/contact/ContactPage';

// Pages Ressources
// import ResourcesPage from '@/pages/resources/ResourcesPage';
// import PDFResourcesPage from '@/pages/resources/PDFResourcesPage';
// import GalleryPage from '@/pages/resources/GalleryPage';
// import OfficialDocsPage from '@/pages/resources/OfficialDocsPage';

// Pages Admin
// import AdminPage from '@/pages/admin/AdminPage';
// import ContentManagementPage from '@/pages/admin/ContentManagementPage';
// import UsersManagementPage from '@/pages/admin/UsersManagementPage';
// import StatisticsPage from '@/pages/admin/StatisticsPage';
// import SettingsPage from '@/pages/admin/SettingsPage';

// Définition des routes
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
      { path: 'formations/courses', element: <HomePage /> },
      { path: 'formations/programs', element: <HomePage /> },
      { path: 'formations/university', element: <HomePage /> },
      { path: 'formations/admission', element: <HomePage /> },
      { path: 'formations/citizenship', element: <HomePage /> },
      
      // Événements
      { path: 'events', element: <HomePage /> },
      { path: 'events/:id', element: <HomePage /> },
      { path: 'events/calendar', element: <HomePage /> },
      
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
