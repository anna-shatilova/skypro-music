import * as S from './Styles'

import { Items } from './Items/Items'
import { Filter } from './Filter/Filter'
import { Search } from './Search/Search'

export const TrackList = ({ loading, trackListError }) => {
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockTitle>Треки</S.CenterblockTitle>
      <Filter />
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
          {trackListError ? (
            <p> Не удалось загрузить плейлист, попробуйте позже</p>
          ) : (
            <Items loading={loading} />
          )}
        </S.ContentPlaylistTitle>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
