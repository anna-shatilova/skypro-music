import * as S from './Styles'

export const PopupYear = () => {
  return (
    <S.FilterPopup style={{ top: '49px', left: '240px' }}>
      <S.PopupList>
        <li key="1">
          <S.PopupText href="#!">1992</S.PopupText>
        </li>
        <li key="2">
          <S.PopupText href="#!">1993</S.PopupText>
        </li>
        <li key="3">
          <S.PopupText href="#!">1994</S.PopupText>
        </li>
      </S.PopupList>
    </S.FilterPopup>
  )
}
