import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`
export const SidebarPersonal = styled.div`
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: horizontal;
  box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`

export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`

export const SidebarIcon = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
`

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 330px 0 0 0;
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: vertical;
  box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const SidebarList = styled.ul`
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: vertical;
  box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const SidebarItem = styled.li`
  width: 250px;
  height: 150px;
  margin-bottom: 30px;
`
export const SidebarLink = styled(Link)`
  width: 100%;
  height: 100%;
`
export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`
export const SidebarSkeleton = styled.div`
  width: 250px;
  height: 150px;
  background: #313131;
`
