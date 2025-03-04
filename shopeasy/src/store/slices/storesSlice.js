import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchStores = createAsyncThunk(
  'stores/fetchStores',
  async ({ location, filters } = {}) => {
    // TODO: Replace with actual API call
    return []
  }
)

export const fetchStoreDetails = createAsyncThunk(
  'stores/fetchStoreDetails',
  async (storeId) => {
    // TODO: Replace with actual API call
    return {}
  }
)

const storesSlice = createSlice({
  name: 'stores',
  initialState: {
    items: [],
    selectedStore: null,
    loading: false,
    error: null,
    filters: {
      distance: 5,
      type: [],
      location: null,
    },
  },
  reducers: {
    setStoreFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStores.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchStores.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchStoreDetails.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchStoreDetails.fulfilled, (state, action) => {
        state.loading = false
        state.selectedStore = action.payload
      })
      .addCase(fetchStoreDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setStoreFilters } = storesSlice.actions
export default storesSlice.reducer 