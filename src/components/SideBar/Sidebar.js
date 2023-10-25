import { useUserContext } from '../../context/UserProvider'
import { useGetTracksQuery } from '../../store/favoritesApi'
import * as S from './Styles'

export const sidebarItems = [
  { id: 1, imgSrc: 'img/playlist01.png' },
  { id: 2, imgSrc: 'img/playlist02.png' },
  { id: 3, imgSrc: 'img/playlist03.png' },
]
export const Sidebar = () => {
  const { user, logout } = useUserContext()
  const { isLoading } = useGetTracksQuery()


  const handleLogout = () => {
    logout()
  }
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogout}>
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
                {isLoading ? (
                  <S.SidebarSkeleton />
                ) : (
                  <S.SidebarLink to={`/category/${sidebarItem.id}`}>
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
