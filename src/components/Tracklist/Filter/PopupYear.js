import * as S from './Styles'

const date = [
  { value: 'default', name: 'По умолчанию' },
  { value: 'new', name: 'Сначала новые' },
  { value: 'old', name: 'Сначала старые' },
]

export const PopupYear = ({ setDateTrack }) => {
  return (
    <S.FilterPopup>
      <S.PopupList>
        {date.map((item) => {
          return (
            <S.PopupText
              key={item.value}
              onClick={() => setDateTrack(item.value)}
            >
              {item.name}
            </S.PopupText>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
