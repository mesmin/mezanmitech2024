import { useState } from 'react';
import { Code2, Database, Cloud, Shield, Terminal, Cpu } from 'lucide-react';

const trainings = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Master modern web development with React, Node.js, and cloud technologies.',
    modules: [
      'JavaScript/TypeScript Fundamentals',
      'React & Redux',
      'Node.js & Express',
      'Database Design & Implementation',
      'API Development',
      'Cloud Deployment'
    ]
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Learn to build and maintain scalable data infrastructure and pipelines.',
    modules: [
      'Data Modeling',
      'ETL Processes',
      'Big Data Technologies',
      'Data Warehousing',
      'Data Quality & Governance',
      'Performance Optimization'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Design and implement scalable cloud solutions using modern platforms.',
    modules: [
      'Cloud Fundamentals',
      'Infrastructure as Code',
      'Microservices Architecture',
      'Container Orchestration',
      'Cloud Security',
      'Cost Optimization'
    ]
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect systems and data with advanced security practices and tools.',
    modules: [
      'Security Fundamentals',
      'Threat Detection',
      'Incident Response',
      'Security Architecture',
      'Compliance & Auditing',
      'Penetration Testing'
    ]
  },
  {
    icon: Terminal,
    title: 'DevOps Practices',
    description: 'Implement efficient CI/CD pipelines and automation workflows.',
    modules: [
      'CI/CD Implementation',
      'Infrastructure Automation',
      'Monitoring & Logging',
      'Configuration Management',
      'Container Management',
      'Site Reliability Engineering'
    ]
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Build and deploy machine learning models for real-world applications.',
    modules: [
      'ML Fundamentals',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Model Deployment',
      'MLOps'
    ]
  }
];

export default function Training() {
  const [selectedTraining, setSelectedTraining] = useState(0);

  return (
    <section id="training" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your team's skills with our comprehensive training programs led by industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl cursor-pointer transition-all ${
                selectedTraining === index
                  ? 'ring-2 ring-primary-500 shadow-lg'
                  : 'shadow-sm hover:shadow-md'
              }`}
              onClick={() => setSelectedTraining(index)}
            >
              <training.icon className="h-12 w-12 text-primary-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{training.title}</h3>
              <p className="text-gray-600 mb-6">{training.description}</p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Modules:</h4>
                <ul className="space-y-2">
                  {training.modules.map((module, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <div className="h-1.5 w-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                      {module}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className="mt-8 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors"
                onClick={() => window.location.href = '#contact'}
              >
                Request Training
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}