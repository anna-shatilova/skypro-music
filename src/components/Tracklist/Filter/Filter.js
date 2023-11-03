import { useState } from 'react'
import * as S from './Styles'
import { PopupPerformer } from './PopupPerformer'
import { PopupGenre } from './PopupGenre'
import { PopupYear } from './PopupYear'

export const Filter = ({ setAuthorTrack, setGenreTrack, setDateTrack }) => {
  const [activeFilter, setActiveFilter] = useState(null)

  const filters = [
    { id: 'author', name: 'исполнителю' },
    { id: 'genre', name: 'жанру' },
  ]

  const filterClickHandler = (id) => {
    setActiveFilter(activeFilter === id ? null : id)
  }

  return (
    <S.MainCenterBlockFilter>
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
              {/* {matchedAuthor.length === 0 ? null : ( */}
              <S.FilterCounter> 2 </S.FilterCounter>
              {/* )}  */}
            </S.FilterButton>
          )
        })}
        {activeFilter === filters[0].id && (
          <PopupPerformer setAuthorTrack={setAuthorTrack} />
        )}
        {activeFilter === filters[1].id && (
          <PopupGenre setGenreTrack={setGenreTrack} />
        )}
      </S.CenterblockFilter>

      <S.CenterblockFilter>
        <S.FilterTitle>Сортировка:</S.FilterTitle>
        <S.FilterButton
          aria-hidden="true"
          className="_btn-text"
          $activeButton={activeFilter === 'year'}
          onClick={() => {
            return filterClickHandler('year')
          }}
        >
          По умолчанию
        </S.FilterButton>
        {activeFilter === 'year' && <PopupYear setDateTrack={setDateTrack} />}
      </S.CenterblockFilter>
    </S.MainCenterBlockFilter>
  )
}
