import styled from 'styled-components'

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
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
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const TrackTitle = styled.div`
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
  width: 447px;
`

export const TrackTitleImg = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`
export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackTitleSkeleton = styled.div`
  width: 356px;
  height: 19px;
  background: #313131;
`

// export const TrackTitleLink = styled.a`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #ffffff;
//   &:hover {
//     cursor: pointer;
//   }
// `
// export const TrackTitleSpan = styled.span`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #4e4e4e;
// `
export const TrackAuthorSkeleton = styled.div`
  width: 271px;
  height: 19px;
  background: #313131;
`
export const TrackAuthor = styled.div`
  width: 321px;
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
// export const TrackAuthorLink = styled.a`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #ffffff;
//   text-align: left;
// `
export const TrackAlbumSkeleton = styled.div`
  width: 305px;
  height: 19px;
  background: #313131;
`
export const TrackAlbum = styled.div`
  width: 245px;
`
// export const TrackAlbumLink = styled.a`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #696969;
// `
export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
