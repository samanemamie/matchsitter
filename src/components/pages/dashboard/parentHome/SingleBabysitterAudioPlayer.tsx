// import { useSupabaseClient } from '@supabase/auth-helpers-react'

// interface Message {
//   attachment_path: string
// }

// Helper function to split file path
// function splitFilePath(path: string) {
//   const parts = path.split('/')
//   return {
//     bucket_name: parts[0],
//     file_name: parts.slice(1).join('/')
//   }
// }
//   const supabase = useSupabaseClient()

// const message: Message = {
//   attachment_path: 'your-bucket/audio-file.mp3',
// }

// const { bucket_name, file_name } = splitFilePath(message.attachment_path)
// const loadAudioBlob = async () => {
//   try {
//     const { data, error } = await supabase.storage
//       .from(bucket_name!)
//       .download(file_name!)

//     if (error) throw error
//     setAudioBlob(data)
//   } catch (error) {
//     console.error('Error loading audio:', error)
//   }
// }

'use client'

import { AudioVisualizer } from '@/components/common/AudioVisualizer'
import LoadingSection from '@/components/common/LoadingSection'
import { useEffect } from 'react'
import { useVoiceVisualizer, VoiceVisualizer } from 'react-voice-visualizer'

export default function SingleBabysitterAudioPlayer({ audioUrl }: { audioUrl: string }) {
  const recorderControls = useVoiceVisualizer()
  const {
    setPreloadedAudioBlob,
    togglePauseResume,
    isPausedRecordedAudio,
    currentAudioTime,
    duration,
    isPreloadedBlob,
  } = recorderControls

  useEffect(() => {
    const loadAudioBlob = async () => {
      const response = await fetch(audioUrl)
      const audioBlob = await response.blob()
      setPreloadedAudioBlob(audioBlob)
    }

    loadAudioBlob()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isPreloadedBlob ? (
        <>
          <AudioVisualizer
            currentAudioTime={currentAudioTime}
            duration={duration}
            onPlay={togglePauseResume}
            isPausedRecordedAudio={isPausedRecordedAudio}
          />
          <div className="fixed z-0 opacity-0">
            <VoiceVisualizer
              isProgressIndicatorTimeOnHoverShown={false}
              isProgressIndicatorTimeShown={false}
              isControlPanelShown={false}
              height={20}
              barWidth={4}
              gap={1}
              mainBarColor="#28A4B6"
              secondaryBarColor="#0D6573"
              mainContainerClassName="w-full"
              progressIndicatorClassName="border-primary-200"
              controls={recorderControls}
            />
          </div>
        </>
      ) : (
        <LoadingSection />
      )}
    </>
  )
}
