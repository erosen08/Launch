import React, {useState} from 'react';

const ChocolateList = (props) => {
  const [chocolateVisibility, setChocolateVisibility] = useState(true)

  const chocolateData = [
    "Cadbury Chocolate Bar",
    "Lindt 90% Dark Chocolate",
    "Hershey's Special Dark",
    "Lily's Sugar Free Chocolate",
    "Crunch",
    "Toblerone"
  ]

  let chocolateListItems = chocolateData.map((chocolate) => {
    return(
      <li>
        {chocolate}
      </li>
    )
  })

  const chocolateClick = event => {
    return chocolateVisibility ? setChocolateVisibility(false) : setChocolateVisibility(true)
  }

  if (chocolateVisibility === false) {
    chocolateListItems = null
  }

  return(
    <div id="chocolate-app">
      <h1 onClick={chocolateClick}>CHOCOLATE ONLY CABINET</h1>
      <ul>
        {chocolateListItems}
      </ul>
    </div>
  )
}

export default ChocolateList;
