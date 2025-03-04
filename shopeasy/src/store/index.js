import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import storesReducer from './slices/storesSlice'
import wishlistReducer from './slices/wishlistSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    stores: storesReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
})