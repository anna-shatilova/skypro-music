import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRout = ({ redirectPath = '/login' }) => {
  if (!localStorage.getItem('user')) {
    return (
      <Navigate
        to={redirectPath}
        replace
      />
    )
  }
  return <Outlet />
}
