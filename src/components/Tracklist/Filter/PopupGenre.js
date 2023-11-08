import { useState } from 'react'
import * as S from './Styles'

const genres = [
  { id: 1, name: 'Классическая музыка' },
  { id: 2, name: 'Рок музыка' },
  { id: 3, name: 'Электронная музыка' },
]
export const PopupGenre = ({ genreTrack, setGenreTrack }) => {
  const [activeFilter, setActiveFilter] = useState(null)
  const handlerSetGenres = (genre) => {
    const index = genreTrack.indexOf(genre)
    if (index !== -1) {
      genreTrack.splice(index, 1)
      setGenreTrack(genreTrack)
      setActiveFilter(null)
    } else {
      setGenreTrack([...genreTrack, genre])
      setActiveFilter(genre)
    }
    console.log(genreTrack)
  }

  return (
    <S.FilterPopup style={{ left: '250px' }}>
      <S.PopupList>
        {genres.map((genre) => {
          return (
            <S.PopupText
              key={genre.id}
              $activeFilter={
                activeFilter === genre.name && genreTrack.includes(genre.name)
              }
              onClick={() => {
                handlerSetGenres(genre.name)
              }}
            >
              {genre.name}
            </S.PopupText>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
