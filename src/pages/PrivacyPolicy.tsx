import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number)",
        "Financial information (credit card details, transaction history)",
        "Usage data (how you interact with our platform)",
        "Device information (browser type, IP address)"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our service",
        "To process your transactions",
        "To send you important updates and notifications",
        "To improve our services and user experience",
        "To comply with legal obligations"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We use industry-standard encryption to protect your data",
        "Regular security audits and updates",
        "Limited access to personal information",
        "Secure data storage and transmission"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access your personal information",
        "Correct inaccurate data",
        "Request deletion of your data",
        "Opt-out of marketing communications",
        "Export your data"
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use cookies to improve your experience",
        "Essential cookies for site functionality",
        "Analytics cookies to understand usage",
        "Marketing cookies for personalized content"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-forest-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-forest-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-forest-700">
            Last updated: March 15, 2024
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg p-8 shadow-sm mb-12"
        >
          <p className="text-forest-700 text-lg leading-relaxed">
            At Credit Coffee, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our service. Please read this privacy 
            policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 2) }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-forest-900 mb-6">{section.title}</h2>
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-forest-500 mr-3">•</span>
                    <span className="text-forest-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-sm mt-12"
        >
          <h2 className="text-2xl font-bold text-forest-900 mb-6">Contact Us</h2>
          <p className="text-forest-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="space-y-2">
            <p className="text-forest-900">Email: privacy@creditcoffee.com</p>
            <p className="text-forest-900">Phone: (555) 123-4567</p>
            <p className="text-forest-900">Address: 123 Financial Street, Suite 100, New York, NY 10001</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 