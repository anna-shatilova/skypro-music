import * as S from './Styles'

export const ProgressBar = ({
  duration,
  currentTime,
  handleProgressBarChange,
}) => {
  const formatTime = (time) => new Date(time * 1000).toISOString().slice(14, 19)

  return (
    <>
      <S.ProgressTime>
        {formatTime(currentTime)} / {formatTime(duration)}
      </S.ProgressTime>
      <S.ProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={handleProgressBarChange}
        $color="#B672FF"
      />
    </>
  )
}
