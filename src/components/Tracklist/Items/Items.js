import * as S from './Styles'

const titleSvg = 'img/icon/sprite.svg#icon-note'
const likeSvg = 'img/icon/sprite.svg#icon-like'

export const Items = ({ loading, tracks, setCurrentTrack }) => {
  return (
    <>
      {tracks.map((track) => {
        return (
          <S.PlaylistItem
            key={track.id}
            onClick={() => setCurrentTrack(track)}
          >
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref={loading ? '' : titleSvg} />
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                {loading ? <S.TrackTitleSkeleton /> : track.name}
              </S.TrackTitle>
              {loading ? (
                <S.TrackAuthorSkeleton />
              ) : (
                <S.TrackAuthor>{track.author}</S.TrackAuthor>
              )}
              {loading ? (
                <S.TrackAlbumSkeleton />
              ) : (
                <S.TrackAlbum>{track.album}</S.TrackAlbum>
              )}
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref={likeSvg} />
                </S.TrackTimeSvg>
                <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        )
      })}
    </>
  )
}
