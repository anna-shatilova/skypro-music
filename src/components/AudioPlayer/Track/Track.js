import { useSelector } from 'react-redux'
import * as S from './Styles'
import {
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
} from '../../../store/favoritesApi'

export const Track = () => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack)

  // // лайкер в плеере
  const userId = useSelector((state) => state.auth.id)

  const isLiked = (track) => {
    const arrayUsersLikedId = (track?.stared_user ?? []).map((elem) => elem.id)
    return arrayUsersLikedId.includes(userId)
  }

  const [addFavoriteTrack] = useAddFavoriteTracksMutation()
  const [deleteFavoriteTrack] = useDeleteFavoriteTracksMutation()

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImg>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="/img/icon/sprite.svg#icon-note" />
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
      <S.TrackPlayLikeDis
        onClick={() =>
          isLiked(currentTrack)
            ? deleteFavoriteTrack({ id: currentTrack.id })
            : addFavoriteTrack({ id: currentTrack.id })
        }
      >
        {isLiked(currentTrack) ? (
          <S.TrackPlayLike className="_btn-icon">
            <S.TrackPlayLikeSvg alt="like">
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </S.TrackPlayLikeSvg>
          </S.TrackPlayLike>
        ) : (
          <S.TrackPlayDislike className="_btn-icon">
            <S.TrackPlayDislikeSvg alt="dislike">
              <use xlinkHref="/img/icon/sprite.svg#icon-nolike" />
            </S.TrackPlayDislikeSvg>
          </S.TrackPlayDislike>
        )}
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}
