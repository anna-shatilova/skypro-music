import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './Styles'
import { setCurrentTrack } from '../../../store/playlistSlice'
import {
  useGetFavoriteTracksQuery,
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
} from '../../../store/favoritesApi'
import { useUserContext } from '../../../context/UserProvider'

// const formatTime = (time) => new Date(time * 1000).toISOString().slice(14, 19)

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

export const Items = ({ loading }) => {
  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.tracks.currentTrack)
  const isPlaying = useSelector((state) => state.tracks.isPlaying)

  // реализация лайков и обработка 401 ошибки - нет авторизации
  const { data: favoritesPlaylist } = useGetFavoriteTracksQuery()

  const navigate = useNavigate()
  const { logout } = useUserContext()

  const [addFavoriteTrack, { error: addFavoriteError }] =
    useAddFavoriteTracksMutation()
  const [deleteFavoriteTrack, { error: deleteFavoriteError }] =
    useDeleteFavoriteTracksMutation()

  const handleAddFavoriteTrack = (track) => {
    addFavoriteTrack({ id: track.id })
      .unwrap()
      .catch(() => {
        if (addFavoriteError?.status === 401) {
          navigate('/login')
          logout()
        }
      })
  }
  const handleDeleteFavoriteTrack = (track) => {
    deleteFavoriteTrack({ id: track.id })
      .unwrap()
      .catch(() => {
        if (deleteFavoriteError?.status === 401) {
          navigate('/login')
          logout()
        }
      })
  }

  const statusLike = (arr, item) => {
    if (arr === undefined) return 'nolike'
    const newArr = arr.map((elem) => elem.id)
    return newArr.includes(item.id) ? 'like' : 'nolike'
  }

  // переключение компонента между страницами "Главная" и "Мои треки"
  const location = useLocation()
  const pageName = location.pathname === '/' ? 'Main' : 'Favorites'
  const tracksData =
    pageName === 'Main'
      ? useSelector((state) => state.tracks.tracks)
      : favoritesPlaylist || []

  // лоадер загрузки треков (скелетоны при загрузке)
  const tracks = loading
    ? [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
      ]
    : tracksData

  // рендерит список треков
  const listItems = tracks.map((track) => {
    return (
      <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack>
          <S.TrackTitle onClick={() => dispatch(setCurrentTrack(track))}>
            <S.TrackTitleImg>
              {currentTrack?.id !== track.id ? (
                <S.TrackTitleSvg alt="music">
                  <use
                    xlinkHref={loading ? '' : 'img/icon/sprite.svg#icon-note'}
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
          {loading ? (
            ''
          ) : (
            <div>
              <S.TrackLikeSvg
                alt="like"
                onClick={() =>
                  statusLike(favoritesPlaylist, track) === 'nolike'
                    ? handleAddFavoriteTrack(track)
                    : handleDeleteFavoriteTrack(track)
                }
              >
                {statusLike(favoritesPlaylist, track) === 'nolike' ? (
                  <use xlinkHref="img/icon/sprite.svg#icon-nolike" />
                ) : (
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
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

  const emptyList = (
    <S.FavoritesEmpty>В этом плейлисте нет треков</S.FavoritesEmpty>
  )

  return (
    <S.ContentPlaylist>
      {tracks.length !== 0 ? listItems : emptyList}
    </S.ContentPlaylist>
  )
}
