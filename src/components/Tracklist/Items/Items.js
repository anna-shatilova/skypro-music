import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import * as S from './Styles'
import { setCurrentTrack } from '../../../store/playlistSlice'
import { useGetFavoriteTracksQuery } from '../../../store/favoritesApi'

const titleSvg = 'img/icon/sprite.svg#icon-note'
const likeSvg = 'img/icon/sprite.svg#icon-like'
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
  const token = useSelector((state) => state.tracks.accessToken)
  const { data = [] } = useGetFavoriteTracksQuery(token)

  const location = useLocation()
  const pageName = location.pathname === '/' ? 'Main' : 'Favorites'
  const tracksData =
    pageName === 'Main' ? useSelector((state) => state.tracks.tracks) : data

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

  return (
    <>
      {tracks.map((track) => {
        return (
          <S.PlaylistItem
            key={track.id}
            onClick={() => dispatch(setCurrentTrack(track))}
          >
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  {currentTrack?.id !== track.id ? (
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref={loading ? '' : titleSvg} />
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
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref={likeSvg} />
                </S.TrackTimeSvg>
                <S.TrackTimeText>
                  {formatTime(track.duration_in_seconds)}
                </S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        )
      })}
    </>
  )
}
