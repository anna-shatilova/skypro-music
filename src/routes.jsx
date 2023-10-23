import { Routes, Route } from 'react-router-dom'

import { MainPage } from './pages/main/MainPage'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { NotFound } from './pages/not-found'
import { Category } from './pages/category'
import { Favorites } from './pages/favorites'
import { ProtectedRout } from './components/ProtectedRout/index'
import { TrackList } from './components/Tracklist/TrackList'

export const AppRoutes = ({ user, loading, trackListError }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />

      {/*  Для всех страниц внутри роута главной будет отображаться ее разметка. index - это главный роут, компонент внутри него отображается на главной, это и есть outlet (так он называется в файле с главной страницей). На других страницах внутри этого роута вместо  outlet будет отображаться разметка этих страниц. */}
      <Route
        path="/"
        element={
          <ProtectedRout
            user={user}
            isAllowed={Boolean(user)}
          >
            <MainPage loading={loading} />
          </ProtectedRout>
        }
      >
        <Route
          index
          element={
            <TrackList
              loading={loading}
              trackListError={trackListError}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites />}
        />
        <Route
          path="/category/:id"
          element={<Category />}
        />
      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
