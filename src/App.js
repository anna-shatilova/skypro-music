import './App.css'
import AudioPlayer from './components/AudioPlayer'
import NavMenu from './components/NavMenu'
import Sidebar from './components/Sidebar'
import TrackList from './components/TrackList'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList />
          <Sidebar />
        </main>
        <AudioPlayer />
        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
