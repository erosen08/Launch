import React from 'react'

const Song = props => {

  return (
    <ul onClick={props.handleClick} className={props.className}>{props.name} - {props.artist}</ul>
  )
}

export default Song
