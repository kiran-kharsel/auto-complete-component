import React, { useState } from 'react'
import './style.css'

import TextInput from './text-input'
import Button from './button'

function AutoComplete({suggestions}) {
  const [query, setQuery] = useState('');

  function handleChange(value){
    setQuery(value)
  }
  return (
    <div>
      <div>
        <TextInput value={query} onChange={handleChange}/>
        <Button label='cancel'/>
      </div>
    </div>
  )
}

export default AutoComplete