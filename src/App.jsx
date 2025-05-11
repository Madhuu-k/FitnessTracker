import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import EmpowerSection from './components/EmpowerSection';
import Footer from './components/Footer';
import './App2.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <EmpowerSection />
      <Footer />
    </div>
  );
}

export default App;