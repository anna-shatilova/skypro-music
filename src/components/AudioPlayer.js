import PlayerButtons from './PlayerButtons'
import AudioPlayerTrack from './AudioPlayerTrack'

function AudioPlayer({loading}) {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <div className="bar__player player">
            <PlayerButtons />
            <AudioPlayerTrack loading={loading} />
          </div>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <svg
                  className="volume__svg"
                  alt="volume"
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AudioPlayer
