import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './Styles'

import { Buttons } from './Buttons/Buttons'
import { Track } from './Track/Track'
import { VolumeBar } from './VolumeBar/VolumeBar'
import { ProgressBar } from './ProgressBar/ProgressBar'
import { playNextTrack, playTrack, stopTrack } from '../../store/playlistSlice'

export const AudioPlayer = () => {
  const currentTrack = useSelector((state) => state.tracks.currentTrack)

  const audioRef = useRef(null)

  // старт/пауза

  const isPlaying = useSelector((state) => state.tracks.isPlaying)

  const dispatch = useDispatch()

  const handleStart = () => {
    audioRef.current.play()
    dispatch(playTrack(true))
  }

  const handleStop = () => {
    audioRef.current.pause()
    dispatch(stopTrack(false))
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      handleStart()
    }
  }, [currentTrack])

  // перемотка трека на начало, если он играет дольше 5 сек

  const playTrackStart = () => {
    if (audioRef.current.currentTime > 5) {
      audioRef.current.currentTime = 0
    }
  }

  // зацикленность трека

  const [isLoop, setIsLoop] = useState(false)
  const toggleLoop = () => {
    audioRef.current.loop = !isLoop
    setIsLoop(!isLoop)
  }

  // прогресс трека

  const [currentTime, setCurrentTime] = useState(0)

  let duration = 0

  if (audioRef.current) {
    duration = audioRef.current.duration
  }

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
          onEnded={() => dispatch(playNextTrack())}
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
              isLoop={isLoop}
              toggleLoop={toggleLoop}
              playTrackStart={playTrackStart}
            />
            <Track />
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
