import { useSelector } from 'react-redux'
import * as S from './Styles'

export const Track = () => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack)

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImg>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </S.TrackPlaySvg>
        </S.TrackPlayImg>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">
            {currentTrack ? currentTrack.name : null}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">
            {currentTrack ? currentTrack.author : null}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <S.TrackPlayLikeDis>
        <S.TrackPlayLike className="_btn-icon">
          <S.TrackPlayLikeSvg alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike className="_btn-icon">
          <S.TrackPlayDislikeSvg alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislike>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}
