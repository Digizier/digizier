import React from 'react';
import ServicesGrid from '../components/ServicesGrid';
import N8nSimulator from '../components/N8nSimulator';
import CostCalculator from '../components/CostCalculator';

export default function ServicesPage({ setActivePage }) {
  return (
    <div className="space-y-16 py-6">
      {/* Services Grid */}
      <ServicesGrid onBookClick={() => setActivePage('contact')} />

      {/* Simulator */}
      <N8nSimulator />

      {/* Estimator */}
      <CostCalculator onBookClick={() => setActivePage('contact')} />
    </div>
  );
}
