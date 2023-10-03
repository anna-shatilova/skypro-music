import styled from 'styled-components'

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const BarContent = styled.div`
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: vertical;
  box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const BarPlayerBlock = styled.div`
  height: 73px;
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: horizontal;
  box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
export const BarPlayer = styled.div`
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
  box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`