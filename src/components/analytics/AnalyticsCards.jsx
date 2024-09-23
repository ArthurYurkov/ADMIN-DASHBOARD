import { motion } from 'framer-motion';
import {
  DollarSign,
  Users,
  ShoppingBag,
  Eye,
  ArrowDownRight,
  ArrowUpRight,
} from 'lucide-react';

const CARDS_DATA = [
  { name: 'Revenue', value: '$1,234,567', change: 12.5, icon: DollarSign },
  { name: 'Users', value: '45,678', change: 8.3, icon: Users },
  { name: 'Orders', value: '9,876', change: -3.2, icon: ShoppingBag },
  { name: 'Page Views', value: '1,234,567', change: 15.7, icon: Eye },
];

const AnalyticsCards = () => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {CARDS_DATA.map((card, index) => (
        <motion.div
          key={card.name}
          className="rounded-xl border border-gray-700 bg-gray-800 bg-opacity-50 p-6 shadow-lg backdrop-blur-lg backdrop-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-400">{card.name}</h3>
              <p className="mt-1 text-xl font-semibold text-gray-100">
                {card.value}
              </p>
            </div>

            <div
              className={`${card.change >= 0 ? 'bg-green-500' : 'bg-red-500'} rounded-full bg-opacity-20 p-3`}
            >
              <card.icon
                className={`size-6 ${card.change >= 0 ? 'text-green-500' : 'text-red-500'}`}
              />
            </div>
          </div>
          <div
            className={`mt-4 flex items-center ${card.change >= 0 ? 'text-green-500' : 'text-red-500'}`}
          >
            {card.change >= 0 ? (
              <ArrowUpRight size={20} />
            ) : (
              <ArrowDownRight size={20} />
            )}
            <span className="ml-1 text-sm font-medium">{card.change}%</span>
            <span className="ml-2 text-sm text-gray-400"> vs last period</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
