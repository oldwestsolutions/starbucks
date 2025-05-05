import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-forest-900">Credit Coffee</span>
            <div className="h-6 w-px bg-forest-200"></div>
            <span className="text-sm font-medium text-forest-600 tracking-wide">your daily brew.</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader; 