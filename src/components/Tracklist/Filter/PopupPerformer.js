import { useGetTracksQuery } from '../../../store/favoritesApi'
import * as S from './Styles'

export const PopupPerformer = ({ authorTrack, setAuthorTrack }) => {
  const { data = [] } = useGetTracksQuery()

  const handlerSetAuthors = (author) => {
    const index = authorTrack.indexOf(author)
    if (index !== -1) {
      setAuthorTrack(authorTrack.toSpliced(index, 1))
    } else {
      setAuthorTrack([...authorTrack, author])
    }
  }

  return (
    <S.FilterPopup style={{ left: '85px' }}>
      <S.PopupList>
        {data.map((track) => {
          return (
            <S.PopupText
              key={track.id}
              onClick={() => handlerSetAuthors(track.author)}
              $activeFilter={track.author && authorTrack.includes(track.author)}
            >
              {track.author}
            </S.PopupText>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
