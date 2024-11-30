import { useState } from 'react';
import { 
  Code2, // Development
  Globe, // General Website/CMS
  Smartphone, // Mobile App
  Database, // Database Management
  Building2, // Business Development
  FileText, // Documentation Support
  Store, // E-commerce
  Share2, // Marketing & Social Media
  CheckCircle2
} from 'lucide-react';

const solutions = [
  {
    icon: Code2,
    title: 'Development',
    description: 'Custom software development solutions tailored to your business needs.',
    cases: [
      {
        problem: 'Need for specialized software solution',
        solution: 'Custom development with modern technologies (PHP, JavaScript, React, Node.js, Python)',
        results: [
          'Improved business efficiency',
          'Automated key processes',
          'Reduced operational costs'
        ]
      },
      {
        problem: 'Legacy system modernization',
        solution: 'System refactoring and modern technology integration',
        results: [
          'Enhanced system performance',
          'Better user experience',
          'Easier maintenance'
        ]
      }
    ]
  },
  {
    icon: Globe,
    title: 'General Website/CMS',
    description: 'Professional website development and content management solutions.',
    cases: [
      {
        problem: 'Outdated or hard-to-manage website',
        solution: 'Modern CMS implementation with WordPress, Drupal, or custom solutions',
        results: [
          'Easy content updates',
          'Improved site performance',
          'Better user engagement'
        ]
      },
      {
        problem: 'Poor website optimization',
        solution: 'SEO optimization and performance improvements',
        results: [
          'Higher search rankings',
          'Faster load times',
          'Increased visitor retention'
        ]
      }
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Native and cross-platform mobile application development.',
    cases: [
      {
        problem: 'Need for mobile presence',
        solution: 'Custom mobile app development (iOS, Android, Cross-platform)',
        results: [
          'Expanded market reach',
          'Improved user engagement',
          'Better customer service'
        ]
      },
      {
        problem: 'Multiple platform support',
        solution: 'Cross-platform development with React Native',
        results: [
          'Consistent experience across devices',
          'Reduced development costs',
          'Faster time to market'
        ]
      }
    ]
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Comprehensive database design, optimization, and maintenance.',
    cases: [
      {
        problem: 'Data management challenges',
        solution: 'Custom database design and optimization',
        results: [
          'Improved data organization',
          'Better data security',
          'Enhanced performance'
        ]
      },
      {
        problem: 'Data migration needs',
        solution: 'Seamless data migration and integration services',
        results: [
          'Zero data loss',
          'Minimal downtime',
          'Improved data structure'
        ]
      }
    ]
  },
  {
    icon: Building2,
    title: 'Business Development',
    description: 'Strategic business growth and development solutions.',
    cases: [
      {
        problem: 'Market expansion challenges',
        solution: 'Digital transformation and business process optimization',
        results: [
          'Increased market presence',
          'Improved operational efficiency',
          'Better customer insights'
        ]
      },
      {
        problem: 'Growth strategy needs',
        solution: 'Digital strategy development and implementation',
        results: [
          'Clear growth roadmap',
          'Improved market position',
          'Increased revenue'
        ]
      }
    ]
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'Comprehensive technical documentation and support services.',
    cases: [
      {
        problem: 'Lack of proper documentation',
        solution: 'Professional technical writing and documentation',
        results: [
          'Clear system documentation',
          'Improved knowledge transfer',
          'Better team collaboration'
        ]
      },
      {
        problem: 'Training material needs',
        solution: 'Custom training material development',
        results: [
          'Enhanced team learning',
          'Reduced support queries',
          'Better system adoption'
        ]
      }
    ]
  },
  {
    icon: Store,
    title: 'E-Commerce',
    description: 'Complete e-commerce solutions for your business.',
    cases: [
      {
        problem: 'Online store requirements',
        solution: 'Custom e-commerce development (Shopify, WooCommerce, Custom)',
        results: [
          'Increased online sales',
          'Better inventory management',
          'Improved customer experience'
        ]
      },
      {
        problem: 'Payment integration needs',
        solution: 'Secure payment gateway integration',
        results: [
          'Multiple payment options',
          'Secure transactions',
          'Better conversion rates'
        ]
      }
    ]
  },
  {
    icon: Share2,
    title: 'Marketing & Social Media',
    description: 'Digital marketing and social media management solutions.',
    cases: [
      {
        problem: 'Digital marketing needs',
        solution: 'Comprehensive digital marketing strategy and implementation',
        results: [
          'Increased online presence',
          'Better brand awareness',
          'Higher engagement rates'
        ]
      },
      {
        problem: 'Social media management',
        solution: 'Professional social media management and strategy',
        results: [
          'Consistent brand messaging',
          'Increased followers',
          'Better customer engagement'
        ]
      }
    ]
  }
];

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [selectedCase, setSelectedCase] = useState(0);

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of services designed to help your business grow and succeed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid sm:grid-cols-2 gap-6 content-start">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl cursor-pointer transition-all ${
                  selectedSolution === index
                    ? 'ring-2 ring-primary-500 shadow-lg'
                    : 'shadow-sm hover:shadow-md'
                }`}
                onClick={() => {
                  setSelectedSolution(index);
                  setSelectedCase(0);
                }}
              >
                <solution.icon className="h-10 w-10 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{solution.description}</p>
                <button className="text-primary-500 flex items-center text-sm font-medium hover:text-primary-600">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 lg:sticky lg:top-24 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {solutions[selectedSolution].title}
            </h3>
            <div className="space-y-6">
              {solutions[selectedSolution].cases.map((caseStudy, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedCase === index
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                  onClick={() => setSelectedCase(index)}
                >
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">The Challenge:</h4>
                    <p className="text-gray-600">{caseStudy.problem}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Solution:</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}