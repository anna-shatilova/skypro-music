import { useState } from 'react'
import * as S from '../../AppStyles'

import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Sidebar } from '../../components/SideBar/Sidebar'
import { TrackList } from '../../components/Tracklist/TrackList'

export const MainPage = ({ loading, trackListError }) => {
  const [currentTrack, setCurrentTrack] = useState(null)
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <TrackList
              trackListError={trackListError}
              loading={loading}
              setCurrentTrack={setCurrentTrack}
            />
            <Sidebar loading={loading} />
          </S.Main>
          {currentTrack ? (
            <AudioPlayer
              loading={loading}
              currentTrack={currentTrack}
            />
          ) : null}
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
