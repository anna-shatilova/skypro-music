import { tracks } from './TrackListItems'

function TrackListFilterPopupPerformer() {
  return (
    <div
      className="popup filter__popup"
      style={{ top: '49px', left: '92px' }}
    >
      <ul className="popup__list">
        {tracks.map((track) => (
          <li key={track.id}>
            <a
              href="!#"
              className="popup__text"
            >
              {track.author}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrackListFilterPopupPerformer
