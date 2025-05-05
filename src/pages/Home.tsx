import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-forest-50">
      {/* Hero Section */}
      <section className="bg-forest-900 overflow-hidden relative min-h-[70vh] flex items-center">
        {/* Monogram Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDMwQzQ1IDMwIDMwIDQ1IDMwIDYwQzMwIDc1IDQ1IDkwIDYwIDkwQzc1IDkwIDkwIDc1IDkwIDYwQzkwIDQ1IDc1IDMwIDYwIDMwWk02MCA4MEM1MCA4MCA0MCA3MCA0MCA2MEM0MCA1MCA1MCA0MCA2MCA0MEM3MCA0MCA4MCA1MCA4MCA2MEM4MCA3MCA3MCA4MCA2MCA4MFoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-repeat"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDAgMjBDMzAgMjAgMjAgMzAgMjAgNDBDMjAgNTAgMzAgNjAgNDAgNjBDNTAgNjAgNjAgNTAgNjAgNDBDNjAgMzAgNTAgMjAgNDAgMjBaTTQwIDUwQzM1IDUwIDMwIDQ1IDMwIDQwQzMwIDM1IDM1IDMwIDQwIDMwQzQ1IDMwIDUwIDM1IDUwIDQwQzUwIDQ1IDQ1IDUwIDQwIDUwWiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')] bg-repeat"></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Sip, Save, and Build Credit
                <br />
                <span className="text-forest-200">One Coffee at a Time</span>
              </h1>
              <p className="text-xl text-forest-100 mb-10 max-w-2xl">
                Transform your daily coffee ritual into a powerful tool for building credit and managing debt.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link
                  to="/journey"
                  className="bg-forest-500 hover:bg-forest-600 text-white px-10 py-4 rounded-lg transition duration-300 font-medium text-lg"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/learn-more"
                  className="bg-white hover:bg-forest-50 text-forest-900 px-10 py-4 rounded-lg transition duration-300 font-medium text-lg"
                >
                  Learn More
                </Link>
              </div>
              {/* Quick Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link 
                  to="/about" 
                  className="group bg-forest-800/50 hover:bg-forest-800 p-4 rounded-lg transition duration-300"
                >
                  <div className="flex items-center text-forest-200 group-hover:text-white">
                    <span className="text-forest-500 group-hover:text-forest-400 mr-2">→</span>
                    <div>
                      <div className="font-medium">About Us</div>
                      <div className="text-sm text-forest-400">Learn more</div>
                    </div>
                  </div>
                </Link>
                <Link 
                  to="/contact" 
                  className="group bg-forest-800/50 hover:bg-forest-800 p-4 rounded-lg transition duration-300"
                >
                  <div className="flex items-center text-forest-200 group-hover:text-white">
                    <span className="text-forest-500 group-hover:text-forest-400 mr-2">→</span>
                    <div>
                      <div className="font-medium">Contact</div>
                      <div className="text-sm text-forest-400">Get in touch</div>
                    </div>
                  </div>
                </Link>
                <Link 
                  to="/menu" 
                  className="group bg-forest-800/50 hover:bg-forest-800 p-4 rounded-lg transition duration-300"
                >
                  <div className="flex items-center text-forest-200 group-hover:text-white">
                    <span className="text-forest-500 group-hover:text-forest-400 mr-2">→</span>
                    <div>
                      <div className="font-medium">Services</div>
                      <div className="text-sm text-forest-400">View options</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-forest-500/20 rounded-2xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                  alt="Coffee Shop"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automated Payments Section */}
      <section className="py-32 bg-forest-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-5xl font-bold mb-8 text-forest-900">Daily Brew Payments</h2>
              <p className="text-2xl text-forest-700 mb-10">
                Like your daily coffee ritual, make debt payments a regular habit. Small, consistent payments help reduce interest and improve your credit score.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Schedule your daily coffee-time payments
                </li>
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Customize your payment amounts
                </li>
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Automatic payment processing
                </li>
              </ul>
              <Link to="/login" className="btn bg-forest-500 hover:bg-forest-600 text-white text-xl px-8 py-4">
                Set Up Daily Payments
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1498804103079-a6351b050096"
                alt="Coffee Shop Interior"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Debt Management Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
                alt="Coffee Shop Barista"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold mb-8 text-forest-900">Barista-Style Management</h2>
              <p className="text-2xl text-forest-700 mb-10">
                Let us handle your debt like a skilled barista crafts your perfect cup. Track balances, set goals, and watch your progress brew.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Real-time balance tracking
                </li>
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Customizable payment goals
                </li>
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Progress visualization
                </li>
              </ul>
              <Link to="/login" className="btn bg-forest-500 hover:bg-forest-600 text-white text-xl px-8 py-4">
                Start Managing Debt
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credit Score Boost Section */}
      <section className="py-32 bg-forest-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-5xl font-bold mb-8 text-forest-900">Premium Credit Blend</h2>
              <p className="text-2xl text-forest-700 mb-10">
                Like a perfectly roasted coffee bean, we help you develop a rich credit profile through consistent micropayments.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Credit score monitoring
                </li>
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Payment history tracking
                </li>
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Credit utilization optimization
                </li>
              </ul>
              <Link to="/login" className="btn bg-forest-500 hover:bg-forest-600 text-white text-xl px-8 py-4">
                Boost Your Credit Score
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e"
                alt="Coffee Beans"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-forest-900">How Credit Coffee Works</h2>
              <p className="text-2xl text-forest-700 mb-10">
                Like your favorite coffee shop, we make managing debt simple and enjoyable. 
                Instead of large monthly payments, our system allows you to make small, frequent payments that 
                reduce interest charges and help you pay off debt faster. Perfect for those looking to improve 
                their credit score while enjoying their daily coffee ritual.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Connect your credit cards securely
                </li>
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Set up automated micropayments
                </li>
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Track debt reduction progress
                </li>
                <li className="flex items-center text-xl text-forest-700">
                  <span className="text-forest-500 mr-3 text-2xl">✓</span>
                  Monitor credit score improvements
                </li>
              </ul>
              <div className="bg-forest-50 p-6 rounded-xl mb-10 border border-forest-200">
                <p className="text-forest-700 text-lg">
                  <strong>Important:</strong> Credit Coffee is your daily companion for debt management. By using our service, 
                  you agree to make regular micropayments to your connected credit card accounts. This service 
                  is designed to help you manage and reduce your credit card debt over time, just like your daily coffee helps you start your day.
                </p>
              </div>
              <Link to="/login" className="btn bg-forest-500 hover:bg-forest-600 text-white text-xl px-8 py-4">
                Start Your Coffee Journey
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Coffee Shop Experience"
                className="w-full h-[700px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 