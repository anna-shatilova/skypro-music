import { useState } from 'react'
import * as S from './Styles'
import { PopupPerformer } from './PopupPerformer'
import { PopupYear } from './PopupYear'
import { PopupGenre } from './PopupGenre'

export const Filter = () => {
  const [activeFilter, setActiveFilter] = useState(null)

  const filters = [
    { id: 'author', name: 'исполнителю' },
    { id: 'year', name: 'году выпуска' },
    { id: 'genre', name: 'жанру' },
  ]

  const filterClickHandler = (id) => {
    setActiveFilter(activeFilter === id ? null : id)
  }

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      {filters.map((filter) => {
        return (
          <S.FilterButton
            aria-hidden="true"
            className="_btn-text"
            $activeButton={activeFilter === filter.id}
            key={filter.id}
            onClick={() => {
              return filterClickHandler(filter.id)
            }}
          >
            {filter.name}
          </S.FilterButton>
        )
      })}

      {activeFilter === filters[0].id && <PopupPerformer />}
      {activeFilter === filters[1].id && <PopupYear />}
      {activeFilter === filters[2].id && <PopupGenre />}
    </S.CenterblockFilter>
  )
}
