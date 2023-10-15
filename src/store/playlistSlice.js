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

    playNextTrack(state) {
      if (!state.currentTrack || state.tracks.length === 0) return

      const currentIndex = state.tracks.findIndex(
        (track) => track.id === state.currentTrack.id,
      )

      const nextIndex = currentIndex + 1
      if (nextIndex === state.tracks.length) return
      state.currentTrack = state.tracks[nextIndex]
    },
  },
})

export const { addTracks, setCurrentTrack, playNextTrack } =
  playlistSlice.actions

export const playlistReducer = playlistSlice.reducer
