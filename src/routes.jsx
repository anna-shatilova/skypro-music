import { Routes, Route } from 'react-router-dom'

import { MainPage } from './pages/main/ MainPage'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { NotFound } from './pages/not-found'
import { Category } from './pages/category'
import { Favorites } from './pages/favorites'
import { ProtectedRout } from './components/ProtectedRout/index'

export const AppRoutes = ({ user, loading, tracks, trackListError }) => {
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
      <Route
        path="/"
        element={
          <ProtectedRout
            user={user}
            isAllowed={Boolean(user)}
          >
            <MainPage
              tracks={tracks}
              loading={loading}
              trackListError={trackListError}
            />
          </ProtectedRout>
        }
      />

      <Route
        path="/favorites"
        element={
          <ProtectedRout
            user={user}
            isAllowed={Boolean(user)}
          >
            <Favorites />
          </ProtectedRout>
        }
      />
      <Route
        path="/category/:id"
        element={
          <ProtectedRout
            user={user}
            isAllowed={Boolean(user)}
          >
            <Category />
          </ProtectedRout>
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
