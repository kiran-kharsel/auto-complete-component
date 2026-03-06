import React, { useState } from 'react'
import './style.css'

import TextInput from './text-input'
import Button from './button'
import SuggestionsList from './suggestion-list'

function AutoComplete({suggestions}) {
  const [query, setQuery] = useState('');

  function handleChange(value){
    setQuery(value)
  };



  return (
    <div className='autocomplete'>
      <div className='input-section'>
        <TextInput value={query} onChange={handleChange}/>
        <Button label='❌'/>
      </div>


      <SuggestionsList suggestions={suggestions}/>
    </div>
  )
}

export default AutoComplete