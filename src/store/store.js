import { configureStore } from '@reduxjs/toolkit'
import { playlistReducer } from './playlistSlice'
import { favoritesApi } from './favoritesApi'
import { authReducer } from './authSlice'

export const store = configureStore({
  reducer: {
    tracks: playlistReducer,
    auth: authReducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoritesApi.middleware),
})
