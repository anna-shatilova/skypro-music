import * as S from './Styles'

const genres = [
  { id: 1, name: 'Классическая музыка' },
  { id: 2, name: 'Рок музыка' },
  { id: 3, name: 'Электронная музыка' },
]
export const PopupGenre = ({ setGenreTrack }) => {
  return (
    <S.FilterPopup style={{ left: '250px' }}>
      <S.PopupList>
        {genres.map((genre) => {
          return (
            <S.PopupText
              key={genre.id}
              onClick={() => setGenreTrack(genre.name)}
            >
              {genre.name}
            </S.PopupText>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
