import { useState } from 'react'
import UserProfile from '../components/user/UserProfile'
import ChangePassword from '../components/user/ChangePassword'

function Profile() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <div className="bg-white rounded-lg shadow-md p-4">
            <nav className="space-y-2">
              <button
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'profile'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                Profile Settings
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'password'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('password')}
              >
                Change Password
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md">
            {activeTab === 'profile' ? <UserProfile /> : <ChangePassword />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 