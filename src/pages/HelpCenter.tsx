import { motion } from 'framer-motion';

const HelpCenter = () => {
  const faqs = [
    {
      question: "How does Credit Coffee work?",
      answer: "Credit Coffee helps you manage your credit card debt through smart micropayments. We analyze your spending patterns and automatically make small payments to your credit cards, reducing interest and improving your credit score over time."
    },
    {
      question: "Is my financial information secure?",
      answer: "Yes, we use bank-level encryption and security measures to protect your data. We never store your credit card numbers directly, and all transactions are processed through secure, encrypted channels."
    },
    {
      question: "How much does Credit Coffee cost?",
      answer: "We offer a free basic plan that includes essential features. Our premium plan, which includes advanced analytics and priority support, is available for a small monthly fee. Check our pricing page for detailed information."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period, and you'll still have access to all features during that time."
    },
    {
      question: "How do I connect my credit cards?",
      answer: "You can connect your credit cards securely through our platform. We use read-only access to analyze your spending patterns and make recommendations. You'll need to provide your credit card information and verify your identity."
    }
  ];

  const supportChannels = [
    {
      title: "Email Support",
      description: "Get in touch with our support team",
      contact: "support@creditcoffee.com",
      response: "Response within 24 hours"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available 9 AM - 6 PM EST",
      response: "Instant response during business hours"
    },
    {
      title: "Phone Support",
      description: "Speak with a support representative",
      contact: "(555) 123-4567",
      response: "Available 9 AM - 6 PM EST"
    }
  ];

  return (
    <div className="min-h-screen bg-forest-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-forest-900 mb-6">
            Help Center
          </h1>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            Find answers to common questions and get support for your Credit Coffee experience.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-4 rounded-lg bg-white border border-forest-200 text-forest-900 placeholder-forest-400 focus:outline-none focus:border-forest-500"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-forest-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-forest-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-forest-900 mb-3">{faq.question}</h3>
                <p className="text-forest-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support Channels */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-forest-900 mb-8">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-forest-900 mb-3">{channel.title}</h3>
                <p className="text-forest-700 mb-2">{channel.description}</p>
                <p className="text-forest-900 font-medium mb-2">{channel.contact}</p>
                <p className="text-forest-600 text-sm">{channel.response}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenter; 