import { useState } from 'react'
import * as S from './Styles'
import { useUserContext } from '../../context/UserProvider'

export const NavMenu = () => {
  const [openBurger, setOpenBurger] = useState(false)
  const { logout } = useUserContext()

  const handleLogout = () => {
    logout()
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg
          src="img/logo.png"
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
