import { useLocation, useParams } from 'react-router-dom'
import { useGetCategoryTracksQuery } from '../../store/favoritesApi'
import { TrackList } from '../../components/Tracklist/TrackList'

export const Category = () => {
  const params = useParams()
  const { pathname } = useLocation()

  const {
    data = [],
    error,
    isLoading,
  } = useGetCategoryTracksQuery({ id: params.id })

  const categoryTitle = () => {
    let title = ''
    if (pathname === '/category/1') {
      title = 'Классическая музыка'
    }

    if (pathname === '/category/2') {
      title = 'Электронная музыка'
    }

    if (pathname === '/category/3') {
      title = 'Рок музыка'
    }
    return title
  }
  return (
    <TrackList
      title={categoryTitle()}
      isLoading={isLoading}
      error={error}
      data={data}
    />
  )
}
