import * as S from './Styles'

export const Search = ({ searchText, setSearchText }) => {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  )
}
