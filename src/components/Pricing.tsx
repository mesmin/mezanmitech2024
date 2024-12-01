import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Package A',
    subtitle: 'Single Service',
    price: '1K',
    period: '/ month',
    features: [
      'Full time service support',
      '24 hours Support',
      'Option to Renew',
      'All hour free support'
    ],
    isPopular: false
  },
  {
    name: 'Package B',
    subtitle: 'IT Services',
    price: '2.5K',
    period: '/ month',
    features: [
      'Full time service support',
      '24 hours Support',
      'Free 1-hour initial consultation',
      'All hour free support',
      'Option to Renew'
    ],
    isPopular: true
  },
  {
    name: 'Package C',
    subtitle: 'Vendor Service to Vendor',
    price: '5K',
    period: '/ month',
    features: [
      'Full time service support',
      '24/7 Support',
      'Free ongoing consultation',
      'All hour free support',
      'Option to Renew',
      'Priority response time'
    ],
    isPopular: false
  },
  {
    name: 'Package D',
    subtitle: 'Project Specific Services',
    price: '70',
    period: '/ hour',
    features: [
      'Single dedicated Project',
      'Free Initial Consultation',
      'Dedicated Project Leader',
      'Support during project'
    ],
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
  <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-600">
            Mix and match any of the services we offer. Contact us for more info.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl ${
                pkg.isPopular
                  ? 'ring-2 ring-primary-500 shadow-lg scale-105'
                  : 'border border-gray-200 shadow-sm'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-primary-500 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-500">{pkg.subtitle}</p>
                </div>

                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900">${pkg.price}</span>
                  <span className="text-gray-600 ml-1">{pkg.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg transition-colors ${
                    pkg.isPopular
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}