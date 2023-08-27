import './App.css'
import { useEffect, useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import NavMenu from './components/NavMenu'
import Sidebar from './components/Sidebar'
import TrackList from './components/TrackList'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timerId = setInterval(() => setLoading(!loading), 5000)

    return () => {
      clearInterval(timerId)
    }
  }, [])
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList loading={loading} />
          <Sidebar loading={loading} />
        </main>
        <AudioPlayer loading={loading} />
        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
