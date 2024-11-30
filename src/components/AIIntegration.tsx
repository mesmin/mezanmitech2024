import { Brain, Bot, BarChart, Zap, ArrowBigRightDash, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Custom AI Solutions',
    description: '<b>Confused on where to start?</b><br/> Tailor-made AI solutions designed specifically for your business needs and industry requirements. <u><i>Free initial consultation</i></u> on what AI can do for your business'
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: '<b>Do more with less</b><br/>We help businesses save time by automating repetitive tasks and workflows with AI-powered systems and tools, so you can focus on what matters most.'
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics',
    description: '<b>Understand your customers like never before.</b ><br/>Leverage your AI to analyze customer data to forecast trends, optimize operations, make data-driven decisions and deliver personalized experiences in order to build loyalty and trust.'
  },
  {
    icon: ArrowBigRightDash,
    title: 'Future-Proof Your Business',
    description: '<b>Your Technology partern</b><br/>We will research the right tools for long-term success by keeping you at the forefront of innovation and market trends.'
  }
];

export default function AIIntegration() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
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
              <feature.icon className="h-12 w-12 text-primary-500 mb-6" />
              <h3 
  className="text-xl font-semibold text-gray-900 mb-3"
  dangerouslySetInnerHTML={{ __html: feature.title }}
/>
<p 
  className="text-gray-600"
  dangerouslySetInnerHTML={{ __html: feature.description }}
/>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-16">
  <a 
    href="#contact" 
    className="inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-primary-500 rounded-xl hover:bg-primary-600 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
  >
    Let's Do It! 
    <ArrowRight className="ml-3 h-8 w-8" />
  </a>
</div>
    </section>
  );
}