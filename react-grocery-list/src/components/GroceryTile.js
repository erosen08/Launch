import React from 'react';

class GroceryTile extends React.Component {

  render() {

    return (
      <div>
        {this.props.name}
        <button type='Button' onClick = {this.props.handleButtonClick}>Delete</button>
      </div>
    )
  }
}

export default GroceryTile;
