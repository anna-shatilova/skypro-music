import { useEffect, useRef, useState } from 'react'
import * as S from './Styles'
import { Buttons } from './Buttons/Buttons'
import { Track } from './Track/Track'
import { VolumeBar } from './VolumeBar/VolumeBar'
import { ProgressBar } from './ProgressBar/ProgressBar'

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

  // прогресс трека

  const [currentTime, setCurrentTime] = useState(0)

  const duration = currentTrack.duration_in_seconds

  // let duration = 0

  // if (audioRef.current) {
  //   duration = audioRef.current.duration
  // }

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current.currentTime)
      return () => {
        audioRef.current.removeEventListener('timeupdate', () => {
          setCurrentTime(audioRef.current.currentTime)
        })
      }
    })
  })

  const handleProgressBarChange = (event) => {
    const newTime = parseFloat(event.target.value)
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
  }

  // регулятор громкости

  const [volume, setVolume] = useState(0, 5)
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value)
    setVolume(newVolume)
    audioRef.current.volume = newVolume
  }

  return (
    <S.Bar>
      <S.BarContent>
        <audio
          controls
          ref={audioRef}
          src={currentTrack.track_file}
          style={{ display: 'none' }}
        >
          <track kind="captions" />
        </audio>

        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          handleProgressBarChange={handleProgressBarChange}
        />
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
          <VolumeBar
            volume={volume}
            handleVolumeChange={handleVolumeChange}
          />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
