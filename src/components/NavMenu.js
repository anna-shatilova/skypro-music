import { useState } from 'react'
import NavMenuList from './NavMenuList'

function NavMenu() {
  const [openBurger, setOpenBurger] = useState(false)
  function toggleOpenBurger() {
    setOpenBurger(!openBurger)
  }

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img
          className="logo__image"
          src="img/logo.png"
          alt="logo"
        />
      </div>
      <div
        onClick={toggleOpenBurger}
        aria-hidden="true"
        className="nav__burger burger"
      >
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      {openBurger ? <NavMenuList /> : ''}
    </nav>
  )
}

export default NavMenu
