import React from 'react'
import './style.css'

import Button from '../button'

function ListItem({suggestion, onChange}) {

  function handleClick(){
    onChange(suggestion)
  }


  return (
    <Button label={suggestion} onClick={handleClick}/>
  )
}

export default ListItem