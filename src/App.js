import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FAQ from './components/FAQs';
import HeroSection from './components/HeroSection';
import Teams from './components/Teams';
import Plan from './components/Plan';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <body>
      <div className='hero-background' style={{
        minHeight: "100vh",
        margin: 0,
        background: "linear-gradient(135deg,rgb(35, 113, 240),rgb(161, 211, 235))",
      }}>
        <Header />
        <HeroSection />
        <Features />
        <Testimonials />
        <Plan />
        <Teams />   
        <FAQ />
        <Footer />             
      </div>
    </body>
  );
}

export default App;