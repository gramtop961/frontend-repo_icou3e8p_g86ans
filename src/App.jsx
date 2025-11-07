import React from 'react';
import Hero from './components/Hero';
import WeeklyMission from './components/WeeklyMission';
import ProgressMap from './components/ProgressMap';
import WhyItWorks from './components/WhyItWorks';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-8 sm:px-6 lg:px-8">
        <Hero />
        <WeeklyMission />
        <ProgressMap />
        <WhyItWorks />

        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
          Built for Experiment Labs — a vision of applied learning where work unlocks access.
        </footer>
      </div>
    </div>
  );
}

export default App;
