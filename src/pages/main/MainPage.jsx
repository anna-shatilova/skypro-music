import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import * as S from '../../AppStyles'

import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'
import { NavMenu } from '../../components/NavMenu/NavMenu'
import { Sidebar } from '../../components/SideBar/Sidebar'

export const MainPage = ({ loading }) => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack)

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <Outlet />
            <Sidebar loading={loading} />
          </S.Main>
          {currentTrack ? <AudioPlayer loading={loading} /> : null}
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
