import { useState } from 'react'
import { useGetTracksQuery } from '../../../store/favoritesApi'
import * as S from './Styles'

export const PopupPerformer = ({ setAuthorTrack }) => {
  const { data } = useGetTracksQuery()
  const [currentAuthors, setCurrentAuthors] = useState([])

  const handlerSetAuthors = (track) => {
    const index = currentAuthors.indexOf(track.author)
    if (index !== -1) {
      setCurrentAuthors(currentAuthors.splice(index, 1))
    } else {
      setCurrentAuthors(currentAuthors.push(track.author))
    }
    console.log(currentAuthors)
    setAuthorTrack(track.author)
  }

  return (
    <S.FilterPopup style={{ left: '85px' }}>
      <S.PopupList>
        {data.map((track) => {
          return (
            <S.PopupText
              key={track.id}
              onClick={() => handlerSetAuthors(track)}
            >
              {track.author}
            </S.PopupText>
          )
        })}
      </S.PopupList>
    </S.FilterPopup>
  )
}
