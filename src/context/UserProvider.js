import React, { useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext(null)

export const useUserContext = () => {
  return useContext(UserContext)
}

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('user'))
  } catch (error) {
    return null
  }
}

export function getTokenFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('token'))
  } catch (error) {
    return null
  }
}


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getAuthFromLocalStorage())
  const navigate = useNavigate()

  const login = (userData, token) => {
    const newUser = { ...userData, token }

    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    navigate('/', { replace: true })
  }

  const logout = () => {
    setUser(null)
    localStorage.clear()
    navigate('/login', { replace: true })
  }

  const userUse = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout],
  )

  return <UserContext.Provider value={userUse}>{children}</UserContext.Provider>
}
