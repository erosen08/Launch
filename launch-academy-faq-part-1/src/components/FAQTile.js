import React from 'react'

const FAQTile = props => {

  return(
    <div onClick={props.handleClickFunction}>
      <h4>{props.question}</h4>
      <p>{props.answer}</p>
    </div>
  )
}

export default FAQTile
