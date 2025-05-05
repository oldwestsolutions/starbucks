import { motion } from 'framer-motion';

const Mission = () => {
  const values = [
    {
      title: "Financial Empowerment",
      description: "We believe everyone deserves the tools and knowledge to achieve financial freedom. Our mission is to empower individuals to take control of their debt and build a stronger financial future.",
      icon: "💪"
    },
    {
      title: "Innovation in Finance",
      description: "By combining cutting-edge technology with proven financial principles, we're revolutionizing how people manage their debt. Our smart micropayment system makes debt reduction more accessible and effective.",
      icon: "🚀"
    },
    {
      title: "Transparency & Trust",
      description: "We're committed to complete transparency in our operations. No hidden fees, no complex terms - just straightforward solutions that put our users first.",
      icon: "🔍"
    },
    {
      title: "Community Impact",
      description: "Beyond individual success, we're building a community of financially empowered individuals. Together, we're creating a future where debt doesn't stand in the way of dreams.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-forest-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-forest-900 mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            To transform the way people manage debt by making financial freedom accessible to everyone through innovative technology and personalized solutions.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-forest-900 mb-4">
                {value.title}
              </h3>
              <p className="text-forest-700">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-forest-900 text-white rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">$10M+</div>
              <p className="text-forest-100">Debt Reduced</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-forest-100">Lives Changed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-forest-100">Points Average Credit Score Increase</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission; 