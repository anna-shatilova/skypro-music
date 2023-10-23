import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  tagTypes: ['FavoriteTracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/',
  }),
  endpoints: (build) => ({
    getFavoriteTracks: build.query({
      query: (accessToken) => ({
        url: 'favorite/all',
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'FavoriteTracks', id })),
              { type: 'FavoriteTracks', id: 'LIST' },
            ]
          : [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
    addFavoriteTracks: build.mutation({
      query: ({ id, accessToken }) => ({
        url: `${id}/favorite/`,
        headers: { Authorization: `Bearer ${accessToken}` },
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
    deleteFavoriteTracks: build.mutation({
      query: ({ id, accessToken }) => ({
        url: `${id}/favorite/`,
        headers: { Authorization: `Bearer ${accessToken}` },
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetFavoriteTracksQuery,
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
} = favoritesApi
