import api from './api'

export const storeService = {
  getStores: async (params) => {
    const response = await api.get('/stores', { params })
    return response.data
  },

  getStoreById: async (id) => {
    const response = await api.get(`/stores/${id}`)
    return response.data
  },

  registerStore: async (storeData) => {
    const response = await api.post('/stores', storeData)
    return response.data
  },

  updateStore: async (id, storeData) => {
    const response = await api.put(`/stores/${id}`, storeData)
    return response.data
  }
} 