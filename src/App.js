import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import * as S from './Styles'

import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import NavMenu from './components/NavMenu/NavMenu'
import Sidebar from './components/SideBar/Sidebar'
import TrackList from './components/Tracklist/TrackList'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}

._btn-text:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
}

._btn-icon:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}

._btn-text:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}

._btn-icon:active svg {
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}

._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}
`

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
      <GlobalStyle />
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
