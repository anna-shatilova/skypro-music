import * as S from './Styles'

export const PopupPerformer = ({ data }) => {
  return (
    <S.FilterPopup style={{ left: '85px' }}>
      <S.PopupList>
        {data.map((track) => {
          return <S.PopupText key={track.id}>{track.author}</S.PopupText>
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
