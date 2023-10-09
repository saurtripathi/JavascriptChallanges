import './App.css'
import Challange from './Challange'
import Solution from './Solution'
import data from '../data'

function App() {
  const anagrams = [
    "moz biblical torchbearers",
    "it's razorbill beachcomber",
    "och mcrobbie trailblazers",
    "bib chorizo cellarmaster",
    "thor scribble carbimazole",
    "zilla borscht abercrombie",
    "brazil scorcher batmobile",
    "dame shelburne characterizing",
    "uber englishman characterized",
    "agnes rhumbline characterized",
    "rehab scrutinized charlemagne",
    "dreams zurich interchangeable",
    "bam hamster technocratic",
    "mechatronic masterbatch",
    "bam ratchet mechatronics"
  ]
  const anagram = "Bob Ziroll Scrimba Teacher"
  function isAnagramInArray(anagram, arr) {
    const newArr = []
    arr.forEach(item => {
      if (item.length === anagram.length) {
        const sortedAnagram = anagram.toLowerCase().split("").sort().join("")
        const sortedItem = item.split("").sort().reduce((acc, curr) => curr.charCodeAt(0) >= 97 || curr.charCodeAt(0) >= 122 ? [...acc, curr] : acc, []).join("")
        if (sortedItem.trim() === sortedAnagram.trim()) {
          newArr.push(item)
        }
      }
    })
    return newArr
  }

  return (
    <>
      <Challange anagrams={anagrams}  />
      <div >
        <Solution isAnagramInArray={isAnagramInArray} anagrams={anagrams} anagram={anagram} />
      </div>
    </>
  )
}

export default App
