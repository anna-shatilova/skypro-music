import * as S from './Styles'

export const Buttons = ({ isPlaying, togglePlay }) => {
  const handleNotRealized = () => {
    alert('Эта функция еще не реализована')
  }

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev onClick={handleNotRealized}>
        <S.PlayerBtnPrevSvg alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay
        className="_btn"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <S.PlayerBtnPlaySvg alt="pause">
            <use xlinkHref="img/icon/sprite.svg#icon-pause" />
          </S.PlayerBtnPlaySvg>
        ) : (
          <S.PlayerBtnPlaySvg alt="play">
            <use xlinkHref="img/icon/sprite.svg#icon-play" />
          </S.PlayerBtnPlaySvg>
        )}
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext onClick={handleNotRealized}>
        <S.PlayerBtnNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat className="_btn-icon">
        <S.PlayerBtnRepeatSvg alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle
        className="_btn-icon"
        onClick={handleNotRealized}
      >
        <S.PlayerBtnShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}
