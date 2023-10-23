import styled from 'styled-components'

export const MainCenterblock = styled.div`
  width: auto;
  box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`

export const CenterblockTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
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

export const CenterblockContent = styled.div`
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: vertical;
  box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const ContentTitle = styled.div`
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
  box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const PlaylistTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const PlaylistTitle01 = styled(PlaylistTitle)`
  width: 447px;
`
export const PlaylistTitle02 = styled(PlaylistTitle)`
  width: 321px;
`
export const PlaylistTitle03 = styled(PlaylistTitle)`
  width: 245px;
`

export const PlaylistTitle04 = styled(PlaylistTitle)`
  width: 60px;
  text-align: end;
`
export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const ContentPlaylistTitle = styled.div`
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: vertical;
  box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`
