function SidebarItems({ loading, imgSrc }) {
  return (
    <div className="sidebar__item">
      {loading ? (
        <div className="skeleton_sidebar" />
      ) : (
        <a
          className="sidebar__link"
          href="http://"
        >
          <img
            className="sidebar__img"
            src={imgSrc}
            alt="day's playlist"
          />
        </a>
      )}
    </div>
  )
}
export default SidebarItems
