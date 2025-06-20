import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Specialists from '../components/Specialists';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import InnovationSection from '../components/InnovationSection';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <InnovationSection />
      <Specialists />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
