import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/api_slice'
import cartSliceReducer from './slices/cart_slice'
import authReducer from './slices/auth_slice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
