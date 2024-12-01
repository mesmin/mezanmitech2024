import { useState, useEffect } from 'react';
import { ArrowRight, Code2, Database, Cloud, Cpu, Lightbulb, Linkedin, Facebook } from 'lucide-react';

const rotatingTexts = [
  'I want a website for <span class="text-primary-300">my business</span>',
  'I want a website for <span class="text-primary-300">my presentation</span>',
  'I need <span class="text-primary-300">Artificial Intelligence (AI)</span> Training',
  'I need to manage my <span class="text-primary-300">social media</span>',
  'Help me build <span class="text-primary-300">software</span> for my organization to help us cut cost',
  'I have an <span class="text-primary-300" style="color: red">idea </span><Lightbulb className="h-6 w-6 text-primary-300" />, but I do not know where to start',
  'We need <span class="text-secondary-300">development or testing resources</span>'
];

const techIcons = [Code2, Database, Cloud, Cpu, Linkedin, Facebook, Lightbulb];

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsTextFading(true);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        setIsTextFading(false);
      }, 500);
    }, 4000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center overflow-hidden">
      {/* Animated Technical Background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-grid-white/5 bg-[size:20px_20px]" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const IconComponent = techIcons[Math.floor(Math.random() * techIcons.length)];
            return (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `pulse ${2 + Math.random() * 3}s infinite`,
                  opacity: 0.1
                }}
              >
                <IconComponent size={20 + Math.floor(Math.random() * 30)} className="text-white" />
              </div>
            );
          })}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-primary-900/80" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`text-3xl md:text-5xl font-bold text-white mb-12 transition-opacity duration-500 ${
              isTextFading ? 'opacity-0' : 'opacity-100'
            }`}
            dangerouslySetInnerHTML={{ __html: rotatingTexts[currentText] }}
          />

          <div className="max-w-xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/appointment"
                className="group relative overflow-hidden px-8 py-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center space-x-3">
                  <span className="text-2xl font-bold text-primary-900 group-hover:text-white transition-colors duration-300">
                    Schedule Your Free Strategy Session
                  </span>
                  <ArrowRight className="h-6 w-6 text-primary-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="relative mt-2 text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  30-min consultation with our tech experts • Limited spots available
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}