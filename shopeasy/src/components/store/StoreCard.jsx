import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

function StoreCard({ store }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center">
        <img
          src={store.logo}
          alt={store.name}
          className="w-16 h-16 object-contain rounded"
        />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{store.name}</h3>
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <MapPinIcon className="h-4 w-4 mr-1" />
            <span>{store.location}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <PhoneIcon className="h-4 w-4 mr-2" />
          <span>{store.phone}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <ClockIcon className="h-4 w-4 mr-2" />
          <span>{store.hours}</span>
        </div>
      </div>

      <div className="mt-4">
        <button className="btn-primary w-full">
          View Store Details
        </button>
      </div>
    </div>
  )
}

export default StoreCard 