import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const features = [
    {
      title: "Smart Payment Scheduling",
      description: "Our AI-powered system analyzes your spending patterns and coffee habits to create the optimal payment schedule.",
      image: "/images/payment-scheduling.jpg"
    },
    {
      title: "Rewards & Milestones",
      description: "Earn points for every payment and unlock special rewards as you reach debt reduction milestones.",
      image: "/images/rewards.jpg"
    },
    {
      title: "Progress Tracking",
      description: "Visualize your debt reduction journey with interactive charts and progress indicators.",
      image: "/images/progress-tracking.jpg"
    },
    {
      title: "Financial Education",
      description: "Access free resources and tips to improve your financial literacy and credit management skills.",
      image: "/images/education.jpg"
    }
  ];

  const incentives = [
    {
      title: "Early Payment Bonus",
      description: "Get extra points when you make payments before your scheduled time.",
      image: "/images/early-payment.jpg"
    },
    {
      title: "Consistency Rewards",
      description: "Maintain a streak of regular payments to unlock special bonuses and rewards.",
      image: "/images/consistency.jpg"
    },
    {
      title: "Milestone Achievements",
      description: "Celebrate your progress with special rewards at key debt reduction milestones.",
      image: "/images/milestones.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-forest-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Grid Container */}
        <div className="grid grid-cols-12 gap-8">
          {/* Introduction - Full Width */}
          <div className="col-span-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-forest-900 mb-8">
                Your Journey to Financial Freedom
              </h2>
              <p className="text-xl text-forest-700">
                Transform your daily coffee ritual into a powerful tool for building credit and managing debt. 
                We don't directly connect with creditors, but we provide the tools and motivation you need to succeed.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="col-span-12 mb-20">
            <h3 className="text-4xl font-bold text-forest-900 mb-16 text-center">How It Works</h3>
            <div className="grid grid-cols-12 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="col-span-12 md:col-span-6 bg-white rounded-3xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-5 p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-forest-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                          {index + 1}
                        </div>
                        <h4 className="text-2xl font-bold text-forest-900">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-lg text-forest-700">
                        {feature.description}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-7 h-[300px] md:h-auto">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Incentives Section */}
          <div className="col-span-12 mb-20">
            <h3 className="text-4xl font-bold text-forest-900 mb-16 text-center">Incentives & Rewards</h3>
            <div className="grid grid-cols-12 gap-8">
              {incentives.map((incentive, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="col-span-12 md:col-span-4 bg-forest-900 text-white rounded-3xl overflow-hidden"
                >
                  <div className="h-[400px] relative">
                    <img
                      src={incentive.image}
                      alt={incentive.title}
                      className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900 to-transparent p-8 flex flex-col justify-end">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-forest-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                          {index + 1}
                        </div>
                        <h4 className="text-2xl font-bold">
                          {incentive.title}
                        </h4>
                      </div>
                      <p className="text-lg text-forest-200">
                        {incentive.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important Note Section */}
          <div className="col-span-12 md:col-span-8 md:col-start-3 mb-20">
            <div className="bg-forest-100 rounded-3xl p-12 border border-forest-200">
              <h3 className="text-3xl font-bold text-forest-900 mb-6">Important Information</h3>
              <p className="text-xl text-forest-700 mb-6">
                We are a financial management tool that helps you build better payment habits. 
                We do not directly connect with creditors or process payments. Instead, we provide:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl text-forest-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>
                  Personalized payment scheduling recommendations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>
                  Progress tracking and visualization tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>
                  Educational resources and financial tips
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-forest-500 rounded-full mr-3"></span>
                  Rewards and incentives for maintaining good habits
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="col-span-12 md:col-span-8 md:col-start-3 text-center"
          >
            <h3 className="text-4xl font-bold text-forest-900 mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-forest-700 mb-10">
              Join thousands of others who are building better financial habits.
            </p>
            <Link
              to="/login"
              className="inline-block bg-forest-500 hover:bg-forest-600 text-white px-12 py-5 rounded-xl transition duration-300 text-xl font-medium"
            >
              Create Your Account
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LearnMore; 