import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from './routes'
import { getTracks } from './api'

export const App = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [tracks, setTracks] = useState([])
  const [trackListError, setTrackListError] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function handleGetTracks() {
      try {
        setTrackListError(null)
        await getTracks().then((data) => {
          setTracks(data)
        })
        setLoading((prev) => !prev)
      } catch (error) {
        setTrackListError(error.message)
      }
    }

    handleGetTracks()
    setLoading(false)
    // try {
    //   async function startFetching() {
    //     setBio(null);
    //     const result = await fetchBio(person);
    //     if (!ignore) {
    //       setBio(result);
    //     }
    //   }

    //   let ignore = false;
    //   startFetching();
    //   return () => {
    //     ignore = true;
    //   }
    //   setLoading(true)

    //   getTracks().then((data) => {
    //       setTracks(data)
    //   })
    //   return
    //   setLoading(false)

    // } catch (error) {
    //   setTrackListError(error.message)
    // }
    // const timerId = setInterval(() => {
    //   return setLoading(!loading)
    // }, 5000)

    // return () => {
    //   clearInterval(timerId)
    // }
  }, [])

  // console.log(tracks)

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
