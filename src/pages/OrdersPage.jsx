import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import DailyOrders from '../components/orders/DailyOrders';
import OrderStatusDistribution from '../components/orders/OrderStatusDistribution';
import OrdersTable from '../components/orders/OrdersTable';

const ORDER_STATS = {
  totalOrders: '1,234',
  pendingOrders: '56',
  completedOrders: '1,178',
  totalRevenue: '$98,765',
};

const OrdersPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Sales " />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        {/* STATS */}
        <motion.div
          className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={ShoppingBag}
            value={ORDER_STATS.totalOrders}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={Clock}
            value={ORDER_STATS.pendingOrders}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={CheckCircle}
            value={ORDER_STATS.completedOrders}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={DollarSign}
            value={ORDER_STATS.totalRevenue}
            color="#EF4444"
          />
        </motion.div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <DailyOrders />
          <OrderStatusDistribution />
        </div>
        <OrdersTable />
      </main>
    </div>
  );
};

export default OrdersPage;
