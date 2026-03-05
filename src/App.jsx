import { useState } from 'react'
import './App.css'

import AutoComplete from './components/auto-complete'


// data
const Suggestions = ['apple', 'banana', 'kiwi', 'orange']

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AutoComplete suggestions={Suggestions}/>
    </>
  )
}

export default App
