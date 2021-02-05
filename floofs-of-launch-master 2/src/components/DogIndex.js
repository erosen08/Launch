import React, {useState} from 'react'
import DogTile from './DogTile'

const DogIndex = props => {

  const [selectedId, setSelectedId] = useState(null)

  let dog = props.dogs.map(dog => {

    let handleClick = () => {
      if (dog.id === selectedId) {
        setSelectedId(false)
      } else {
        setSelectedId(dog.id)
      }
    }

    let selectedStatus = false
    if (dog.id === selectedId) {
      selectedStatus = true
    }

    return (
      <DogTile
        key = {dog.id}
        breed = {dog.breed}
        name = {dog.name}
        human = {dog.human}
        img = {dog.image}
        handleClick={handleClick}
        selectedStatus={selectedStatus}
      />
    )
  })

  return (
    <div>
      {dog}
    </div>
  )
}

export default DogIndex
