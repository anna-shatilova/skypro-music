import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    tracks: [],
    currentTrack: null,
  },
  reducers: {
    addTracks(state, action) {
      state.tracks = action.payload
    },

    setCurrentTrack(state, action) {
      state.currentTrack = action.payload
    },
  },
})

export const { addTracks, setCurrentTrack } = playlistSlice.actions

export const playlistReducer = playlistSlice.reducer
