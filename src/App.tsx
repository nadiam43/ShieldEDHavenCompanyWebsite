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
  // Keep track of which page is currently active
  const [currentPage, setCurrentPage] = useState('home');

  // Function to navigate to a different page
  const navigateTo = (page: string) => {
    setCurrentPage(page); // update current page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top smoothly
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Navigation bar */}
      <Navigation currentPage={currentPage} navigateTo={navigateTo} />
      
      {/* Conditional rendering of pages based on currentPage */}
      {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'team' && <TeamPage />}
      {currentPage === 'career' && <CareerPage />}
      {currentPage === 'contact' && <ContactPage />}
      
      {/* Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
