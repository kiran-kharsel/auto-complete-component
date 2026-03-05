import React from 'react'
import './style.css'

import Button from '../button'

function ListItem({suggestion}) {
  return (
    <Button label={suggestion}/>
  )
}

export default ListItem