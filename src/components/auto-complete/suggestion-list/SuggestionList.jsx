import React from 'react'
import './style.css'

import ListItem from '../list-item'

function SuggestionList({suggestions}) {

  return (
    <div className='suggestion-list'>
      {suggestions.map((suggestion) => {
        return (
          <ListItem key={suggestion} suggestion={suggestion}/>
        )
      })}
    </div>
  )
}

export default SuggestionList