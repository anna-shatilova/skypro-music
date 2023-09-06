import * as S from './Styles'
import { tracks } from '../Items/Items'

export const PopupPerformer = () => {
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
