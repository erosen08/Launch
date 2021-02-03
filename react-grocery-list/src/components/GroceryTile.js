import React from 'react';

import Button from './Button'

class GroceryTile extends React.Component {

  render() {

    return (
      <div>
        {this.props.name}
        <Button />
      </div>
    )
  }
}

export default GroceryTile;
