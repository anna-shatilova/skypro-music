import * as S from './Styles'

export const VolumeBar = ({ volume, handleVolumeChange }) => {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImg>
          <S.VolumeSvg alt="volume">
            <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
          </S.VolumeSvg>
        </S.VolumeImg>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            className="_btn"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            $color="#FFFFFF"
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}
