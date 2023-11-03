import * as S from './Styles'

export const PopupGenre = () => {
  return (
    <S.FilterPopup style={{ left: '250px' }}>
      <S.PopupList>
          <S.PopupText key="1">Классическая музыка</S.PopupText>
          <S.PopupText key="2">Рок музыка</S.PopupText>
          <S.PopupText key="3">Электронная музыка</S.PopupText>
      </S.PopupList>
    </S.FilterPopup>
  )
}
