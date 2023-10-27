import { Routes, Route } from 'react-router-dom'

import { AppLayout } from './pages/main/AppLayout'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { NotFound } from './pages/not-found'
import { Category } from './pages/category'
import { Favorites } from './pages/favorites'
import { ProtectedRout } from './components/ProtectedRout/index'
import { MainPage } from './pages/main/MainPage'

export const AppRoutes = ({ user }) => {
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

      {/* Outlet. index - это главный роут, его компонент будет отображается при загрузке приложения в компоненте AppLayout. Это и есть outlet (так он называется в AppLayout). На других страницах вместо  outlet будет отображаться разметка этих страниц. */}
      <Route
        element={
          <ProtectedRout
            user={user}
            isAllowed={Boolean(user)}
          />
        }
      >
        <Route element={<AppLayout />}>
          <Route
            path="/"
            index
            element={<MainPage />}
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
      </Route>
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
