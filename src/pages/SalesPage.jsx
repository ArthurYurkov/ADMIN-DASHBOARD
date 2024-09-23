import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

import SalesByCategoryChart from '../components/sales/SalesByCategoryChart';
import DailySalesTrend from '../components/sales/DailySalesTrend';
import SalesOverviewChart from '../components/sales/SalesOverviewChart';

const SALES_STATS = {
  totalRevenue: '$1,234,567',
  averageOrderValue: '$78.90',
  conversionRate: '3.45%',
  salesGrowth: '12.3%',
};

const SalesPage = () => {
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
            icon={DollarSign}
            value={SALES_STATS.totalRevenue}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={ShoppingCart}
            value={SALES_STATS.averageOrderValue}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={TrendingUp}
            value={SALES_STATS.conversionRate}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={CreditCard}
            value={SALES_STATS.salesGrowth}
            color="#EF4444"
          />
        </motion.div>

        <SalesOverviewChart />
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
