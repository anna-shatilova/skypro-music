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
    addFavoriteTracks: build.mutation({
      query: ({ id, accessToken }) => ({
        url: `${id}/favorite/`,
        headers: { Authorization: `Bearer ${accessToken}` },
        method: 'POST',
      }),
    }),
    deleteFavoriteTracks: build.mutation({
      query: ({ id, accessToken }) => ({
        url: `${id}/favorite/`,
        headers: { Authorization: `Bearer ${accessToken}` },
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetFavoriteTracksQuery,
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
} = favoritesApi
