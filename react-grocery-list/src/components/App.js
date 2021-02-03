import React from 'react';
import GroceryIndex from './GroceryIndex';

class App extends React.Component {
  render () {

    const groceryData = [
      { id: 1, name: "Oranges" },
      { id: 2, name: "Bananas" },
      { id: 3, name: "Bread" }
    ]

    return(
      <div>
        <h1>Grocery List</h1>
        <GroceryIndex
          groceries = {groceryData}
          handleButtonClick={event => {
            alert("Button was clicked")
          }}
        />
      </div>
    )
  }
};

export default App;
