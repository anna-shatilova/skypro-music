import PlayerButtonPrev from './PlayerButtonPrev'

function PlayerButtons() {
  return (
    <div className="player__controls">
      <PlayerButtonPrev />
      <div className="player__btn-play _btn">
        <svg
          className="player__btn-play-svg"
          alt="play"
        >
          <use xlinkHref="img/icon/sprite.svg#icon-play" />
        </svg>
      </div>
      <div className="player__btn-next">
        <svg
          className="player__btn-next-svg"
          alt="next"
        >
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div className="player__btn-repeat _btn-icon">
        <svg
          className="player__btn-repeat-svg"
          alt="repeat"
        >
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <svg
          className="player__btn-shuffle-svg"
          alt="shuffle"
        >
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  )
}

export default PlayerButtons
