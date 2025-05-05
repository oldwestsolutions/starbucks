import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-seattle-50 border-t border-seattle-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-seattle-800">Credit Coffee</h3>
            <p className="text-seattle-600">
              Smart micropayments for credit card debt management
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-seattle-800">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/wallet" className="text-seattle-600 hover:text-seattle-800 transition-colors">Wallet</Link></li>
              <li><Link to="/about" className="text-seattle-600 hover:text-seattle-800 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-seattle-600 hover:text-seattle-800 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-seattle-600 hover:text-seattle-800 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-seattle-800">Contact Us</h4>
            <ul className="space-y-3 text-seattle-600">
              <li>123 Coffee Street</li>
              <li>Seattle, WA 98101</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@creditcoffee.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-seattle-800">Newsletter</h4>
            <p className="text-seattle-600 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white border border-seattle-200 text-seattle-800 placeholder-seattle-400 focus:outline-none focus:ring-2 focus:ring-evergreen-500"
              />
              <button
                type="submit"
                className="w-full btn bg-evergreen-500 hover:bg-evergreen-600 text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-seattle-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-seattle-600">
              © {new Date().getFullYear()} Credit Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-seattle-600 hover:text-seattle-800 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-seattle-600 hover:text-seattle-800 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-seattle-600 hover:text-seattle-800 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 