import { useDispatch, useSelector } from 'react-redux'

import * as S from './Styles'
import {
  toggleShuffle,
  playNextTrack,
  shuffleMode,
} from '../../../store/playlistSlice'

export const Buttons = ({
  togglePlay,
  isLoop,
  toggleLoop,
  handlePlayPrevTrack,
}) => {
  const dispatch = useDispatch()

  const isPlaying = useSelector((state) => state.tracks.isPlaying)
  const isShuffleMode = useSelector((state) => state.tracks.isShuffleMode)
  const activePlaylist =useSelector((state) => state.tracks.activePlaylist)

  const handleShuffle = () => {
    dispatch(shuffleMode(!isShuffleMode))

    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5)
    }
    if (!isShuffleMode) {
      dispatch(toggleShuffle(shuffleArray([...activePlaylist])))
    } else {
      dispatch(toggleShuffle([...activePlaylist]))
    }
  }

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev onClick={handlePlayPrevTrack}>
        <S.PlayerBtnPrevSvg alt="prev">
          <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay
        className="_btn"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <S.PlayerBtnPlaySvg alt="pause">
            <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
          </S.PlayerBtnPlaySvg>
        ) : (
          <S.PlayerBtnPlaySvg alt="play">
            <use xlinkHref="/img/icon/sprite.svg#icon-play" />
          </S.PlayerBtnPlaySvg>
        )}
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext onClick={() => dispatch(playNextTrack())}>
        <S.PlayerBtnNextSvg alt="next">
          <use xlinkHref="/img/icon/sprite.svg#icon-next" />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat
        className="_btn-icon"
        onClick={toggleLoop}
      >
        <S.PlayerBtnRepeatSvg
          alt="repeat"
          $isLoop={isLoop}
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle
        className="_btn-icon"
        onClick={handleShuffle}
      >
        <S.PlayerBtnShuffleSvg
          $isShuffleMode={isShuffleMode}
          alt="shuffle"
        >
          <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
