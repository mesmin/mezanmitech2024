import { Code2, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#E6E6E6] text-gray-600">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             <img src="assets/images/logo/logo@2x.png" alt="Mezanmi Technologies Logo" className="h-20" />
            </div>
            <p className="mb-4">
              A software development and marketing firm empowering businesses with innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@mezanmi.com" className="hover:text-white transition-colors">
                  info@mezanmi.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel: 1-305-494-3162" className="hover:text-white transition-colors">
                  (305) 494-3162
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Lauderhill, Florida</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Mezanmi Technologies Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}