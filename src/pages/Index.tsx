
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Research from '../components/Research';
import Publications from '../components/Publications';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
