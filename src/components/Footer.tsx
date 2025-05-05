import { Link } from 'react-router-dom';

const Footer = () => {
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Mission", path: "/mission" },
    { name: "Contact", path: "/contact" },
    { name: "News", path: "/news" }
  ];

  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Credit Coffee</h3>
            <p className="text-forest-100 mb-6">
              Smart micropayments for credit card debt management. Pay less interest, improve your credit score.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-forest-100 hover:text-white">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-forest-100 hover:text-white">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-forest-100 hover:text-white">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-forest-100 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/help-center" className="text-forest-100 hover:text-white">Help Center</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-forest-100 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-forest-100 hover:text-white">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Newsletter</h4>
            <p className="text-forest-100 mb-4">
              Stay updated with our latest features and tips.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-forest-800 border border-forest-700 text-white placeholder-forest-300 focus:outline-none focus:border-forest-500"
              />
              <button
                type="submit"
                className="w-full bg-forest-500 hover:bg-forest-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-forest-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
            <p className="text-forest-100 text-sm mb-4 md:mb-0">
              © 2024 Credit Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-forest-100 hover:text-white text-sm">Privacy</Link>
              <Link to="/terms" className="text-forest-100 hover:text-white text-sm">Terms</Link>
              <a href="#" className="text-forest-100 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 