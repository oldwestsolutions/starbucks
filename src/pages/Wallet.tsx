import { motion } from 'framer-motion';
import { useState } from 'react';

const Wallet = () => {
  const [balance] = useState(0);
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

  return (
    <div className="min-h-screen bg-seattle-50 py-16">
      <div className="container mx-auto px-4">
        {/* Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8 mb-12 border border-seattle-100"
        >
          <h2 className="text-lg font-medium text-gray-600 mb-2">Available Balance</h2>
          <p className="text-5xl font-bold text-gray-900">${balance.toFixed(2)}</p>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8 mb-12 border border-seattle-100"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Transactions</h2>
          <div className="space-y-6">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-4 border-b border-seattle-50 last:border-0"
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
            className="bg-white rounded-2xl shadow-sm p-6 border border-seattle-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Send Credit</h3>
            <p className="text-gray-500 mb-4">Transfer credit to other users</p>
            <button className="btn btn-primary w-full">Send</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-seattle-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Request Credit</h3>
            <p className="text-gray-500 mb-4">Request credit from other users</p>
            <button className="btn btn-primary w-full">Request</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-seattle-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Payment History</h3>
            <p className="text-gray-500 mb-4">View detailed transaction history</p>
            <button className="btn btn-primary w-full">View History</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Wallet; 