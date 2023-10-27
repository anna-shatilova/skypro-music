import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './Styles'
import { setCurrentTrack } from '../../../store/playlistSlice'
import {
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

export const Items = ({ data, isLoading }) => {
  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.tracks.currentTrack)
  const isPlaying = useSelector((state) => state.tracks.isPlaying)

  // реализация лайков и обработка 401 ошибки - нет авторизации

  const navigate = useNavigate()
  const { user, logout } = useUserContext()

  const [addFavoriteTrack] = useAddFavoriteTracksMutation()
  const [deleteFavoriteTrack] = useDeleteFavoriteTracksMutation()

  const handleAddFavoriteTrack = (track) => {
    addFavoriteTrack({ id: track.id })
      .unwrap()
      .catch((error) => {
        if (error.status === 401) {
          logout()
          navigate('/login')
        }
      })
  }
  const handleDeleteFavoriteTrack = (track) => {
    deleteFavoriteTrack({ id: track.id })
      .unwrap()
      .catch((error) => {
        if (error.status === 401) {
          logout()
          navigate('/login')
        }
      })
  }
  const statusLike = (track) => {
    (track?.stared_user ?? []).find(({ id }) => id === user.id)
  }

  //   // // переключение компонента между страницами "Главная" и "Мои треки"
  // const location = useLocation()
  // const pageName = location.pathname === '/' ? 'Main' : 'Favorites'
  // if (pageName === 'Main') {
  //   data = mainPlaylis
  // } else {
  //   data = favoritesPlaylist || []
  // }

  // лоадер загрузки треков (скелетоны при загрузке)
  const tracks = isLoading
    ? [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
      ]
    : data

  // рендерит список треков

  return (
    <S.ContentPlaylist>
      {tracks.length !== 0 ? (
        tracks.map((track) => {
          return (
            <S.PlaylistItem key={track.id}>
              <S.PlaylistTrack>
                <S.TrackTitle onClick={() => dispatch(setCurrentTrack(track))}>
                  <S.TrackTitleImg>
                    {currentTrack?.id !== track.id ? (
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
                        statusLike(track) === 'nolike'
                          ? handleAddFavoriteTrack(track)
                          : handleDeleteFavoriteTrack(track)
                      }
                    >
                      {statusLike(track) === 'nolike' ? (
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
      ) : (
        <S.FavoritesEmpty>В этом плейлисте нет треков</S.FavoritesEmpty>
      )}
    </S.ContentPlaylist>
  )
}
