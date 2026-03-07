import React from 'react'
import './style.css'

import Button from '../button'

function ListItem({suggestion, onChange}) {

  function handleClick(){
    // set text in input
    onChange(suggestion)
    // hide list
  }


  return (
    <Button label={suggestion} onClick={handleClick}/>
  )
}

export default ListItem