import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as S from './Styles'
import { setAuth } from '../../store/authSlice'

export const NavMenu = () => {
  const [openBurger, setOpenBurger] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleLogout = () => {
    dispatch(
      setAuth({
        id: 0,
        email: '',
        username: '',
        access: '',
        refresh: '',
        first_name: '',
        last_name: '',
      }),
    )
    localStorage.clear()
    navigate('/login', { replace: true })
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg
          src="/img/logo.png"
          alt="logo"
        />
      </S.NavLogo>
      <S.NavBurger
        onClick={() => {
          return setOpenBurger(!openBurger)
        }}
        aria-hidden="true"
      >
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {openBurger ? (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem key={1}>
              <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem key={2}>
              <S.MenuLink to="/favorites">Мои треки</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem key={3}>
              <S.MenuLink
                to="/login"
                onClick={handleLogout}
              >
                Выйти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : (
        ''
      )}
    </S.MainNav>
  )
}
