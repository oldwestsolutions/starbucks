import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Journey = () => {
  const steps = [
    {
      title: "Create Your Account",
      description: "Sign up for free and connect your credit cards securely.",
      icon: "📱"
    },
    {
      title: "Set Your Goals",
      description: "Choose your debt management strategy and credit score targets.",
      icon: "🎯"
    },
    {
      title: "Start Saving",
      description: "Link your daily coffee purchases to automatic debt payments.",
      icon: "💰"
    },
    {
      title: "Track Progress",
      description: "Monitor your credit score improvements and debt reduction.",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-forest-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-bold text-forest-900">Start Your Journey</h1>
            <Link
              to="/login"
              className="bg-forest-500 hover:bg-forest-600 text-white px-6 py-2 rounded-lg transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-900 mb-6">
            Your Path to Financial Freedom
          </h2>
          <p className="text-lg text-forest-700">
            Follow these simple steps to transform your daily coffee habit into a powerful tool for building credit and managing debt.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-sm p-8 border border-forest-100"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{step.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-forest-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-forest-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-forest-900 mb-4">
            Ready to Transform Your Financial Future?
          </h3>
          <p className="text-forest-700 mb-8">
            Join thousands of others who are building credit while enjoying their daily coffee.
          </p>
          <Link
            to="/login"
            className="inline-block bg-forest-500 hover:bg-forest-600 text-white px-8 py-4 rounded-lg transition duration-300 text-lg font-medium"
          >
            Create Your Account
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Journey; 