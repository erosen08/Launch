import React from 'react';

class Button extends React.Component {

  render() {

    const onClick = event => {
      alert('Button was clicked!')
    }

    return (
      <button type='button' onClick = {onClick}>Delete</button>
    )
  }
}

export default Button;
