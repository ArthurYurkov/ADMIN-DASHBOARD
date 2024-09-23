import AIPoweredInsights from '../components/analytics/AIPoweredInsights';
import AnalyticsCards from '../components/analytics/AnalyticsCards';
import ChannelPerformance from '../components/analytics/ChannelPerformance';
import CustomerSegmentation from '../components/analytics/CustomerSegmentation';
import ProductPerformance from '../components/analytics/ProductPerformance';

import RevenueChart from '../components/analytics/RevenueChart';
import UserRetention from '../components/analytics/UserRetention';
import Header from '../components/common/Header';

const AnalyticsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto bg-gray-900">
      <Header title="Analytics" />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <AnalyticsCards />

        <RevenueChart />
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>
        <AIPoweredInsights />
      </main>
    </div>
  );
};

export default AnalyticsPage;
