
import { useState } from 'react';


import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} navigateTo={navigateTo} />
      
      {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'team' && <TeamPage />}
      {currentPage === 'career' && <CareerPage />}
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

