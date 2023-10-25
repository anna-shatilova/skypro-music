import { TrackList } from '../../components/Tracklist/TrackList'
import { useGetFavoriteTracksQuery } from '../../store/favoritesApi'

export const Favorites = () => {
  const { data =[], error, isLoading } = useGetFavoriteTracksQuery()

  return (
    <TrackList
      isLoading={isLoading}
      error={error}
      data={data}
    />
  )
}
