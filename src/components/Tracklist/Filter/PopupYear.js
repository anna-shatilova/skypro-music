import * as S from './Styles'

export const PopupYear = () => {
  return (
    <S.FilterPopup >
      <S.PopupList>
          <S.PopupText key="1">По умолчанию</S.PopupText>
          <S.PopupText key="2">Сначала старые</S.PopupText>
          <S.PopupText key="3">Сначала новые</S.PopupText>
      </S.PopupList>
    </S.FilterPopup>
  )
}
