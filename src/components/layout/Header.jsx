import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/react/24/outline'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              ShopEasy
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                className="input-field w-full pl-10"
                placeholder="Search for products..."
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/stores" className="text-gray-600 hover:text-primary">
              Stores
            </Link>
            <Link to="/wishlist" className="text-gray-600 hover:text-primary">
              Wishlist
            </Link>
            <button className="text-gray-600 hover:text-primary">
              <UserIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="mb-4">
                <input
                  type="text"
                  className="input-field w-full pl-10"
                  placeholder="Search for products..."
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <Link
                to="/stores"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Stores
              </Link>
              <Link
                to="/wishlist"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Wishlist
              </Link>
              <Link
                to="/account"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Account
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 