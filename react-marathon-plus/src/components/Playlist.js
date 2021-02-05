import React from 'react'

const Playlist = props => {

  return (
    <div>
      <p onClick={props.handleClick} className={props.className}>{props.name}</p>
    </div>
  )
}

export default Playlist
