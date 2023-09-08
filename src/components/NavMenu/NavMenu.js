import { useState } from 'react'
import * as S from './Styles'

export const NavMenu = () => {
  const [openBurger, setOpenBurger] = useState(false)
  const setUser = () => {
    localStorage.clear()
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
              <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem key={3}>
              <S.MenuLink
                to="/login"
                onClick={setUser}
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
