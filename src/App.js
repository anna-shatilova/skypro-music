import { useEffect, useState } from 'react'
import * as S from './AppStyles'

import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import NavMenu from './components/NavMenu/NavMenu'
import Sidebar from './components/SideBar/Sidebar'
import TrackList from './components/Tracklist/TrackList'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timerId = setInterval(() => setLoading(!loading), 5000)

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

export default App
