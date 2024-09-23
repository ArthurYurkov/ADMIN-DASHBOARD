import AnalyticsCards from '../components/analytics/AnalyticsCards';
import Header from '../components/common/Header';

const AnalyticsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto bg-gray-900">
      <Header title="Analytics" />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <AnalyticsCards />
      </main>
    </div>
  );
};

export default AnalyticsPage;
