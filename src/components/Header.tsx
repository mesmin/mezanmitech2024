import { useState } from 'react';
import { Code2, Menu, X, Facebook, Twitter, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar with contact info and social icons */}


      {/* Main navigation */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="h-10 bg-gray-400">
          <div className="fixed top-0 left-0 right-0 z-50 bg-gray-400 text-white py-2">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-6">
                  <a href="mailto:info@mezanmitech.com" className="flex items-center text-sm hover:text-primary-300">
                    <Mail className="h-4 w-4 mr-2" />
                    info@mezanmitech.com
                  </a>
                  <a href="tel:13054943162" className="flex items-center text-sm hover:text-primary-300">
                    <Phone className="h-4 w-4 mr-2" />
                    1 (305) 494-3162
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <a href="https://www.facebook.com/mezanmitech" target="_blank" rel="noopener noreferrer"
                    className="hover:text-primary-300">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="https://twitter.com/mezanmitech" target="_blank" rel="noopener noreferrer"
                    className="hover:text-primary-300">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/mezanmitech" target="_blank" rel="noopener noreferrer"
                    className="hover:text-primary-300">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="https://wa.me/13054943162" target="_blank" rel="noopener noreferrer"
                    className="hover:text-primary-300">
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <a href='/'>
                <img src="assets/images/logo/logo@2x.png" alt="Mezanmi Technologies Logo" className="h-20" />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
  <a href="/" className="text-gray-600 hover:text-primary-500 transition-colors">Home</a>
  <a href="/#solutions" className="text-gray-600 hover:text-primary-500 transition-colors">Services</a>
  <a href="/#pricing" className="text-gray-600 hover:text-primary-500 transition-colors">Hire Us!</a>
  <a href="/appointment" className="text-gray-600 hover:text-primary-500 transition-colors">Book Now</a>
  <a href="/#contact" className="text-gray-600 hover:text-primary-500 transition-colors">Contact</a>
</div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
  <div className="md:hidden mt-4 pb-4">
    <div className="flex flex-col space-y-4">
      <a href="/" className="text-gray-600 hover:text-primary-500 transition-colors">Home</a>
      <a href="/#solutions" className="text-gray-600 hover:text-primary-500 transition-colors">Services</a>
      <a href="/#pricing" className="text-gray-600 hover:text-primary-500 transition-colors">Hire Us!</a>
      <a href="/#contact" className="text-gray-600 hover:text-primary-500 transition-colors">Contact</a>
    </div>
  </div>
)}
        </nav>
      </header>
    </>
  );
}