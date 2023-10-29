import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  tagTypes: ['FavoriteTracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    getTracks: build.query({
      query: () => ({
        url: 'track/all',
      }),
      providesTags: (result) =>
      result
        ? [
            ...result.map(({ id }) => ({ type: 'FavoriteTracks', id })),
            { type: 'FavoriteTracks', id: 'LIST' },
          ]
        : [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
    // getIdTrack: build.query({
    //   query: ({ id }) => ({
    //     url: `${id}`,
    //     method: 'GET',
    //   }),
    // }),
    getFavoriteTracks: build.query({
      query: () => ({
        url: 'track/favorite/all',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'FavoriteTracks', id })),
              { type: 'FavoriteTracks', id: 'LIST' },
            ]
          : [{ type: 'FavoriteTracks', id: 'LIST' }],
      // transformResponse: (response, arg) => {
      //   return response.map((item) => ({
      //     ...item,
      //     stared_user: [
      //       {
      //         id: arg.auth.id,
      //         email: arg.auth.email,
      //         username: arg.auth.username,
      //         first_name: arg.auth.first_name,
      //         last_name: arg.auth.last_name,
      //       },
      //     ],
      //   }))
      // },
    }),
    addFavoriteTracks: build.mutation({
      query: ({ id }) => ({
        url: `track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
    deleteFavoriteTracks: build.mutation({
      query: ({ id }) => ({
        url: `track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
    getCategoryTracks: build.query({
      query: ({ id }) => ({
        url: `selection/${id}/`,
        method: 'GET',
      }),
    }),

  }),
})

export const {
  useGetTracksQuery,
  // useGetIdTrackQuery,
  useGetFavoriteTracksQuery,
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
  useGetCategoryTracksQuery,
} = favoritesApi
