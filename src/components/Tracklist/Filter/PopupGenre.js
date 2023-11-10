import * as S from './Styles'

const genres = [
  { id: 1, name: 'Классическая музыка' },
  { id: 2, name: 'Рок музыка' },
  { id: 3, name: 'Электронная музыка' },
]
export const PopupGenre = ({ genreTrack, setGenreTrack }) => {
  const handlerSetGenres = (genre) => {
    const index = genreTrack.indexOf(genre)
    if (index !== -1) {
      setGenreTrack(genreTrack.toSpliced(index, 1))
    } else {
      setGenreTrack([...genreTrack, genre])
    }
  }

  return (
    <S.FilterPopup style={{ left: '250px' }}>
      <S.PopupList>
        {genres.map((genre) => {
          return (
            <S.PopupText
              key={genre.id}
              $activeFilter={genre.name && genreTrack.includes(genre.name)}
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
