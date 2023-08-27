import { useState } from 'react'
import TrackListFilterPopupPerformer from './TrackListFilterPopupPerformer'
import TrackListFilterPopupYear from './TrackListFilterPopupYear'
import TrackListFilterPopupGenre from './TrackListFilterPopupGenre'


function TrackListFilter() {
  const [activeFilter, setActiveFilter] = useState(null)
  
  const filters = [
    { id: 'author', name: 'исполнителю' },
    { id: 'year', name: 'году выпуска' },
    { id: 'genre', name: 'жанру' },
  ]

  const getClassesForFilterBtns = (id) =>
    `filter__button button-${id} _btn-text`

  const filterClickHandler = (id) => {
    setActiveFilter(activeFilter === id ? null : id)
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      {filters.map((filter) => (
        <div
          aria-hidden="true"
          className={
            activeFilter === filter.id
              ? `${getClassesForFilterBtns(filter.id)} btn-text_active`
              : getClassesForFilterBtns(filter.id)
          }
          key={filter.id}
          onClick={() => filterClickHandler(filter.id)}
        >
          {filter.name}
        </div>
      ))}

      {activeFilter === filters[0].id && <TrackListFilterPopupPerformer />}
      {activeFilter === filters[1].id && <TrackListFilterPopupYear />}
      {activeFilter === filters[2].id && <TrackListFilterPopupGenre />}
    </div>
  )
}
export default TrackListFilter
