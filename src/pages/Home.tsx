import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-forest-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-forest-900 overflow-hidden">
        {/* Elegant Monogram Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M60 0C26.9 0 0 26.9 0 60s26.9 60 60 60 60-26.9 60-60S93.1 0 60 0zm0 10c27.6 0 50 22.4 50 50s-22.4 50-50 50S10 87.6 10 60 32.4 10 60 10zm0 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 10c16.6 0 30 13.4 30 30S76.6 90 60 90 30 76.6 30 60s13.4-30 30-30zm0 10c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 10c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>

        {/* Secondary Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 0c22.1 0 40 17.9 40 40S62.1 80 40 80 0 62.1 0 40 17.9 0 40 0zm0 10c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 10c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm0 10c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Coffee Shop"
                className="rounded-2xl shadow-xl w-full h-[600px] object-cover"
              />
            </motion.div>

            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left order-2 md:order-2"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">
                Credit Coffee
              </h1>
              <p className="text-2xl md:text-3xl mb-10 text-forest-100">
                Sip, Save, and Build Credit - One Coffee at a Time
              </p>
              <Link to="/login" className="btn bg-forest-500 hover:bg-forest-600 text-white text-xl px-8 py-4">
                Start Your Journey
              </Link>
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