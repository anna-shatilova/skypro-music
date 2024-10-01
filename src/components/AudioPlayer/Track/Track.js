import { useSelector } from 'react-redux'
import * as S from './Styles'
import {
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
  useGetIdTrackQuery,
} from '../../../store/favoritesApi'

export const Track = () => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack)

  // // лайкер в плеере
  const { data } = useGetIdTrackQuery({ id: currentTrack._id })
  const userId = useSelector((state) => state.auth.id)

  const isLiked = () => {
    const arrayUsersLikedId = data?.data?.staredUser ?? []
    return arrayUsersLikedId.includes(userId)
  }
  const [addFavoriteTrack] = useAddFavoriteTracksMutation()
  const [deleteFavoriteTrack] = useDeleteFavoriteTracksMutation()

  const handlerToggleLike = () => {
    if (isLiked()) {
      deleteFavoriteTrack({ id: data.data._id })
    } else {
      addFavoriteTrack({ id: data.data._id })
    }
  }
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
            {data ? data.data.name : null}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">
            {data ? data.data.author : null}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <S.TrackPlayLikeDis onClick={handlerToggleLike}>
        <S.TrackPlayLike className="_btn-icon">
          {isLiked() ? (
            <S.TrackPlayLikeSvg alt="like">
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </S.TrackPlayLikeSvg>
          ) : (
            <S.TrackPlayLikeSvg alt="nolike">
              <use xlinkHref="/img/icon/sprite.svg#icon-nolike" />
            </S.TrackPlayLikeSvg>
          )}
        </S.TrackPlayLike>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}
