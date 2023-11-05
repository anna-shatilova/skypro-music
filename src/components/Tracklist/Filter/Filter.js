import { useState } from 'react'
import * as S from './Styles'
import { PopupPerformer } from './PopupPerformer'
import { PopupGenre } from './PopupGenre'
import { PopupYear } from './PopupYear'

export const Filter = ({ setAuthorTrack, setGenreTrack, setDateTrack }) => {
  const [activeFilter, setActiveFilter] = useState(null)

  const filterClickHandler = (id) => {
    setActiveFilter(activeFilter === id ? null : id)
  }

  return (
    <S.MainCenterBlockFilter>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButton
          aria-hidden="true"
          className="_btn-text"
          $activeButton={activeFilter === 'author'}
          key="author"
          onClick={() => {
            return filterClickHandler('author')
          }}
        >
          исполнителю
          {/* {currentAuthors.length === 0 ? null : ( */}
            <S.FilterCounter> 2 </S.FilterCounter>
          {/* )} */}
        </S.FilterButton>
        {activeFilter === 'author' && (
          <PopupPerformer setAuthorTrack={setAuthorTrack} />
        )}
        <S.FilterButton
          aria-hidden="true"
          className="_btn-text"
          $activeButton={activeFilter === 'genre'}
          key="genre"
          onClick={() => {
            return filterClickHandler('genre')
          }}
        >
          жанру
          {/* {matchedAuthor.length === 0 ? null : ( */}
          <S.FilterCounter> 2 </S.FilterCounter>
          {/* )}  */}
        </S.FilterButton>
        {activeFilter === 'genre' && (
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
