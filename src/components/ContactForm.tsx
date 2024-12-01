import { useState } from 'react';
import { Mail, Phone, Building2, Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const departments = [
  'AI Support',
  'Development',
  'Sales',
  'Marketing',
  'Customer Support',
  'Other'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Development',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Add tl=false to the URL and append parameters
      const scriptUrl = new URL('https://script.google.com/macros/s/AKfycbzIW0Am6Y9AKO1wbdPfyTKmCmeEqLZhHRqYUwZzmKPLdzEPua3Uops9vtkufe2RsfcpNA/exec');
      scriptUrl.searchParams.append('tl', 'false');
      
      // Append form data as URL parameters
      Object.entries(formData).forEach(([key, value]) => {
        scriptUrl.searchParams.append(key, value.toString());
      });

      const response = await fetch(scriptUrl.toString(), {
        method: 'GET', // Changed to GET to avoid CORS
        mode: 'no-cors' // This allows the request to proceed
      });

      // Since we're using no-cors, we won't get a readable response
      // We'll assume success if no error was thrown
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'Development',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to discuss your project or any questions you may have.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:info@mezanmitech.com" 
                   className="flex items-center text-gray-600 hover:text-primary-500">
                  <Mail className="h-5 w-5 mr-3" />
                  info@mezanmitech.com
                </a>
                <a href="tel:13054943162"
                   className="flex items-center text-gray-600 hover:text-primary-500">
                  <Phone className="h-5 w-5 mr-3" />
                  1 (305) 494-3162
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/mezanmitech" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-primary-500">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/mezanmitech" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-primary-500">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/company/mezanmitech" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-primary-500">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://wa.me/13054943162" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-primary-500">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <select
                  name="department"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Message'}
                </button>

                {status === 'success' && (
                  <p className="mt-4 text-green-600 text-center">Thank you for your message! We'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again or contact us directly.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}