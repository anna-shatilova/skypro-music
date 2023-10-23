import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  tagTypes: ['FavoriteTracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().tracks.accessToken
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    getFavoriteTracks: build.query({
      query: () => ({
        url: 'favorite/all',
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
      query: ({ id }) => ({
        url: `${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
    deleteFavoriteTracks: build.mutation({
      query: ({ id }) => ({
        url: `${id}/favorite/`,
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
