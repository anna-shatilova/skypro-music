import { useSelector } from 'react-redux'
import * as S from './Styles'

export const PopupPerformer = () => {
  const tracks = useSelector((state) => state.tracks.tracks[0].tracks)

  return (
    <S.FilterPopup style={{ top: '49px', left: '92px' }}>
      <S.PopupList>
        {tracks.map((track) => {
          return (
            <li key={track.id}>
              <S.PopupText href="!#">{track.author}</S.PopupText>
            </li>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
