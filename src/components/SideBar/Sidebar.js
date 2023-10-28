// import { useUserContext } from '../../context/UserProvider'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setAuth } from '../../store/authSlice'
import { useGetTracksQuery } from '../../store/favoritesApi'
import * as S from './Styles'

export const sidebarItems = [
  { id: 1, imgSrc: 'img/playlist01.png' },
  { id: 2, imgSrc: 'img/playlist02.png' },
  { id: 3, imgSrc: 'img/playlist03.png' },
]
export const Sidebar = () => {
  // const { user, logout } = useUserContext()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isLoading } = useGetTracksQuery()
  const userUsername = useSelector((state) => state.auth.username)
  const handleLogout = () => {
    // logout()
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
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{userUsername}</S.SidebarPersonalName>
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
