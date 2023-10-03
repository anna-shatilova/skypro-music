import { useEffect, useRef, useState } from 'react'
import * as S from './Styles'
import { Buttons } from './Buttons/Buttons'
import { Track } from './Track/Track'

export const AudioPlayer = ({ currentTrack }) => {
  const audioRef = useRef(null)

  // старт/пауза
  const [isPlaying, setIsPlaying] = useState(false)

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      handleStart()
    }
  }, [currentTrack])

  // зацикленность трека
  const [isLoop, setIsLoop] = useState(false)
  const toggleLoop = () => {
    audioRef.current.loop = !isLoop
    setIsLoop(!isLoop)
  }

  return (
    <S.Bar>
      <S.BarContent>
        <audio
          controls
          ref={audioRef}
          src={currentTrack.track_file}
          autoPlay
        >
          <track kind="captions" />
        </audio>

        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <Buttons
              togglePlay={togglePlay}
              isPlaying={isPlaying}
              isLoop={isLoop}
              toggleLoop={toggleLoop}
            />
            <Track currentTrack={currentTrack} />
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImg>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImg>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
