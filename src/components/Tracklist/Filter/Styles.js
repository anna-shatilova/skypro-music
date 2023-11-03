import styled from 'styled-components'

export const MainCenterBlockFilter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CenterblockFilter = styled.div`
  position: relative;
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
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }

  ${({ $activeButton }) =>
    $activeButton && 'border-color:#ad61ff;color: #ad61ff; cursor: pointer;'}
`

export const FilterPopup = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 12px;
  background: #313131;
  box-sizing: border-box;
  left: 0;
  min-width: 269px;
  padding: 32px;
  position: absolute;
  top: 50px;
`

export const PopupList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::scrollbar {
    width: 4px;
    border-radius: 4px;
    background-color: #4b4949;
  }

  &::scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }
`

export const PopupText = styled.li`
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding-bottom: 28px;
  color: "#ffffff";

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  &:hover {
    color: #b672ff;
    cursor: pointer;
    text-decoration: underline #b672ff;
  }
`;

export const FilterCounter = styled.span`
  color: white;
  background-color: rgb(173, 97, 255);
  width: 26px;
  height: 26px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
  font-family: StratosSkyeng;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
`
