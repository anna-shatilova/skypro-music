import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './Styles'
import { favoriteMode, setCurrentTrack } from '../../../store/playlistSlice'
import {
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
} from '../../../store/favoritesApi'
import { setAuth } from '../../../store/authSlice'

export const formatTime = (time) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor(time % 60)
  let fulltime = 0

  const formattedHours = String(hours).padStart(2)
  let formattedMinutes = String(minutes).padStart(2)
  const formattedSeconds = String(seconds).padStart(2, '0')

  if (hours === 0) {
    fulltime = `${formattedMinutes}:${formattedSeconds}`
  } else {
    formattedMinutes = String(minutes).padStart(2, '0')
    fulltime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  }

  return fulltime
}

export const Items = ({ data, isLoading, showAllTracksAsLiked = false }) => {
  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.tracks.currentTrack)
  const isPlaying = useSelector((state) => state.tracks.isPlaying)

  // реализация лайков и обработка 401 ошибки - нет авторизации

  const navigate = useNavigate()
  const userId = useSelector((state) => state.auth.id)

  const [addFavoriteTrack] = useAddFavoriteTracksMutation()
  const [deleteFavoriteTrack] = useDeleteFavoriteTracksMutation()

  const logout = () => {
    dispatch(
      setAuth({
        id: 0,
        email: '',
        access: '',
        refresh: '',
        first_name: '',
        last_name: '',
      }),
    )
    localStorage.clear()
    navigate('/login', { replace: true })
  }

  const handleAddFavoriteTrack = (track) => {
    addFavoriteTrack({ id: track._id })
      .unwrap()
      .catch((error) => {
        if (error.status === 401) {
          logout()
        }
      })
  }
  const handleDeleteFavoriteTrack = (track) => {
    deleteFavoriteTrack({ id: track._id })
      .unwrap()
      .catch((error) => {
        if (error.status === 401) {
          logout()
        }
      })
  }

  const findLike = (track) => {
    if (showAllTracksAsLiked) return true
    const arrayUsersLikedId = (track?.staredUser ?? []).map((elem) => elem)
    return arrayUsersLikedId.includes(userId)
  }

  // лоадер загрузки треков (скелетоны при загрузке)
  const tracks = isLoading
    ? [
        { _id: 1 },
        { _id: 2 },
        { _id: 3 },
        { _id: 4 },
        { _id: 5 },
        { _id: 6 },
        { _id: 7 },
      ]
    : data
  // передаем в стор выбранный трек и плейлист

  const handleCurrentTrackAndPlaylist = (track) => {
    dispatch(setCurrentTrack(track))
    dispatch(favoriteMode([...tracks]))
  }

  // рендерит список треков

  return (
    <S.ContentPlaylist>
      {tracks?.length !== 0 ? (
        tracks?.map((track) => {
          return (
            <S.PlaylistItem key={track._id}>
              <S.PlaylistTrack>
                <S.TrackTitle
                  onClick={() => handleCurrentTrackAndPlaylist(track)}
                >
                  <S.TrackTitleImg>
                    {currentTrack?._id !== track._id ? (
                      <S.TrackTitleSvg alt="music">
                        <use
                          xlinkHref={
                            isLoading ? '' : 'img/icon/sprite.svg#icon-note'
                          }
                        />
                      </S.TrackTitleSvg>
                    ) : (
                      <S.TrackTitleSvgActive
                        alt="music"
                        isPlaying={isPlaying}
                      >
                        <use xlinkHref="img/icon/sprite.svg#icon-colorcircle" />
                      </S.TrackTitleSvgActive>
                    )}
                  </S.TrackTitleImg>
                  {isLoading ? <S.TrackTitleSkeleton /> : track.name}
                </S.TrackTitle>
                {isLoading ? (
                  <S.TrackAuthorSkeleton />
                ) : (
                  <S.TrackAuthor>{track.author}</S.TrackAuthor>
                )}
                {isLoading ? (
                  <S.TrackAlbumSkeleton />
                ) : (
                  <S.TrackAlbum>{track.album}</S.TrackAlbum>
                )}
                {isLoading ? (
                  ''
                ) : (
                  <div>
                    <S.TrackLikeSvg
                      alt="like"
                      onClick={() =>
                        findLike(track)
                          ? handleDeleteFavoriteTrack(track)
                          : handleAddFavoriteTrack(track)
                      }
                    >
                      {findLike(track) ? (
                        <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                      ) : (
                        <use xlinkHref="/img/icon/sprite.svg#icon-nolike" />
                      )}
                    </S.TrackLikeSvg>
                    <S.TrackTimeText>
                      {formatTime(track.duration_in_seconds)}
                    </S.TrackTimeText>
                  </div>
                )}
              </S.PlaylistTrack>
            </S.PlaylistItem>
          )
        })
      ) : (
        <S.FavoritesEmpty>В этом плейлисте нет треков</S.FavoritesEmpty>
      )}
    </S.ContentPlaylist>
  )
}
