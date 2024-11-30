// src/pages/Home.tsx
import Hero from '../components/Hero';
import CompanyDescription from '../components/CompanyDescription';
import AIIntegration from '../components/AIIntegration';
import Solutions from '../components/Solutions';
import Industries from '../components/Industries';
import Training from '../components/Training';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyDescription />
      <AIIntegration />
      <Solutions />
      <Industries />
      <Training />
      <Pricing />
      <ContactForm />
    </main>
  );
}