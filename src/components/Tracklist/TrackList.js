import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import * as S from './Styles'

import { Items } from './Items/Items'
import { Filter } from './Filter/Filter'
import { Search } from './Search/Search'

export const TrackList = ({
  isLoading,
  error,
  data,
  title,
  showAllTracksAsLiked,
}) => {
  const location = useLocation()
  const displayFilter = location.pathname === '/' ? 'flex' : 'none'

  // фильтр: строка поиска

  const [searchText, setSearchText] = useState('')

  const searchTracks = (tracks, search) =>
    tracks?.filter(
      (track) =>
        track?.name.toLowerCase().includes(search?.toLowerCase()) ||
        track?.author.toLowerCase().includes(search?.toLowerCase()),
    )
  const searchQ = searchTracks(data, searchText)

  const [authorTrack, setAuthorTrack] = useState([])
  const [genreTrack, setGenreTrack] = useState([])
  const [dateTrack, setDateTrack] = useState('')

  // функция фильтрации: передает массив треков в компонент

  const filterTracks = () => {
    let filteredTracks = data

    if (searchQ.length > 0) {
      filteredTracks = searchQ
    }

    // фильтр: по авторам
    if (authorTrack.length > 0) {
      filteredTracks = filteredTracks.filter(({ author }) =>
        authorTrack.includes(author),
      )
    }

    // фильтр: по жанрам
    if (genreTrack.length > 0) {
      filteredTracks = filteredTracks.filter(({ genre }) =>
        genreTrack.includes(genre),
      )
    }

    // фильтр: сортировка по дате
    if (dateTrack === 'new') {
      filteredTracks = filteredTracks.sort(
        (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date),
      )
    }
    if (dateTrack === 'old') {
      filteredTracks = filteredTracks.sort(
        (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date),
      )
    }

    return filteredTracks
  }

  const filteredTracks = filterTracks()

  return (
    <S.MainCenterblock>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <S.CenterblockTitle>{title}</S.CenterblockTitle>
      <Filter
        style={{ display: displayFilter }}
        authorTrack={authorTrack}
        setAuthorTrack={setAuthorTrack}
        genreTrack={genreTrack}
        setGenreTrack={setGenreTrack}
        setDateTrack={setDateTrack}
      />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitle01>Трек</S.PlaylistTitle01>
          <S.PlaylistTitle02>ИСПОЛНИТЕЛЬ</S.PlaylistTitle02>
          <S.PlaylistTitle03>АЛЬБОМ</S.PlaylistTitle03>
          <S.PlaylistTitle04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.PlaylistTitle04>
        </S.ContentTitle>
        <S.ContentPlaylistTitle>
          {error ? (
            <p> Не удалось загрузить плейлист, попробуйте позже</p>
          ) : (
            <Items
              isLoading={isLoading}
              data={filteredTracks}
              showAllTracksAsLiked={showAllTracksAsLiked}
            />
          )}
        </S.ContentPlaylistTitle>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
