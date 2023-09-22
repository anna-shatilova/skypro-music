import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from './routes'
import { getTracks } from './api'

export const App = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [tracks, setTracks] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ])
  const [trackListError, setTrackListError] = useState(null)

  useEffect(() => {
    async function handleGetTracks() {
      try {
        setLoading(true)
        setTrackListError(null)
        await getTracks().then((data) => {
          setTracks(data)
        })
      } catch (error) {
        setTrackListError(error.message)
      } finally {
        setLoading(false)
      }
    }

    handleGetTracks()
  }, [])

  const handleLogin = () => setUser(localStorage.setItem('user', 'token'))
  const handleLogout = () => {
    setUser(localStorage.clear())
    navigate('/login', { replace: true })
  }

  return (
    <AppRoutes
      user={user}
      onAuthButtonClick={user ? handleLogout : handleLogin}
      loading={loading}
      tracks={tracks}
      trackListError={trackListError}
    />
  )
}
