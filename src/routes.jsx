import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main/ MainPage'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { NotFound } from './pages/not-found'
import { Category } from './pages/category'
import { Favorites } from './pages/favorites'


export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/category"
        element={<Category />}
      />
      <Route
        path="/favorites/:id"
        element={<Favorites />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
