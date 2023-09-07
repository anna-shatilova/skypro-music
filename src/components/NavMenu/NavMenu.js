import { useState } from 'react'
import * as S from './Styles'

const menuItems = [
  {
    link: '/',
    title: 'Главное',
    id: 1,
  },
  {
    link: '/favorites',
    title: 'Мой плейлист',
    id: 2,
  },
  {
    link: '/login',
    title: 'Войти',
    id: 3,
  },
]

export const NavMenu = () => {
  const [openBurger, setOpenBurger] = useState(false)

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
            {menuItems.map((menuItem) => {
              return (
                <S.MenuItem key={menuItem.id}>
                  <S.MenuLink to={menuItem.link}>{menuItem.title}</S.MenuLink>
                </S.MenuItem>
              )
            })}
          </S.MenuList>
        </S.NavMenu>
      ) : (
        ''
      )}
    </S.MainNav>
  )
}
