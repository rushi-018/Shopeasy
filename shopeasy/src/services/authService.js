import api from './api'

export const authService = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials)
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  register: async (userData) => {
    const response = await api.post('/auth/register', userData)
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  logout: () => {
    localStorage.removeItem('token')
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/me')
    return response.data
  },

  updateProfile: async (userData) => {
    const response = await api.put('/auth/profile', userData)
    return response.data
  },

  changePassword: async (passwordData) => {
    const response = await api.put('/auth/password', passwordData)
    return response.data
  }
} 