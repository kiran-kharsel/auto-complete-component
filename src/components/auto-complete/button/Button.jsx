import React from 'react'
import './style.css'

function Button({label, onClick = ()=>{}}) {

  function handleClick(){
    
  }
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default Button