import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    tracks: [],
  },
  reducers: {
    addTracks(state, action) {
      state.tracks.push({
        tracks: action.payload,
      })
    },
  },
})

export const { addTracks } = playlistSlice.actions

export const playlistReducer = playlistSlice.reducer
