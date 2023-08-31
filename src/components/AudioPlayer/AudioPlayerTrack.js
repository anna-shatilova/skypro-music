import * as S from './Styles'

function AudioPlayerTrack({ loading }) {
  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImg>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref={loading ? '' : 'img/icon/sprite.svg#icon-note'} />
          </S.TrackPlaySvg>
        </S.TrackPlayImg>
        {loading ? (
          <S.TrackPlaySkeleton />
        ) : (
          <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink href="http://">
              Ты та...
            </S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
        )}
        {loading ? (
          <S.TrackPlaySkeleton />
        ) : (
          <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
          </S.TrackPlayAlbum>
        )}
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

export default AudioPlayerTrack
