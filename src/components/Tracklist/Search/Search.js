import * as S from './Styles'

export const Search = () => {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="./public/img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  )
}
