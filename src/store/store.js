import { configureStore } from '@reduxjs/toolkit'
import { playlistReducer } from './playlistSlice'
import { favoritesApi } from './favoritesApi'

export const store = configureStore({
  reducer: {
    tracks: playlistReducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoritesApi.middleware),
})
