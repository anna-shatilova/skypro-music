import { useDispatch, useSelector } from 'react-redux'

// import { useEffect } from 'react'
import * as S from './Styles'
import { favoriteMode, setSearchText } from '../../../store/playlistSlice'
import { useGetTracksQuery } from '../../../store/favoritesApi'

export const Search = () => {
  const { data } = useGetTracksQuery()

  const searchText = useSelector((state) => state.tracks.searchText)
  const dispatch = useDispatch()

  const searchTracks = (tracks, search) =>
    tracks?.filter(
      (track) =>
        track?.name.toLowerCase().includes(search.toLowerCase()) ||
        track?.author.toLowerCase().includes(search.toLowerCase()),
    )
  const handlerSearchTracks = (event) => {
    dispatch(setSearchText(event.target.value))
    const resultArrTracks = searchTracks(data, searchText)
    console.log(resultArrTracks)
    dispatch(favoriteMode([...resultArrTracks]))
  }
  // useEffect(() => {
  //   handlerSearchTracks()
  // }, [searchText])

  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText
        value={searchText}
        onChange={handlerSearchTracks}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  )
}
