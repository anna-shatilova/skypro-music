import { useLocation } from 'react-router-dom'

import * as S from './Styles'

import { Items } from './Items/Items'
import { Filter } from './Filter/Filter'
import { Search } from './Search/Search'

export const TrackList = ({ isLoading, error, data }) => {
  const location = useLocation()
  const pageTitle = location.pathname === '/' ? 'Треки' : 'Мои треки'
  const displayFilter = location.pathname === '/' ? 'flex' : 'none'

  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockTitle>{pageTitle}</S.CenterblockTitle>
      <S.CenterblockFilter style={{ display: displayFilter }}>
        <Filter />
      </S.CenterblockFilter>
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
              data={data}
            />
          )}
        </S.ContentPlaylistTitle>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
