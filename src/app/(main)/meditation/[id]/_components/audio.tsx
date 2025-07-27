'use client'
import { Pause, Play, RotateCcw, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react'
import React, { useRef, useState, useEffect } from 'react'

function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

function AudioProgressBar() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [progress, setProgress] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const updateProgress = () => {
            setCurrentTime(audio.currentTime)
            setDuration(audio.duration || 0)
            setProgress((audio.currentTime / audio.duration) * 100)
        }

        audio.addEventListener('timeupdate', updateProgress)
        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration)
        })

        // Autoplay on page load
        audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))

        // Set initial volume
        audio.volume = volume

        return () => {
            audio.removeEventListener('timeupdate', updateProgress)
        }
    }, [])

    // Update audio volume when volume state changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    const togglePlayPause = () => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play()
            setIsPlaying(true)
        }
    }

    const handleRestart = () => {
        const audio = audioRef.current
        if (audio) {
            audio.currentTime = 0
            audio.play()
            setIsPlaying(true)
        }
    }

    return (
        <div className="w-[800px] mx-auto">
            <audio ref={audioRef} src="/sample-audio.mp3" />

            <div className="flex items-center gap-2 font-poppins-400 w-full mt-2">
                <p className="text-sm w-[40px] text-right">{formatTime(currentTime)}</p>

                {/* Progress bar */}
                <div className="relative h-4 flex-1">
                    <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 rounded"></div>

                    <div
                        className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#2B7272] rounded transition-all duration-200 ease-linear"
                        style={{ width: `${progress}%` }}
                    ></div>

                    <div
                        className="absolute top-1/2 w-3 h-3 bg-[#2B7272] rounded-full shadow-md transition-all duration-200 ease-linear"
                        style={{
                            left: `${progress}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    ></div>
                </div>

                {/* Duration */}
                <p className="text-sm w-[40px]">{formatTime(duration)}</p>

                {/* Controls */}
                <div className="ml-3 flex gap-2 items-center">
                    <button onClick={handleRestart}>
                        <RotateCcw className="w-6 h-6 text-[#1F5D57]" />
                    </button>
                    <div className="mx-3 flex gap-3">
                        <button>
                            <SkipBack className="w-6 h-6 text-[#1F5D57]" />
                        </button>
                        <button
                            onClick={togglePlayPause}
                            className="mx-3 p-2 rounded-full bg-[#2B7272] flex flex-row items-center justify-center"
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 text-white fill-white" />
                            ) : (
                                <Play className="w-6 h-6 text-white fill-white" />
                            )}
                        </button>
                        <button>
                            <SkipForward className="w-6 h-6 text-[#1F5D57]" />
                        </button>
                    </div>

                    {/* Volume control */}
                    <div className="flex items-center gap-2 ml-4">
                        <button
                            onClick={() => setVolume(volume > 0 ? 0 : 1)}
                            aria-label={volume > 0 ? 'Mute' : 'Unmute'}
                        >
                            {volume > 0 ? (
                                <Volume2 className="w-5 h-5 text-[#1F5D57]" />
                            ) : (
                                <VolumeX className="w-5 h-5 text-[#1F5D57]" />
                            )}
                        </button>
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-[80px] h-1 cursor-pointer accent-[#2B7272]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioProgressBar
