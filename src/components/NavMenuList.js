const menuItems = [
  {
    link: '!#',
    title: 'Главное',
    id: 1,
  },
  {
    link: '!#',
    title: 'Мой плейлист',
    id: 2,
  },
  {
    link: '../signin.html',
    title: 'Войти',
    id: 3,
  },
]
function NavMenuList() {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.id}
            className="menu__item"
          >
            <a
              href={menuItem.link}
              className="menu__link"
            >
              {menuItem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavMenuList
