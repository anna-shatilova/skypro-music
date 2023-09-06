import * as S from './Styles'
import {SidebarItems} from './SidebarItems'

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
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
