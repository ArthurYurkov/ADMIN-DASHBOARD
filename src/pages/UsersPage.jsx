import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react';

import UsersTable from '../components/users/UsersTable';

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: '2.4%',
};

const UsersPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Users" />
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
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <UsersTable />
      </main>
    </div>
  );
};

export default UsersPage;
