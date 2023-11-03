import { useGetTracksQuery } from '../../../store/favoritesApi'
import * as S from './Styles'

export const PopupPerformer = ({ setAuthorTrack }) => {
  const { data } = useGetTracksQuery()

  // const sortedOnAbcAuthor = data.sort((a, b) => {
  //   if (a.author.toLowerCase() < b.author.toLowerCase()) {
  //     return -1;
  //   }
  //   if (a.author.toLowerCase() > b.author.toLowerCase()) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // const sortedAuthor = data?.sort((a, b) => a.author.localeCompare(b.author))

  // const sortedAuthor = authorArray.sort((a, b) => a.localeCompare(b))
  return (
    <S.FilterPopup style={{ left: '85px' }}>
      <S.PopupList>
        {data.map((track) => {
          return (
            <S.PopupText
              key={track.id}
              onClick={() => setAuthorTrack(track.author)}
            >
              {track.author}
            </S.PopupText>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
