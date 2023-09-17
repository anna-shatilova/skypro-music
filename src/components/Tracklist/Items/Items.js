import * as S from './Styles'

// export const tracks = [
//   {
//     id: 1,
//     title: 'Guilt',
//     titleSpan: '',
//     author: 'Nero',
//     album: 'Welcome Reality',
//     time: '4:44',
//   },
//   {
//     id: 2,
//     title: 'Elektro',
//     titleSpan: '',
//     author: 'Dynoro, Outwork, Mr. Gee',
//     album: 'Elektro',
//     time: '2:22',
//   },
//   {
//     id: 3,
//     title: 'I’m Fire',
//     titleSpan: '',
//     author: 'Ali Bakgor',
//     album: 'I’m Fire',
//     time: '2:22',
//   },
//   {
//     id: 4,
//     title: 'Non Stop',
//     titleSpan: '(Remix)',
//     author: 'Стоункат, Psychopath',
//     album: 'Non Stop',
//     time: '4:12',
//   },
//   {
//     id: 5,
//     title: 'Run Run',
//     titleSpan: '(feat. AR/CO)',
//     author: 'Jaded, Will Clarke, AR/CO',
//     album: 'Run Run',
//     time: '2:54',
//   },
//   {
//     id: 6,
//     title: 'Eyes on Fire',
//     titleSpan: '(Zeds Dead Remix)',
//     author: 'Blue Foundation, Zeds Dead',
//     album: 'Eyes on Fire',
//     time: '5:20',
//   },
//   {
//     id: 7,
//     title: 'Mucho Bien',
//     titleSpan: '(Hi Profile Remix)',
//     author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
//     album: 'Mucho Bien',
//     time: '3:41',
//   },
//   {
//     id: 8,
//     title: 'Knives n Cherries',
//     titleSpan: '',
//     author: 'minthaze',
//     album: 'Captivating',
//     time: '1:48',
//   },
//   {
//     id: 9,
//     title: 'Knives n Cherries',
//     titleSpan: '',
//     author: 'minthaze',
//     album: 'Captivating',
//     time: '1:48',
//   },
//   {
//     id: 10,
//     title: 'Knives n Cherries',
//     titleSpan: '',
//     author: 'minthaze',
//     album: 'Captivating',
//     time: '1:48',
//   },
//   {
//     id: 11,
//     title: 'Knives n Cherries',
//     titleSpan: '',
//     author: 'minthaze',
//     album: 'Captivating',
//     time: '1:48',
//   },
//   {
//     id: 12,
//     title: 'Knives n Cherries',
//     titleSpan: '',
//     author: 'minthaze',
//     album: 'Captivating',
//     time: '1:48',
//   },
//   {
//     id: 13,
//     title: 'Knives n Cherries',
//     titleSpan: '',
//     author: 'minthaze',
//     album: 'Captivating',
//     time: '1:48',
//   },
//   {
//     id: 14,
//     title: 'Knives n Cherries',
//     titleSpan: '',
//     author: 'minthaze',
//     album: 'Captivating',
//     time: '1:48',
//   },
//   {
//     id: 15,
//     title: 'How Deep Is Your Love',
//     titleSpan: '',
//     author: 'Calvin Harris, Disciples',
//     album: 'How Deep Is Your Love',
//     time: '3:32',
//   },
//   {
//     id: 16,
//     title: 'Morena',
//     titleSpan: '',
//     author: 'Tom Boxer',
//     album: 'Soundz Made in Romania',
//     time: '3:36',
//   },
// ]
const titleSvg = 'img/icon/sprite.svg#icon-note'
const likeSvg = 'img/icon/sprite.svg#icon-like'

export const Items = ({ loading, tracks }) => {
  return (
    <>
      {tracks.map((track) => {
        return (
          <S.PlaylistItem key={track.id}>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref={loading ? '' : titleSvg} />
                  </S.TrackTitleSvg>
                </S.TrackTitleImg>
                {loading ? (
                  <S.TrackTitleSkeleton />
                ) : (
                  <S.TrackTitleLink href="http://">
                    {track.name}
                    {/* <S.TrackTitleSpan>{track.titleSpan}</S.TrackTitleSpan> */}
                  </S.TrackTitleLink>
                )}
              </S.TrackTitle>
              {loading ? (
                <S.TrackAuthorSkeleton />
              ) : (
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">
                    {track.author}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>
              )}
              {loading ? (
                <S.TrackAlbumSkeleton />
              ) : (
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">
                    {track.album}
                  </S.TrackAlbumLink>
                </S.TrackAlbum>
              )}
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref={likeSvg} />
                </S.TrackTimeSvg>
                <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        )
      })}
    </>
  )
}
