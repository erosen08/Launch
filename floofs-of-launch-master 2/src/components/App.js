import React from 'react';
import DogIndex from './DogIndex'

const App = props => {

  return(
    <div>
      <DogIndex dogs={props.data.dogs} />
    </div>
  )
}

export default App;
