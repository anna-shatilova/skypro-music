import * as S from '../Styles'

function PopupGenre() {
  return (
    <S.FilterPopup style={{ top: '49px', left: '390px' }}>
      <S.PopupList>
        <li key="1">
          <S.PopupText href="#!">Рок</S.PopupText>
        </li>
        <li key="2">
          <S.PopupText href="#!">Хип-хоп</S.PopupText>
        </li>
        <li key="3">
          <S.PopupText href="#!">Поп-музыка</S.PopupText>
        </li>
        <li key="4">
          <S.PopupText href="#!">Техно</S.PopupText>
        </li>
        <li key="5">
          <S.PopupText href="#!">Инди</S.PopupText>
        </li>
      </S.PopupList>
    </S.FilterPopup>
  )
}

export default PopupGenre
