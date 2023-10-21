import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    tracks: [],
    currentTrack: null,
    isPlaying: false,
    shuffleTracks: [],
    isShuffleMode: false,
    activePlaylist: [],
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    addTracks(state, action) {
      state.tracks = action.payload
      state.activePlaylist = [...state.tracks]
    },

    setCurrentTrack(state, action) {
      state.currentTrack = action.payload
    },

    playNextTrack(state) {
      if (!state.currentTrack || state.activePlaylist.length === 0) return

      const currentIndex = state.activePlaylist.findIndex(
        (track) => track.id === state.currentTrack.id,
      )

      const nextIndex = currentIndex + 1
      if (nextIndex === state.activePlaylist.length) return
      state.currentTrack = state.activePlaylist[nextIndex]
    },

    playPrevTrack(state) {
      if (!state.currentTrack || state.activePlaylist.length === 0) return

      const currentIndex = state.activePlaylist.findIndex(
        (track) => track.id === state.currentTrack.id,
      )

      const nextIndex = currentIndex - 1
      if (nextIndex < 0) return
      state.currentTrack = state.activePlaylist[nextIndex]
    },

    playTrack(state, action) {
      state.isPlaying = action.payload
    },

    stopTrack(state, action) {
      state.isPlaying = action.payload
    },

    toggleShuffle(state, action) {
      state.shuffleTracks = action.payload
      state.activePlaylist = [...state.shuffleTracks]
    },

    shuffleMode(state, action) {
      state.isShuffleMode = action.payload
    },

    fetchAccessToken(state, action) {
      state.accessToken = action.payload
    },

    fetchRefreshToken(state, action) {
      state.refreshToken = action.payload
    },
  },
})

export const {
  addTracks,
  setCurrentTrack,
  playNextTrack,
  playPrevTrack,
  playTrack,
  stopTrack,
  shuffleMode,
  toggleShuffle,
  fetchAccessToken,
  fetchRefreshToken,
} = playlistSlice.actions

export const playlistReducer = playlistSlice.reducer
