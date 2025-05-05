import { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Classic Espresso',
      description: 'Rich and bold, our signature espresso shot',
      price: '$3.50',
      category: 'espresso',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam',
      price: '$4.50',
      category: 'espresso',
      image: 'https://images.unsplash.com/photo-1534687941688-651ccbaf8a69',
    },
    {
      id: 3,
      name: 'Cold Brew',
      description: 'Smooth and refreshing, brewed for 24 hours',
      price: '$4.00',
      category: 'cold',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    },
    {
      id: 4,
      name: 'Pour Over',
      description: 'Handcrafted pour over coffee, made to order',
      price: '$4.50',
      category: 'hot',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e',
    },
    {
      id: 5,
      name: 'Iced Latte',
      description: 'Espresso with cold milk over ice',
      price: '$4.00',
      category: 'cold',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
    },
    {
      id: 6,
      name: 'Flat White',
      description: 'Espresso with velvety steamed milk',
      price: '$4.50',
      category: 'espresso',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'espresso', name: 'Espresso' },
    { id: 'hot', name: 'Hot Coffee' },
    { id: 'cold', name: 'Cold Coffee' },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-coffee-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-coffee-600 text-white'
                  : 'bg-white text-coffee-600 hover:bg-coffee-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-coffee-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu; 