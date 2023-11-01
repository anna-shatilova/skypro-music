import { useParams } from 'react-router-dom'
import { useGetCategoryTracksQuery } from '../../store/favoritesApi'
import { TrackList } from '../../components/Tracklist/TrackList'

export const Category = () => {
  const params = useParams
  console.log(params.id)
  const { data = [], error, isLoading } = useGetCategoryTracksQuery(params.id)
  // const categoryTitle = () => {
  // params.id === 1
  //   ? 'Классическая музыка'
  //   : params.id === 2
  //   ? 'Электронная музыка'
  //   : 'Рок музыка'
  // }
  return (
    <TrackList
      title="Классическая музыка"
      isLoading={isLoading}
      error={error}
      data={data}
    />
  )
}
