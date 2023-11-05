import { useState } from 'react'
import './App.css'

const drumPads: DrumPad[] = [
  {
    key: 'Q',
    name: 'Heater 1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key: 'W',
    name: 'Heater 2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    name: 'Heater 3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key: 'A',
    name: 'Heater 4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'S',
    name: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'D',
    name: 'Open HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    name: 'Kick n\' Hat',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    name: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    name: 'Closed HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

function App() {
  const [audioName, setAudioName] = useState('')

  const playAudio = (key: string) => {
    setAudioName(drumPads.find((pad) => pad.key === key)?.name ?? '')
    const audio = document.getElementById(key) as HTMLAudioElement
    audio.play()
  }

  document.addEventListener('keydown', (event) => {
    playAudio(event.key)
  })

  return (
    <div id='container'>
      <div id='drum-machine'>
        <div id='display'>
          {audioName}
        </div>
        <div id='drum-pads'>
          {drumPads.map((pad) => (
            <button
              id={pad.name}
              key={pad.key}
              className='drum-pad'
              onClick={() => playAudio(pad.key)}
            >
              {pad.key}
              <audio
                id={pad.key}
                src={pad.src}
                className='clip'
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
