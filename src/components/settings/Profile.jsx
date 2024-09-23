import { User } from 'lucide-react';
import SettingSection from './SettingSection';

const Profile = () => {
  return (
    <SettingSection icon={User} title={'Profile'}>
      <div className="mb-6 flex flex-col items-center sm:flex-row">
        <img
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="Profile"
          className="mr-4 h-20 w-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100">John Doe</h3>
          <p className="text-gray-400">john.doe@example.com</p>
        </div>
      </div>
      <button className="w-full rounded bg-indigo-600 px-4 py-2 font-bold text-white transition duration-200 hover:bg-indigo-700 sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};

export default Profile;
