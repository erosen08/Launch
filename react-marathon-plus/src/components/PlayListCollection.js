import React, {useState} from 'react';
import Playlist from './Playlist'

const PlayListCollection = props => {
  const [selectedId, setSelectedId] = useState(null)

  let playlists = props.playlists.map(playlist => {

    const handleClick = () => {
      setSelectedId(playlist.id)
    }

    let className
    if (playlist.id === selectedId) {
      className = 'selected'
    }

    return (
      <Playlist
        key = {playlist.id}
        name = {playlist.name}
        handleClick = {handleClick}
        className = {className}
      />
    )
  })

  return (
    <div>
      {playlists}
    </div>
  )
}

export default PlayListCollection
