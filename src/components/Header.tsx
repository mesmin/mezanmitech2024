import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">TechForge Solutions</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-indigo-600 transition-colors">Solutions</a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#process" className="text-gray-600 hover:text-indigo-600 transition-colors">Process</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#solutions" className="text-gray-600 hover:text-indigo-600 transition-colors">Solutions</a>
              <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#process" className="text-gray-600 hover:text-indigo-600 transition-colors">Process</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}