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

  // фильтр: по авторам

  const [authorTrack, setAuthorTrack] = useState()

  const searchAuthor = (tracks, search) =>
    tracks?.filter((track) =>
      track?.author.toLowerCase().includes(search?.toLowerCase()),
    )
  const selectedAuthor = searchAuthor(data, authorTrack)

  const [genreTrack, setGenreTrack] = useState([])

  const [dateTrack, setDateTrack] = useState('')

  // функция фильтрации: передает массив треков в компонент

  const filterTracks = () => {
    let filteredTracks = data

    if (searchQ.length > 0) {
      filteredTracks = searchQ
    }

    if (selectedAuthor.length > 0) {
      filteredTracks = selectedAuthor
    }

    // фильтр: по жанрам

    if (genreTrack.length > 0) {
      filteredTracks = filteredTracks.filter(({ genre }) =>
        genreTrack.includes(genre),
      )
      console.log(genreTrack)
    }

    // фильтр: сортировка по дате

    if (dateTrack === 'new') {
      filteredTracks = filteredTracks.sort(
        (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date),
      )
    }
    if (dateTrack === 'old') {
      filteredTracks = filteredTracks.sort(
        (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date),
      )
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
      setAuthorTrack={setAuthorTrack}
      genreTrack={genreTrack}
      setGenreTrack={setGenreTrack}
      setDateTrack={setDateTrack}
    />
  )
}
