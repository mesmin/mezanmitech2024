import { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Building2, 
  FileText, 
  Store, 
  Share2, 
  CheckCircle2,
  Laptop,
  Brain,
  Sparkles
} from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: 'Artificial Intelligence (A.I.)',
    description: 'Harness the power of AI to transform your business operations and customer experiences.',
    isSpecial: true,
    cases: [
      {
        problem: 'Need for intelligent automation and decision-making',
        solution: 'Custom AI solutions integrated with existing systems',
        results: [
          'Automated complex decision processes',
          'Reduced operational costs by 40-60%',
          'Improved accuracy and consistency',
          'Enhanced customer experience'
        ],
        technologies: [
          'OpenAI GPT-4',
          'Azure Cognitive Services',
          'TensorFlow/PyTorch',
          'Python AI Libraries',
          'Natural Language Processing',
          'Machine Learning Pipeline Tools'
        ]
      },
      {
        problem: 'Unstructured data analysis and insights',
        solution: 'AI-powered data analytics and predictive modeling',
        results: [
          'Real-time business insights',
          'Predictive analytics capabilities',
          'Automated reporting',
          'Pattern recognition in complex data'
        ],
        technologies: [
          'Computer Vision APIs',
          'Scikit-learn',
          'Hugging Face Models',
          'AWS AI Services',
          'Deep Learning Frameworks',
          'MLOps Tools'
        ]
      }
    ]
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Custom software development solutions tailored to your business needs.',
    cases: [
      {
        problem: 'Need for specialized software solution',
        solution: 'Custom development with modern technologies',
        results: [
          'Improved business efficiency',
          'Automated key processes',
          'Reduced operational costs'
        ],
        technologies: [
          'React/Next.js',
          'Node.js/Express',
          'Python/Django',
          'PHP/Laravel',
          'Java/Spring Boot',
          'PostgreSQL/MySQL'
        ]
      },
      {
        problem: 'Legacy system modernization',
        solution: 'System refactoring and modern technology integration',
        results: [
          'Enhanced system performance',
          'Better user experience',
          'Easier maintenance'
        ],
        technologies: [
          'Modern JavaScript/TypeScript',
          'Docker/Kubernetes',
          'CI/CD Tools',
          'Cloud Platforms (AWS/Azure)',
          'Microservices Architecture'
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
        ],
        technologies: [
          'WordPress/WooCommerce',
          'Drupal',
          'Headless CMS',
          'PHP/MySQL',
          'HTML5/CSS3',
          'JavaScript/jQuery'
        ]
      },
      {
        problem: 'Poor website optimization',
        solution: 'SEO optimization and performance improvements',
        results: [
          'Higher search rankings',
          'Faster load times',
          'Increased visitor retention'
        ],
        technologies: [
          'Next.js/Gatsby',
          'Core Web Vitals Tools',
          'Google Analytics',
          'SEO Tools',
          'CDN Solutions',
          'Web Performance APIs'
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
        ],
        technologies: [
          'React Native',
          'Flutter',
          'Swift/iOS',
          'Kotlin/Android',
          'Firebase',
          'Mobile Analytics Tools'
        ]
      },
      {
        problem: 'Multiple platform support',
        solution: 'Cross-platform development with React Native',
        results: [
          'Consistent experience across devices',
          'Reduced development costs',
          'Faster time to market'
        ],
        technologies: [
          'React Native',
          'TypeScript',
          'Native Modules',
          'Redux/MobX',
          'Jest/Testing Library',
          'CI/CD for Mobile'
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
        ],
        technologies: [
          'PostgreSQL',
          'MySQL',
          'MongoDB',
          'Redis',
          'Data Modeling Tools',
          'Database Security Tools'
        ]
      },
      {
        problem: 'Data migration needs',
        solution: 'Seamless data migration and integration services',
        results: [
          'Zero data loss',
          'Minimal downtime',
          'Improved data structure'
        ],
        technologies: [
          'ETL Tools',
          'Data Migration Scripts',
          'Database Replication',
          'Backup Solutions',
          'Monitoring Tools'
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
        ],
        technologies: [
          'CRM Systems',
          'Business Intelligence Tools',
          'Process Automation',
          'Analytics Platforms',
          'Cloud Solutions'
        ]
      },
      {
        problem: 'Growth strategy needs',
        solution: 'Digital strategy development and implementation',
        results: [
          'Clear growth roadmap',
          'Improved market position',
          'Increased revenue'
        ],
        technologies: [
          'Market Analysis Tools',
          'Project Management Software',
          'Communication Platforms',
          'Workflow Automation',
          'Reporting Tools'
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
        solution: 'Custom e-commerce development',
        results: [
          'Increased online sales',
          'Better inventory management',
          'Improved customer experience'
        ],
        technologies: [
          'Shopify',
          'WooCommerce',
          'Magento',
          'Payment Gateways',
          'Inventory Management',
          'Analytics Tools'
        ]
      },
      {
        problem: 'Payment integration needs',
        solution: 'Secure payment gateway integration',
        results: [
          'Multiple payment options',
          'Secure transactions',
          'Better conversion rates'
        ],
        technologies: [
          'Stripe',
          'PayPal',
          'Square',
          'PCI Compliance Tools',
          'Fraud Detection',
          'SSL/Security'
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
        ],
        technologies: [
          'Google Analytics',
          'SEO Tools',
          'Marketing Automation',
          'Email Marketing Platforms',
          'Social Media Tools',
          'CRM Integration'
        ]
      },
      {
        problem: 'Social media management',
        solution: 'Professional social media management and strategy',
        results: [
          'Consistent brand messaging',
          'Increased followers',
          'Better customer engagement'
        ],
        technologies: [
          'Social Media Management Tools',
          'Content Creation Software',
          'Analytics Platforms',
          'Scheduling Tools',
          'Engagement Tracking',
          'Influencer Marketing Tools'
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
                className={`
                  ${solution.isSpecial ? 'sm:col-span-2 bg-gradient-to-r from-blue-50 to-purple-50' : 'bg-white'}
                  p-6 rounded-xl cursor-pointer transition-all
                  ${selectedSolution === index
                    ? 'ring-2 ring-primary-500 shadow-lg'
                    : 'shadow-sm hover:shadow-md'}
                `}
                onClick={() => {
                  setSelectedSolution(index);
                  setSelectedCase(0);
                }}
              >
                <div className={`
                  ${solution.isSpecial ? 'flex items-center gap-4' : ''}
                `}>
                  <solution.icon className={`
                    ${solution.isSpecial ? 'h-16 w-16' : 'h-10 w-10'}
                    text-primary-500 mb-4
                    ${solution.isSpecial ? 'animate-pulse' : ''}
                  `} />
                  {solution.isSpecial && (
                    <Sparkles className="h-6 w-6 text-yellow-400 absolute ml-12 mt-[-20px]" />
                  )}
                  <div>
                    <h3 className={`
                      ${solution.isSpecial ? 'text-2xl' : 'text-lg'}
                      font-semibold text-gray-900 mb-2
                    `}>
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{solution.description}</p>
                    <button className="text-primary-500 flex items-center text-sm font-medium hover:text-primary-600">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 lg:sticky lg:top-24 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {solutions[selectedSolution].title}
              {solutions[selectedSolution].isSpecial && (
                <Sparkles className="h-5 w-5 inline-block ml-2 text-yellow-400" />
              )}
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
                  <div className="mb-4">
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
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      <Laptop className="h-5 w-5 inline-block mr-2 text-primary-500" />
                      Relevant Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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