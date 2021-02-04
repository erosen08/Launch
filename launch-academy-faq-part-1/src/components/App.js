import React from 'react';
import FAQIndex from './FAQIndex'

const App = (props) => {

  return(
    <div>
      <h1>We're here to help!</h1>
      <FAQIndex data={props.data} />
    </div>
  )
}

export default App;
