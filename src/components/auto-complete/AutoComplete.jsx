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


  //filter list based on query text
  const filteredList = suggestions.filter((suggestion) => {
    return suggestion.includes(query)
  })

  return (
    <div className='autocomplete'>
      <div className='input-section'>
        <TextInput value={query} onChange={handleChange}/>
        <Button label='❌'/>
      </div>


      <SuggestionsList suggestions={filteredList}/>
    </div>
  )
}

export default AutoComplete