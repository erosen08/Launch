import React from 'react'

const DogTile = props => {

  let classes = 'tile'
  if (props.selectedStatus) {
    classes += 'best'
  }

  return (
    <div className={classes} onClick={props.handleClick}>
      <h3>{props.name} - {props.human}</h3>
      <h5>{props.breed}</h5>
      <img src = {props.img} />
    </div>
  )
}

export default DogTile
