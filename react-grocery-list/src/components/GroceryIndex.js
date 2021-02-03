import React from 'react';
import GroceryTile from './GroceryTile';

class GroceryIndex extends React.Component {

  render() {

    let groceries = this.props.groceries.map(grocery => {
      return (
        <GroceryTile
          key = {grocery.id}
          name = {grocery.name}
        />
      )
    })

    return (
      <div>
        {groceries}
      </div>
    )
  }
}

export default GroceryIndex;
