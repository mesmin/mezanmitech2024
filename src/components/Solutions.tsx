import { useState } from 'react';
import { Brain, Gauge, Lock, Smartphone, Store, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Store,
    title: 'E-commerce Solutions',
    description: 'Build scalable online stores with secure payment processing and inventory management.',
    cases: [
      {
        problem: 'High cart abandonment rates and poor mobile experience',
        solution: 'Implemented a streamlined checkout process and responsive design, reducing cart abandonment by 45%',
        results: ['45% reduction in cart abandonment', '3x increase in mobile sales', 'Improved customer satisfaction scores']
      },
      {
        problem: 'Manual inventory management causing stockouts',
        solution: 'Developed automated inventory tracking system with predictive reordering',
        results: ['99.9% inventory accuracy', 'Zero stockouts in 6 months', 'Reduced operating costs by 30%']
      }
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    cases: [
      {
        problem: 'Inconsistent user experience across platforms',
        solution: 'Built a cross-platform app using React Native with shared business logic',
        results: ['Single codebase for iOS and Android', '40% faster development cycle', '4.8+ star ratings on both platforms']
      },
      {
        problem: 'Poor app performance and high battery consumption',
        solution: 'Optimized app architecture and implemented efficient background processing',
        results: ['60% reduction in battery usage', '2x faster app loading times', 'Increased user retention by 35%']
      }
    ]
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Implement machine learning and AI solutions to automate and optimize processes.',
    cases: [
      {
        problem: 'Manual data analysis causing delayed decision making',
        solution: 'Implemented ML-powered predictive analytics dashboard',
        results: ['85% faster insights generation', 'Predicted trends with 92% accuracy', 'Automated 70% of reporting tasks']
      },
      {
        problem: 'High customer service response times',
        solution: 'Developed AI chatbot with natural language processing',
        results: ['24/7 instant customer support', '75% reduction in support tickets', '90% positive feedback rate']
      }
    ]
  },
  {
    icon: Users,
    title: 'Enterprise Software',
    description: 'Custom enterprise applications that streamline operations and boost productivity.',
    cases: [
      {
        problem: 'Disconnected systems causing data silos',
        solution: 'Built integrated enterprise platform with unified data architecture',
        results: ['Single source of truth for all departments', '65% improvement in data accuracy', 'Reduced manual data entry by 80%']
      },
      {
        problem: 'Complex approval workflows slowing operations',
        solution: 'Implemented smart workflow automation system',
        results: ['90% faster approval processes', 'Real-time tracking of requests', 'Improved compliance tracking']
      }
    ]
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Robust security solutions to protect your digital assets and customer data.',
    cases: [
      {
        problem: 'Vulnerable legacy systems exposing sensitive data',
        solution: 'Implemented zero-trust architecture and end-to-end encryption',
        results: ['Zero security breaches since implementation', 'Achieved ISO 27001 certification', 'Enhanced customer trust']
      },
      {
        problem: 'Increasing phishing attacks on employees',
        solution: 'Developed AI-powered threat detection system with employee training',
        results: ['95% reduction in successful phishing attempts', 'Real-time threat monitoring', 'Improved security awareness']
      }
    ]
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Enhance your existing systems for better speed and efficiency.',
    cases: [
      {
        problem: 'Slow application performance under high load',
        solution: 'Implemented microservices architecture with load balancing',
        results: ['99.99% uptime achievement', '3x faster response times', 'Seamless scaling during peak loads']
      },
      {
        problem: 'High infrastructure costs with underutilized resources',
        solution: 'Developed cloud-native architecture with automatic scaling',
        results: ['40% reduction in hosting costs', 'Optimal resource utilization', 'Improved environmental sustainability']
      }
    ]
  }
];

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(0);
  const [selectedCase, setSelectedCase] = useState<number | null>(0);

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore how we've solved real business challenges with innovative software solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid sm:grid-cols-2 gap-6 content-start">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer ${
                  selectedSolution === index ? 'ring-2 ring-indigo-600' : ''
                }`}
                onClick={() => {
                  setSelectedSolution(index);
                  setSelectedCase(0);
                }}
              >
                <solution.icon className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{solution.description}</p>
                <button className="text-indigo-600 flex items-center text-sm font-medium">
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 lg:sticky lg:top-24 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {solutions[selectedSolution].title} Case Studies
            </h3>
            <div className="space-y-6">
              {solutions[selectedSolution].cases.map((caseStudy, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedCase === index
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
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
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
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