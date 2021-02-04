import React, {useState} from 'react';
import DestinationTile from './DestinationTile'

const TravelList = props => {

  const [selectedId, setSelectedId] = useState([])

  const favorite = props.data.favoritePlaceId

  let message

  let destinations = props.data.places.map(destination => {

    const handleClick = event => {
      if (selectedId.includes(destination.id)) {
        setSelectedId(selectedId.filter(id => id !=destination.id))
      } else {
        setSelectedId (
          [...selectedId, destination.id]
        )
      }
    }

    let selectedStatus = false
    if (selectedId.includes(destination.id)) {
      selectedStatus = true
    }

    if (selectedId.includes(favorite)) {
      message = 'What a beauty'
    }

    return (
      <DestinationTile
        key = {destination.id}
        name = {destination.name}
        handleClick = {handleClick}
        selectedStatus = {selectedStatus}
      />
    )
  })

  return (
    <div>
      {destinations}
      {message}
    </div>
  )
}

export default TravelList
