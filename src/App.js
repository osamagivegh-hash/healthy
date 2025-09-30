import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AppPreviewSection from './components/AppPreviewSection';
import SubscriptionSection from './components/SubscriptionSection';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        {/* Navigation */}
        <Navigation />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* App Preview Section */}
        <AppPreviewSection />
        
        {/* Subscription Section */}
        <SubscriptionSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
