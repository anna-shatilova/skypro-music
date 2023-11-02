import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    currentTrack: null,
    isPlaying: false,
    shuffleTracks: [],
    isShuffleMode: false,
    activePlaylist: [],
    searchText: '',
  },
  reducers: {
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

    favoriteMode(state, action) {
      state.activePlaylist = action.payload
    },

    setSearchText(state, action) {
      state.searchText = action.payload
    },
  },
})

export const {
  setCurrentTrack,
  playNextTrack,
  playPrevTrack,
  playTrack,
  stopTrack,
  shuffleMode,
  toggleShuffle,
  favoriteMode,
  setSearchText,
} = playlistSlice.actions

export const playlistReducer = playlistSlice.reducer
