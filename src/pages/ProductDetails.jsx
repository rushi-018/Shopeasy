import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { MapPinIcon, ChartBarIcon, BellIcon } from '@heroicons/react/24/outline'
import LoadingSpinner from '../components/common/LoadingSpinner'

// Temporary mock data
const MOCK_PRODUCT = {
  id: 1,
  name: "iPhone 15 Pro Max",
  image: "https://placehold.co/600x400",
  description: "The most powerful iPhone ever with a stunning camera system.",
  prices: [
    { store: "Amazon", price: 134900, link: "#" },
    { store: "Flipkart", price: 135900, link: "#" },
    { store: "Croma", price: 136900, link: "#" }
  ],
  specifications: {
    "Display": "6.7-inch Super Retina XDR",
    "Processor": "A17 Pro chip",
    "Camera": "48MP Main + 12MP Ultra Wide",
    "Battery": "4422 mAh"
  }
}

function ProductDetails() {
  const { id } = useParams()
  const [isLoading] = useState(false)
  const [selectedTab, setSelectedTab] = useState('prices')

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={MOCK_PRODUCT.image}
            alt={MOCK_PRODUCT.name}
            className="w-full rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {MOCK_PRODUCT.name}
          </h1>
          <p className="text-gray-600 mb-6">{MOCK_PRODUCT.description}</p>

          {/* Price Range */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Best Price</p>
                <p className="text-2xl font-bold text-primary">
                  ₹{Math.min(...MOCK_PRODUCT.prices.map(p => p.price)).toLocaleString()}
                </p>
              </div>
              <button className="flex items-center text-primary hover:text-primary/80">
                <BellIcon className="h-6 w-6 mr-2" />
                Set Price Alert
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button
                className={`pb-4 ${
                  selectedTab === 'prices'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setSelectedTab('prices')}
              >
                Prices
              </button>
              <button
                className={`pb-4 ${
                  selectedTab === 'specs'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setSelectedTab('specs')}
              >
                Specifications
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {selectedTab === 'prices' ? (
            <div className="space-y-4">
              {MOCK_PRODUCT.prices.map((price, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{price.store}</h3>
                    <p className="text-lg font-bold text-primary">
                      ₹{price.price.toLocaleString()}
                    </p>
                  </div>
                  <a
                    href={price.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Buy Now
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(MOCK_PRODUCT.specifications).map(([key, value]) => (
                <div key={key} className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500">{key}</p>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails 