import styled from 'styled-components'

export const PlayerTrackPlay = styled.div`
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: horizontal;
  box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`
export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackPlayImg = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`
export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackPlaySkeleton = styled.div`
  width: 59px;
  height: 15px;
  background: #313131;
`
export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`
export const TrackPlayAuthorLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackPlayLikeDis = styled.div`
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
  margin-left: 26%;
`
export const TrackPlayLike = styled.div`
  padding: 5px;
  margin-left: 28.5px;
`
export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`