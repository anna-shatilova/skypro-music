import { TrackList } from '../../components/Tracklist/TrackList'
import { useGetFavoriteTracksQuery } from '../../store/favoritesApi'

export const Favorites = () => {
  const { data = [], error, isLoading } = useGetFavoriteTracksQuery()

  return (
    <TrackList
      title="Мои треки"
      isLoading={isLoading}
      error={error}
      data={data}
      showAllTracksAsLiked
    />
  )
}
