import { Navigate } from 'react-router-dom'

export const ProtectedRout = ({ children, redirectPath = '/login' }) => {
  if (!localStorage.getItem('user')) {
    return <Navigate
      to={redirectPath}
      replace
    />
  }
  return children
}
