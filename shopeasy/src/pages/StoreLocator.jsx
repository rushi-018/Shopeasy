import { useState } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import StoreCard from '../components/store/StoreCard'
import LoadingSpinner from '../components/common/LoadingSpinner'

// Temporary mock data
const MOCK_STORES = [
  {
    id: 1,
    name: "Electronics Hub",
    logo: "https://placehold.co/100x100",
    location: "Connaught Place, New Delhi",
    phone: "+91 98765 43210",
    hours: "10:00 AM - 9:00 PM"
  },
  {
    id: 2,
    name: "Digital World",
    logo: "https://placehold.co/100x100",
    location: "Cyber City, Gurugram",
    phone: "+91 98765 43211",
    hours: "11:00 AM - 8:00 PM"
  }
]

function StoreLocator() {
  const [isLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Search and Filters */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Find Local Stores</h2>
            
            {/* Search Input */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search by location..."
                className="input-field w-full pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Filters */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Distance
                </label>
                <select className="input-field w-full">
                  <option>Within 5 km</option>
                  <option>Within 10 km</option>
                  <option>Within 20 km</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Store Type
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="ml-2">Electronics</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="ml-2">Mobile Phones</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="ml-2">Accessories</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store List */}
        <div className="w-full md:w-2/3">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="space-y-4">
              {MOCK_STORES.map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StoreLocator 