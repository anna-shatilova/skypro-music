import * as S from './Styles'

function SidebarItems({ loading, imgSrc }) {
  return (
    <S.SidebarItem>
      {loading ? (
        <S.SidebarSkeleton />
      ) : (
        <S.SidebarLink href="http://">
          <S.SidebarImg
            src={imgSrc}
            alt="day's playlist"
          />
        </S.SidebarLink>
      )}
    </S.SidebarItem>
  )
}
export default SidebarItems
