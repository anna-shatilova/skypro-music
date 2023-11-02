import { useSelector } from 'react-redux'
import { TrackList } from '../../components/Tracklist/TrackList'
import { useGetTracksQuery } from '../../store/favoritesApi'

export const MainPage = () => {
  const { data = [], isLoading, error } = useGetTracksQuery()

  const searchText = useSelector((state) => state.tracks.searchText)
  const activePlaylist =  useSelector((state) => state.tracks.activePlaylist)

  const playlist = () => {
    if (searchText) {
      return activePlaylist
    }
    return data
  }

  return (
    <TrackList
      title="Треки"
      isLoading={isLoading}
      error={error}
      data={playlist()}
    />
  )
}
