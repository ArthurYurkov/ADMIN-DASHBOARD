import Header from '../components/common/Header';
import ConnectedAccounts from '../components/settings/ConnectedAccounts';
import DangerZone from '../components/settings/DengerZone';
import Notifications from '../components/settings/Notifications';
import Profile from '../components/settings/Profile';
import SecuritySection from '../components/settings/SecuritySection';

const SettingsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto bg-gray-900">
      <Header title="Settings" />
      <main className="max-w-4x mx-auto px-4 py-6 lg:px-8">
        <Profile />
        <Notifications />
        <SecuritySection />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default SettingsPage;
