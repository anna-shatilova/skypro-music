import * as S from './Styles'

export const sidebarItems = [
  { id: 1, imgSrc: 'img/playlist01.png' },
  { id: 2, imgSrc: 'img/playlist02.png' },
  { id: 3, imgSrc: 'img/playlist03.png' },
]
export const Sidebar = ({ loading }) => {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {sidebarItems.map((sidebarItem) => {
            return (
              <S.SidebarItem key={sidebarItem.id}>
                {loading ? (
                  <S.SidebarSkeleton />
                ) : (
                  <S.SidebarLink to={`/favorites/${sidebarItem.id}`}>
                    <S.SidebarImg
                      src={sidebarItem.imgSrc}
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                )}
              </S.SidebarItem>
            )
          })}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
