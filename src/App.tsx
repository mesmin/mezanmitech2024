import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIIntegration from './components/AIIntegration';
import Solutions from './components/Solutions';
import Training from './components/Training';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AIIntegration />
        <Solutions />
        <Training />
        <ContactForm />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} TechForge Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;