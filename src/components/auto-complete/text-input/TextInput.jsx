import React from 'react'
import './style.css'

function TextInput({value, onChange}) {

  function handleChange(e){
    onChange(e.target.value)
  }
  return (
    <input placeholder='search...' type="text" value={value} onChange={handleChange}/>
  )
}

export default TextInput