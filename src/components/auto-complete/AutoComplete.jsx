import React, { useState } from 'react'
import './style.css'

import TextInput from './text-input'
import Button from './button'
import SuggestionsList from './suggestion-list'

function AutoComplete({suggestions}) {
  const [query, setQuery] = useState('');
  const [showElement, setShowElement] = useState(false);

  function handleChange(value){
    setQuery(value)
    if(value){
      setShowElement(true)
    }else{
      setShowElement(false)
    }
  };
  
  function handleClearInput(){
    setQuery('')
    setShowElement(false)
  }

  //filter list based on query text
  const filteredList = suggestions.filter((suggestion) => {
    return suggestion.includes(query)
  })

  return (
    <div className='autocomplete'>
      <div className='input-section'>
        <TextInput value={query} onChange={handleChange}/>
        {showElement && <Button label='❌' onClick={handleClearInput}/>}
      </div>


      {showElement && <SuggestionsList suggestions={filteredList}/>}
    </div>
  )
}

export default AutoComplete