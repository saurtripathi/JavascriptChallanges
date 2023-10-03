import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challange from './Challange'
import Solution from './Solution'
function App() {

  const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat": "🐱",
    "dog": "🐕"
  }
  const emojifyWord = word => {
    const slicedWord = word.startsWith(':') &&
      word.endsWith(':') ?
      word
        .slice(1,-1)
      : word
    return emojis[slicedWord] ? emojis[slicedWord] : slicedWord
  }

  const emojifySentence = text => text.split(' ').map(word => emojifyWord(word)).join(' ')


  return (
    <>
      <Challange />
      <div className="card">
        <Solution emojifyWord={emojifyWord} emojifySentence={emojifySentence} />
      </div>
    </>
  )
}

export default App
