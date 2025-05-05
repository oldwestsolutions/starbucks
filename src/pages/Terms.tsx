import { motion } from 'framer-motion';

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using Credit Coffee's services, you agree to be bound by these Terms and Conditions.",
        "You must be at least 18 years old to use our services.",
        "You are responsible for maintaining the confidentiality of your account information."
      ]
    },
    {
      title: "2. Description of Service",
      content: [
        "Credit Coffee provides a platform for managing credit card debt through micropayments.",
        "We offer tools for tracking debt reduction and credit score improvement.",
        "Our service includes automated payment scheduling and financial analytics."
      ]
    },
    {
      title: "3. User Responsibilities",
      content: [
        "Provide accurate and complete information when creating an account",
        "Maintain the security of your account credentials",
        "Comply with all applicable laws and regulations",
        "Use the service only for lawful purposes"
      ]
    },
    {
      title: "4. Payment Terms",
      content: [
        "Subscription fees are billed in advance on a monthly basis",
        "All payments are non-refundable unless required by law",
        "We reserve the right to modify our pricing with notice",
        "You are responsible for all taxes associated with the service"
      ]
    },
    {
      title: "5. Intellectual Property",
      content: [
        "All content and materials available on Credit Coffee are protected by intellectual property rights",
        "You may not copy, modify, or distribute our content without permission",
        "We retain all rights to our trademarks, logos, and branding"
      ]
    },
    {
      title: "6. Limitation of Liability",
      content: [
        "Credit Coffee is not responsible for any financial losses or damages",
        "We do not guarantee specific results from using our service",
        "Our liability is limited to the amount paid for the service",
        "We are not responsible for third-party actions or content"
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
            Terms and Conditions
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
            Please read these Terms and Conditions carefully before using Credit Coffee's services. 
            These terms govern your access to and use of our platform, including any content, functionality, 
            and services offered on or through our website.
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
          transition={{ delay: 0.8 }}
          className="bg-white rounded-lg p-8 shadow-sm mt-12"
        >
          <h2 className="text-2xl font-bold text-forest-900 mb-6">Contact Us</h2>
          <p className="text-forest-700 mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <div className="space-y-2">
            <p className="text-forest-900">Email: legal@creditcoffee.com</p>
            <p className="text-forest-900">Phone: (555) 123-4567</p>
            <p className="text-forest-900">Address: 123 Financial Street, Suite 100, New York, NY 10001</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms; 