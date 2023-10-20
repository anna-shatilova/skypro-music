import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getToken } from '../api/apiUser'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/',
  }),
  endpoints: (build) => ({
    getFavoriteTracks: build.query({
      query: () => ({
        url: 'favorite/all',
        headers: { Authorization: `Bearer ${getToken}` },
      }),
    }),
  }),
})

export const { useGetFavoriteTracksQuery } = favoritesApi