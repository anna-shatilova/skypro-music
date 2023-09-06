import { useEffect, useState } from 'react'
import * as S from './AppStyles'

import { AudioPlayer } from './components/AudioPlayer/AudioPlayer'
import { NavMenu } from './components/NavMenu/NavMenu'
import { Sidebar } from './components/SideBar/Sidebar'
import { TrackList } from './components/Tracklist/TrackList'

export const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timerId = setInterval(() => {
      return setLoading(!loading)
    }, 5000)

    return () => {
      clearInterval(timerId)
    }
  }, [])
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <TrackList loading={loading} />
            <Sidebar loading={loading} />
          </S.Main>
          <AudioPlayer loading={loading} />
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
