import styled from 'styled-components'

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
  overflow: auto;
  background-color: #313131;
  position: absolute;
  width: 248px;
  height: 305px;
  padding: 34px;
`

export const PopupList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;

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

export const PopupText = styled.a`
  color: #fff;

  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
  }
`
