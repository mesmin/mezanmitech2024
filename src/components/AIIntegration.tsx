import { Brain, Bot, ChartBar, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Custom AI Solutions',
    description: 'Tailor-made AI solutions designed specifically for your business needs and industry requirements.'
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Automate repetitive tasks and workflows with AI-powered systems that learn and improve over time.'
  },
  {
    icon: ChartBar,
    title: 'Predictive Analytics',
    description: 'Leverage your data to forecast trends, optimize operations, and make data-driven decisions.'
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.'
  }
];

export default function AIIntegration() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Integration for Your Business</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with cutting-edge AI solutions that drive efficiency,
            innovation, and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <feature.icon className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}