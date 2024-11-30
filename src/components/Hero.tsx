import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const rotatingTexts = [
  'I want a website for <span class="text-primary-300">my business</span>',
  'I want a website for <span class="text-primary-300">my presentation</span>',
  'I need <span class="text-primary-300">Artificial Intelligence (AI)</span> Training',
  'I need to manage my <span class="text-primary-300">social media</span>',
  'Help me build <span class="text-primary-300">software</span> for my organization to help us cut cost',
  'I have an <span class="text-primary-300">idea</span>, but does not know where to start'
];

const slides = [
  {
    bg: "bg-[url('/assets/images/slider/slider-bg1.png')] bg-cover bg-center",
    content: {
      title: 'Turn that <span class="text-primary-300">idea</span> into a <span class="text-primary-300">project</span>.',
      subtitle: 'We can walk you through all aspects of the process<br/>From <span class="text-primary-300">soup</span> to <span class="text-primary-300">nuts</span>',
      buttonText: "Hire Us Today!",
      buttonLink: "#hireus",
      isLight: true
    }
  },
  {
    bg: "bg-[url('/assets/images/slider/slider-bg2a.jpg')] bg-cover bg-center",
    content: {
      title: 'Your <span class="text-primary-300">needs</span> are important and they come <span class="text-primary-300">first!</span>',
      subtitle: 'We can review your site for <span class="text-primary-300">free!</span><br/>We want to understand your <span class="text-primary-300">priorities</span>',
      buttonText: "Get in Touch",
      buttonLink: "#contactus",
      isLight: true
    }
  },
  {
    bg: "bg-[url('/assets/images/slider/slider-bg3.png')] bg-center",
    content: {
      title: 'Our packages come with <span class="text-primary-300">simple pricing</span>.',
      subtitle: '<span class="text-primary-300">Mix</span> and <span class="text-primary-300">Match</span> our services as you please.',
      buttonText: "View Packages",
      buttonLink: "#pricing",
      isLight: true
    }
  },
  {
    bg: "bg-[url('/assets/images/slider/slider-bg2.png')] bg-cover bg-center",
    content: {
      title: "Let's break down the <span class='text-primary-300'>requirements</span> together",
      subtitle: "Stop spinning around and <span class='text-primary-300'>waste time</span> needlessly",
      buttonText: "Contact Us",
      buttonLink: "#contact",
      isLight: true
    }
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout>();

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

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

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative min-h-[80vh] overflow-hidden"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Rotating text banner */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-primary-900/80 py-3">
        <div className="container mx-auto px-6">
          <div
            className={`text-center text-white text-lg md:text-xl font-medium transition-opacity duration-500 ${isTextFading ? 'opacity-0' : 'opacity-100'
              }`}
            dangerouslySetInnerHTML={{ __html: rotatingTexts[currentText] }}
          />

        </div>
        <div className="absolute top-16 left-0 right-0 z-10">
          <div className="container mx-auto px-6 text-center">
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full backdrop-blur-sm transition-colors"
            >
              Free Consultation →
            </a>
          </div>
        </div>
      </div>


      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            ref={parallaxRef}
            className={`absolute inset-0 ${slide.bg} bg-cover bg-center transform`}
            style={{ willChange: 'transform' }}
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative h-full">
            <div className="container mx-auto px-6 h-full flex items-center">
              <div className="max-w-4xl mx-auto text-center">
                <h1
                  className={`text-4xl md:text-6xl font-bold mb-6 ${slide.content.isLight ? 'text-white' : 'text-gray-900'
                    }`}
                  dangerouslySetInnerHTML={{ __html: slide.content.title }}
                />

                <p
                  className={`text-xl md:text-2xl mb-8 ${slide.content.isLight ? 'text-gray-100' : 'text-gray-600'
                    }`}
                  dangerouslySetInnerHTML={{ __html: slide.content.subtitle }}
                />

                <a
                  href={slide.content.buttonLink}
                  className={`inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg transition-colors ${slide.content.isLight
                      ? 'bg-white text-primary-900 hover:bg-primary-50'
                      : 'bg-primary-500 text-white hover:bg-primary-600'
                    }`}
                >
                  {slide.content.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => { prevSlide(); stopAutoplay(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => { nextSlide(); stopAutoplay(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrentSlide(index); stopAutoplay(); }}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}