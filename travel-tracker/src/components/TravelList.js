import React, {useState} from 'react';
import DestinationTile from './DestinationTile'

const TravelList = props => {

  const [selectedId, setSelectedId] = useState(null)

  const favorite = props.data.favoritePlaceId

  let destinations = props.data.places.map(destination => {

    const handleClick = event => {
      setSelectedId(destination.id)
    }

    let selectedStatus = false
    if (selectedId === destination.id) {
      selectedStatus = true
    }

    let selectedFavorite = false
    if (selectedId === favorite) {
      selectedFavorite = true
    }

    return (
      <DestinationTile
        key = {destination.id}
        name = {destination.name}
        handleClick = {handleClick}
        selectedStatus = {selectedStatus}
        selectedFavorite = {selectedFavorite}
      />
    )
  })

  return (
    <div>
      {destinations}
    </div>
  )
}

export default TravelList
