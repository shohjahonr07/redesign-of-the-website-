
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BrandGrid from '../components/BrandGrid';
import DealsSection from '../components/DealsSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { cars } from '../data/cars';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrandGrid />
      <DealsSection cars={cars} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
