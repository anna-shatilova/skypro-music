import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    tracks: [],
    currentTrack: null,
    isPlaying: false,
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

    playPrevTrack(state) {
      if (!state.currentTrack || state.tracks.length === 0) return

      const currentIndex = state.tracks.findIndex(
        (track) => track.id === state.currentTrack.id,
      )

      const nextIndex = currentIndex - 1
      if (nextIndex < 0) return
      state.currentTrack = state.tracks[nextIndex]
    },

    playTrack(state, action) {
      state.isPlaying = action.payload
    },

    stopTrack(state, action) {
      state.isPlaying = action.payload
    },
  },
})

export const { addTracks, setCurrentTrack, playNextTrack, playPrevTrack, playTrack, stopTrack } =
  playlistSlice.actions

export const playlistReducer = playlistSlice.reducer
