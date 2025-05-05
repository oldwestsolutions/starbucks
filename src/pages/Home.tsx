import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-seattle-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Credit Coffee
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Smart micropayments for credit card debt management
              </p>
              <Link to="/login" className="btn btn-primary text-lg">
                Start Managing Your Debt
              </Link>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="Financial Management"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Credit Coffee?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Automated Payments',
                description: 'Set up automatic micropayments to your credit card debt. Small, frequent payments help reduce interest and improve your credit score.',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
              },
              {
                name: 'Debt Management',
                description: 'Track your credit card balances, set payment goals, and monitor your progress. Our system helps you stay on top of your debt reduction journey.',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
              },
              {
                name: 'Credit Score Boost',
                description: 'Regular micropayments demonstrate responsible credit management, helping improve your credit score over time.',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-seattle-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.name}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-seattle-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">How Credit Coffee Works</h2>
              <p className="text-gray-700 mb-6">
                Credit Coffee is a revolutionary micropayment system designed to help you manage credit card debt. 
                Instead of large monthly payments, our system allows you to make small, frequent payments that 
                reduce interest charges and help you pay off debt faster. Perfect for those looking to improve 
                their credit score and manage debt more effectively.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="text-evergreen-500 mr-2">✓</span>
                  Connect your credit cards securely
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-evergreen-500 mr-2">✓</span>
                  Set up automated micropayments
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-evergreen-500 mr-2">✓</span>
                  Track debt reduction progress
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-evergreen-500 mr-2">✓</span>
                  Monitor credit score improvements
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg mb-6 border border-seattle-100">
                <p className="text-gray-700 text-sm">
                  <strong>Important:</strong> Credit Coffee is a debt management tool. By using our service, 
                  you agree to make regular micropayments to your connected credit card accounts. This service 
                  is designed to help you manage and reduce your credit card debt over time.
                </p>
              </div>
              <Link to="/login" className="btn btn-primary">
                Start Managing Your Debt
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="Financial management"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 