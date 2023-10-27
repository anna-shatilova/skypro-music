import { TrackList } from '../../components/Tracklist/TrackList'
import { useGetTracksQuery } from '../../store/favoritesApi'

export const MainPage = () => {
  const { data = [], isLoading, error } = useGetTracksQuery()
  return (
    <TrackList
      isLoading={isLoading}
      error={error}
      data={data}
    />
  )
}
