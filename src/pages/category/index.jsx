import { useParams } from 'react-router-dom'

export const Category = () => {
  const params = useParams
  //   const { data =[], error, isLoading } = useGetFavoriteTracksQuery()

  return (
    <p>Category Page ${params.id}</p>
    //   <TrackList
    // title=""
    //   isLoading={isLoading}
    //   error={error}
    //   data={data}
    // />
  )
}
