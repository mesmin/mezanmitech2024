import { Calendar, Clock } from 'lucide-react';

export default function Appointment() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule a Consultation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book a free 30-minute consultation with our experts to discuss your project needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="h-6 w-6 text-primary-500" />
              <div>
                <h3 className="text-lg font-semibold">30 Minutes</h3>
                <p className="text-gray-600">Free Initial Consultation</p>
              </div>
            </div>
            
            {/* TinyCal Integration */}
            <div 
              className="tinycal-booking"
              data-calendar="https://book.tinycal.com/your-calendar-url"
            />
          </div>
        </div>
      </div>
    </section>
  );
}