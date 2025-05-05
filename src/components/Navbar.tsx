import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Link */}
          <Link to="/" className="flex items-center space-x-1 min-w-0">
            <span className="text-xl md:text-2xl font-serif font-bold text-forest-900 tracking-tight truncate">Credit Coffee</span>
            <div className="h-6 w-px bg-forest-200 hidden sm:block"></div>
            <span className="text-xs md:text-sm font-medium text-forest-600 tracking-wide hidden sm:block">your daily brew.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Link to="/login" className="bg-forest-500 hover:bg-forest-600 text-white px-6 py-2 rounded-lg transition duration-300 font-medium">
              Login
            </Link>
          </div>

          {/* Mobile Login Button */}
          <div className="md:hidden">
            <Link to="/login" className="bg-forest-500 hover:bg-forest-600 text-white px-4 py-1.5 rounded-lg transition duration-300 text-sm font-medium">
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium bg-forest-500 text-white hover:bg-forest-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 