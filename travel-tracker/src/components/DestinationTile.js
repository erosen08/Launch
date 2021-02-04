import React from 'react'

const DestinationTile = props => {

  let css = ''

  if (props.selectedStatus === true) {
    css += 'done'
  }

  return (
    <div>
      <p className = {css} onClick={props.handleClick}>{props.name}</p>
    </div>
  )
}

export default DestinationTile
