import React, { useState } from 'react'
import './style.css'

import TextInput from './text-input'
import Button from './button'
import SuggestionsList from './suggestion-list'

function AutoComplete({suggestions}) {
  const [query, setQuery] = useState('');
  const [showList, setShowList] = useState(false);
  const [showCancelBtn, setShowCancelBtn] = useState(false);

  function handleChange(value){
    setQuery(value)
    if(value){
      setShowList(true)
      setShowCancelBtn(true)
    }else{
      setShowList(false)
      setShowCancelBtn(false)
    }
  };
  
  function handleClearInput(){
    setQuery('')
    setShowList(false)
    setShowCancelBtn(false)
  }

  function handleSuggestionSelect(value){
    setQuery(value)
    setShowList(false)
  }

  //filter list based on query text
  const filteredList = suggestions.filter((suggestion) => {
    return suggestion.includes(query)
  })

  return (
    <div className='autocomplete'>
      <div className='input-section'>
        <TextInput value={query} onChange={handleChange}/>
        {showCancelBtn && <Button label='❌' onClick={handleClearInput}/>}
      </div>


      {showList && <SuggestionsList  onChange={handleSuggestionSelect} suggestions={filteredList}/>}
    </div>
  )
}

export default AutoComplete