import * as S from '../Styles'
import { tracks } from '../Items'

function PopupPerformer() {
  return (
    <S.FilterPopup style={{ top: '49px', left: '92px' }}>
      <S.PopupList>
        {tracks.map((track) => (
          <li key={track.id}>
            <S.PopupText href="!#">{track.author}</S.PopupText>
          </li>
        ))}
      </S.PopupList>
    </S.FilterPopup>
  )
}

export default PopupPerformer
