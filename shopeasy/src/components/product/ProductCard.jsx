import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/outline'

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative pb-[100%]">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <p className="text-lg font-bold text-primary">
              ₹{product.minPrice.toLocaleString()}
            </p>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-red-500">
            <HeartIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-2">
          <div className="flex items-center text-sm text-gray-500">
            <span>{product.stores} stores</span>
            <span className="mx-2">•</span>
            <span>{product.variants} variants</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard 