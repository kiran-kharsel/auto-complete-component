import React from 'react'
import './style.css'

function Button({label, onClick = ()=>{}}) {

  function handleClick(){
    onClick()
  }
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default Button