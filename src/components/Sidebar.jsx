import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  { name: 'Overview', icon: BarChart2, color: '#6366f1', href: '/' },
  { name: 'Products', icon: ShoppingBag, color: '#885CF6', href: '/products' },
  { name: 'Users', icon: Users, color: '#EC4899', href: '/users' },
  { name: 'Sales', icon: DollarSign, color: '#10B981', href: '/sales' },
  { name: 'Orders', icon: ShoppingCart, color: '#F59E0B', href: '/orders' },
  { name: 'Analytics', icon: TrendingUp, color: '#3B82F6', href: '/analytics' },
  { name: 'Settings', icon: Settings, color: '#6EE7B7', href: '/settings' },
];

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 flex-shrink-0 transition-all ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="flex h-full scroll-m-8 flex-col border-r border-gray-700 bg-gray-800 bg-opacity-50 p-4 backdrop-blur-md">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="max-w-fit rounded-full p-2 transition-colors hover:bg-gray-700"
        >
          <Menu size={24} />
        </motion.button>
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.span
              className="absolute left-20 top-5 cursor-pointer whitespace-nowrap"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-gray-100">ADMIN</h2>
            </motion.span>
          )}
        </AnimatePresence>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map(item => (
            <Link key={item.href} to={item.href}>
              <motion.div className="mb-2 flex items-center rounded-lg p-4 text-sm font-medium transition-colors hover:bg-gray-700">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: '20px' }}
                />
                <AnimatePresence className="">
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
export default Sidebar;
