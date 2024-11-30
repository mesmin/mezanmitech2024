import { useState, useEffect } from 'react';
import { Building2, ShoppingBag, GraduationCap, HeartPulse, Users, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: 'State Government',
    description: 'Provide secure application and interface for 27,000 state employees.',
    meta: 'User Interface, Database'
  },
  {
    icon: ShoppingBag,
    name: 'Money Transfer',
    description: 'Rewrite legacy application with new technologies for users across many countries.',
    meta: 'All aspects of development'
  },
  {
    icon: HeartPulse,
    name: 'Health Industry',
    description: 'Contribute to food service management application to impact large population along with scheduling.',
    meta: 'Database development'
  },
  {
    icon: GraduationCap,
    name: 'Financial Aid',
    description: 'Create application to manage clients Data while handling extensive and changing government requirements.',
    meta: 'Project Management, Team Lead, Development'
  }
];

export default function Industries() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <section className="py-24 bg-[url('/assets/images/art/parallax1.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-primary-900/80" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Some of the Industries We Worked With</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Slider */}
          <div className="overflow-hidden relative">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-8"
                >
                  <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                    <blockquote className="text-white text-xl mb-6 text-center">
                      {industry.description}
                    </blockquote>
                    
                    <div className="text-center">
                      <industry.icon className="h-16 w-16 mx-auto text-primary-300 mb-4" />
                      <h5 className="text-xl font-semibold text-white mb-2">{industry.name}</h5>
                      <p className="text-primary-200">{industry.meta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}