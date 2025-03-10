import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FAQ from './components/FAQs';
import HeroSection from './components/HeroSection';
import Teams from './components/Teams';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <body>
      <div className='hero-background'>
        <Header />
        <HeroSection />
        <Features />
        <Testimonials />
        <Teams />   
        <FAQ />
        <Footer />             
      </div>
    </body>
  );
}

export default App;