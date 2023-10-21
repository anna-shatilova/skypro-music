import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/',
  }),
  endpoints: (build) => ({
    getFavoriteTracks: build.query({
      query: (accessToken) => ({
        url: 'favorite/all',
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),
  }),
})

export const { useGetFavoriteTracksQuery } = favoritesApi
