import SidebarItems from './SidebarItems'

function Sidebar({loading}) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarItems
            loading={loading}
            imgSrc="img/playlist01.png"
          />
          <SidebarItems
            loading={loading}
            imgSrc="img/playlist02.png"
          />
          <SidebarItems
            loading={loading}
            imgSrc="img/playlist03.png"
          />
        </div>
      </div>
    </div>
  )
}
export default Sidebar
