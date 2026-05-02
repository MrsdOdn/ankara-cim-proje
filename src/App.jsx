import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import MapSection from './sections/MapSection';
import Footer from './components/Footer';
import Features from './sections/Features';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Sayfa İçeriği Başlangıcı */}
      <main>
        <Hero />
        <Services />
        <Features />
        <Portfolio />
        <MapSection />
        
      </main>
      {/* Sayfa İçeriği Sonu */}
      <Footer />
    </div>
  );
}

export default App;