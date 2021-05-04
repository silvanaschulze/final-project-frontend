import React from 'react'

const button = ({ text, handleClick }) => {
  return (
    <button onClick={() => handleClick(text)}>{text ? text : 'click'}</button>
  )
}

export default button
