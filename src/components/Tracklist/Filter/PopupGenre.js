import * as S from './Styles'

export const PopupGenre = () => {
  return (
    <S.FilterPopup style={{ left: '250px' }}>
      <S.PopupList>
        <li key="1">
          <S.PopupText href="#!">Классическая музыка</S.PopupText>
        </li>
        <li key="2">
          <S.PopupText href="#!">Рок музыка</S.PopupText>
        </li>
        <li key="3">
          <S.PopupText href="#!">Электронная музыка</S.PopupText>
        </li>
      </S.PopupList>
    </S.FilterPopup>
  )
}
