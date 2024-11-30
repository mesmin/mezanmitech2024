// src/pages/Appointment.tsx
import { Clock, CheckCircle, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Appointment() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your Free <span className="text-primary-500">Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a 15-minute session with our experts to discuss your project needs and explore how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Booking Info */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Session Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary-500" />
                    <span>30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-500" />
                    <span>Free Consultation</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>
                <div className="space-y-4">
                  <a href="tel:13054943162" className="flex items-center gap-3 text-gray-600 hover:text-primary-500">
                    <Phone className="h-5 w-5" />
                    <span>1 (305) 494-3162</span>
                  </a>
                  <a href="mailto:info@mezanmitech.com" className="flex items-center gap-3 text-gray-600 hover:text-primary-500">
                    <Mail className="h-5 w-5" />
                    <span>info@mezanmitech.com</span>
                  </a>
                  <a href="https://wa.me/13054943162" className="flex items-center gap-3 text-gray-600 hover:text-primary-500">
                    <MessageSquare className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="md:col-span-2">
  <div className="bg-white rounded-xl shadow-sm p-8">
    <iframe
      src="https://tidycal.com/mesmin/free-consultation"
      style={{ width: '100%', height: '800px', border: 'none' }}
      loading="lazy"></iframe>
  </div>
</div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Consultation',
                description: 'Get expert advice with no obligations or hidden fees.'
              },
              {
                title: 'Personalized Solutions',
                description: 'Discuss your specific needs and get tailored recommendations.'
              },
              {
                title: 'Quick Response',
                description: 'Book your slot instantly and get confirmation right away.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}