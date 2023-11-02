import * as S from './Styles'

export const PopupPerformer = ({ data }) => {
  return (
    <S.FilterPopup style={{ left: '85px' }}>
      <S.PopupList>
        {data.map((track) => {
          return (
            <li key={track.id}>
              <S.PopupText href="!#">{track.author}</S.PopupText>
            </li>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
