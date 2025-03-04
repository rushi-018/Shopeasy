import { useState } from 'react'
import ProductCard from '../components/product/ProductCard'
import LoadingSpinner from '../components/common/LoadingSpinner'

// Temporary mock data
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    image: "https://placehold.co/300x300",
    minPrice: 134900,
    stores: 5,
    variants: 3
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    image: "https://placehold.co/300x300",
    minPrice: 129999,
    stores: 4,
    variants: 2
  },
  // Add more mock products as needed
]

const CATEGORIES = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Books",
  "Sports"
]

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Electronics")
  const [isLoading] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 mb-8 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Compare Prices. Save Money.
        </h1>
        <p className="text-lg mb-6">
          Find the best deals across multiple platforms and local stores.
        </p>
        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home 