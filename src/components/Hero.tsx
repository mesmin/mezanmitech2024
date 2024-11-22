import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="container mx-auto px-6 py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <Code className="h-12 w-12 text-indigo-400" />
            <Globe className="h-12 w-12 text-indigo-300" />
            <Cpu className="h-12 w-12 text-indigo-200" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Ideas Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Digital Reality</span>
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            We craft innovative software solutions that drive business growth and enhance user experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-indigo-200 border border-indigo-400 hover:bg-indigo-800/50 transition-colors">
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}