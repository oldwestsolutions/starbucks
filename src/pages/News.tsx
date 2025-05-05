import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const News = () => {
  const featuredArticle = {
    title: "Credit Coffee Revolutionizes Debt Management with Smart Micropayments",
    category: "FEATURED",
    date: "March 15, 2024",
    image: "/images/news/featured-debt-management.jpg",
    excerpt: "A groundbreaking approach to credit card debt management is changing how Americans tackle their financial challenges. Credit Coffee's innovative micropayment system is helping thousands reduce their debt faster than ever before."
  };

  const articles = [
    {
      title: "How Small Payments Are Making Big Differences in Debt Reduction",
      category: "FINANCE",
      date: "March 14, 2024",
      image: "/images/news/small-payments.jpg",
      excerpt: "New research shows that frequent, small payments can reduce credit card interest by up to 40% compared to traditional monthly payments."
    },
    {
      title: "The Psychology Behind Successful Debt Management",
      category: "PSYCHOLOGY",
      date: "March 13, 2024",
      image: "/images/news/psychology-debt.jpg",
      excerpt: "Understanding the behavioral patterns that lead to successful debt reduction and how technology is helping people stay on track."
    },
    {
      title: "Credit Score Improvements Through Smart Payment Strategies",
      category: "CREDIT",
      date: "March 12, 2024",
      image: "/images/news/credit-score.jpg",
      excerpt: "How automated micropayments are helping users improve their credit scores while reducing their overall debt burden."
    },
    {
      title: "The Future of Personal Finance: AI-Powered Debt Management",
      category: "TECHNOLOGY",
      date: "March 11, 2024",
      image: "/images/news/ai-finance.jpg",
      excerpt: "Artificial intelligence is transforming how we manage personal finances, with Credit Coffee leading the way in smart debt management solutions."
    },
    {
      title: "Millennials Lead the Way in Smart Debt Management",
      category: "DEMOGRAPHICS",
      date: "March 10, 2024",
      image: "/images/news/millennials-finance.jpg",
      excerpt: "Young professionals are embracing innovative financial tools to tackle their debt, setting new trends in personal finance management."
    },
    {
      title: "The Impact of Automated Payments on Financial Wellness",
      category: "WELLNESS",
      date: "March 9, 2024",
      image: "/images/news/financial-wellness.jpg",
      excerpt: "How automated payment systems are reducing financial stress and improving overall mental health for debt holders."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          {/* Header */}
          <div className="border-b-2 border-black pb-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-2">
              Credit Coffee News
            </h1>
            <p className="text-gray-600 text-sm uppercase tracking-wider">
              Latest updates and insights on debt management and financial wellness
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-4">
            {/* Featured Article - Spans full width */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 mb-8"
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                  <img 
                    src={featuredArticle.image} 
                    alt="Person using a laptop to manage their finances with Credit Coffee's interface"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="col-span-4 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-wider text-gray-500 mb-2">{featuredArticle.date}</span>
                  <h2 className="text-3xl font-serif font-bold text-black mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Article Grid - 3 columns */}
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="col-span-4"
              >
                <div className="border-b border-gray-200 pb-4">
                  <img 
                    src={article.image} 
                    alt={`${article.title} - ${article.category} article`}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <span className="text-xs uppercase tracking-wider text-gray-500 block mb-2">{article.date}</span>
                  <h3 className="text-xl font-serif font-bold text-black mb-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {article.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 border-t border-gray-200 pt-8"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Stay Informed</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest updates on debt management and financial wellness.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="bg-forest-900 text-white py-6">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white hover:text-forest-100 font-serif">
              Credit Coffee
            </Link>
            <div className="flex space-x-6">
              <Link to="/about" className="text-forest-100 hover:text-white text-sm">About</Link>
              <Link to="/contact" className="text-forest-100 hover:text-white text-sm">Contact</Link>
              <Link to="/learn-more" className="text-forest-100 hover:text-white text-sm">Learn More</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News; 