import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;