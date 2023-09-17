import * as S from '../../AppStyles'

import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Sidebar } from '../../components/SideBar/Sidebar'
import { TrackList } from '../../components/Tracklist/TrackList'

export const MainPage = ({loading, tracks, trackListError}) => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <TrackList trackListError={trackListError} tracks={tracks} loading={loading} />
            <Sidebar loading={loading} />
          </S.Main>
          <AudioPlayer loading={loading} />
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
