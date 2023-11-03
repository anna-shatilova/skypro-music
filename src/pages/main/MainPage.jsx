import { useState } from 'react'

import { TrackList } from '../../components/Tracklist/TrackList'
import { useGetTracksQuery } from '../../store/favoritesApi'

export const MainPage = () => {
  const { data = [], isLoading, error } = useGetTracksQuery()

  // фильтр: строка поиска

  const [searchText, setSearchText] = useState('')

  const searchTracks = (tracks, search) =>
    tracks?.filter(
      (track) =>
        track?.name.toLowerCase().includes(search?.toLowerCase()) ||
        track?.author.toLowerCase().includes(search?.toLowerCase()),
    )
  const searchQ = searchTracks(data, searchText)

  // функция фильтрации: передает массив треков в компонент
  
  const filterTracks = () => {
    let filteredTracks = data
    if (searchQ.length > 0) {
      filteredTracks = searchQ
    }
    return filteredTracks
  }

  const filteredTracks = filterTracks()
  return (
    <TrackList
      title="Треки"
      isLoading={isLoading}
      error={error}
      data={filteredTracks}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  )
}
