import * as S from './Styles'
import { formatTime } from '../../Tracklist/Items/Items'

export const ProgressBar = ({
  duration,
  currentTime,
  handleProgressBarChange,
}) => {
  return (
    <>
      <S.ProgressTime>
        {formatTime(currentTime)} / {formatTime(duration)}
      </S.ProgressTime>
      <S.ProgressInput
        type="range"
        min={0}
        max={duration || 'Infinity'}
        value={currentTime}
        step={0.01}
        onChange={handleProgressBarChange}
        $color="#B672FF"
      />
    </>
  )
}
