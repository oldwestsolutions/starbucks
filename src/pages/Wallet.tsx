import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Wallet = () => {
  const [balance] = useState(0);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const [transactions] = useState([
    {
      id: 1,
      description: 'Payment to Credit Card',
      amount: -50.00,
      date: '2024-03-15',
    },
    {
      id: 2,
      description: 'Payment to Credit Card',
      amount: -25.00,
      date: '2024-03-14',
    },
    {
      id: 3,
      description: 'Payment to Credit Card',
      amount: -75.00,
      date: '2024-03-13',
    },
  ]);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    // Add any cleanup logic here (e.g., clearing local storage, cookies, etc.)
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-forest-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-bold text-forest-900">Wallet</h1>
            <button
              onClick={handleLogout}
              className="bg-forest-500 hover:bg-forest-600 text-white px-6 py-2 rounded-lg transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
          >
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Confirm Logout</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="bg-forest-500 hover:bg-forest-600 text-white px-6 py-2 rounded-lg transition duration-300"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8 mb-12 border border-forest-100"
        >
          <h2 className="text-lg font-medium text-gray-600 mb-2">Available Balance</h2>
          <p className="text-5xl font-bold text-gray-900">${balance.toFixed(2)}</p>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8 mb-12 border border-forest-100"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Transactions</h2>
          <div className="space-y-6">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-4 border-b border-forest-50 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <p className={`font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-forest-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Send Credit</h3>
            <p className="text-gray-500 mb-4">Transfer credit to other users</p>
            <button className="btn btn-primary w-full">Send</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-forest-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Request Credit</h3>
            <p className="text-gray-500 mb-4">Request credit from other users</p>
            <button className="btn btn-primary w-full">Request</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-forest-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Payment History</h3>
            <p className="text-gray-500 mb-4">View detailed transaction history</p>
            <button className="btn btn-primary w-full">View History</button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Wallet; 