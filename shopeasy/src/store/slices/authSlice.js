import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from '../../services/authService'

export const login = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    const data = await authService.login(credentials)
    return data
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (userData) => {
    const data = await authService.register(userData)
    return data
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    await authService.logout()
  }
)

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async () => {
    const data = await authService.getCurrentUser()
    return data
  }
)

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (userData) => {
    const data = await authService.updateProfile(userData)
    return data
  }
)

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (passwordData) => {
    await authService.changePassword(passwordData)
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // Register cases
      .addCase(register.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // Logout case
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.token = null
      })
      // Get current user cases
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
        state.user = null
        state.token = null
      })
      // Update profile cases
      .addCase(updateProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // Change password cases
      .addCase(changePassword.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { clearError } = authSlice.actions
export default authSlice.reducer 