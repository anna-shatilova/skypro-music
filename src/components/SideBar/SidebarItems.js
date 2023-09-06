import * as S from './Styles'

export const SidebarItems = ({ loading, imgSrc }) => {
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
