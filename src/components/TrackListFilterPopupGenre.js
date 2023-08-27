function TrackListFilterPopupGenre() {
  return (
    <div
      className="popup filter__popup"
      style={{ top: '49px', left: '390px' }}
    >
      <ul className="popup__list">
        <li key="1">
          <a
            className="popup__text"
            href="#!"
          >
            Рок
          </a>
        </li>
        <li key="2">
          <a
            className="popup__text"
            href="#!"
          >
            Хип-хоп
          </a>
        </li>
        <li key="3">
          <a
            className="popup__text"
            href="#!"
          >
            Поп-музыка
          </a>
        </li>
        <li key="4">
          <a
            className="popup__text"
            href="#!"
          >
            Техно
          </a>
        </li>
        <li key="5">
          <a
            className="popup__text"
            href="#!"
          >
            Инди
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TrackListFilterPopupGenre
