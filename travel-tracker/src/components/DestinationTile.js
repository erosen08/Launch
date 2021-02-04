import React from 'react'

const DestinationTile = props => {

  let css = ''
  let message = ''

  if (props.selectedStatus === true) {
    css += 'done'
  }

  if (props.selectedFavorite === true) {
    message += 'What a beauty!'
  }

  return (
    <div>
      <p className = {css} onClick={props.handleClick}>{props.name}</p>
      <p>{message}</p>
    </div>
  )
}

export default DestinationTile
