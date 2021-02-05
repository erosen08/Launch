import React, {useState} from 'react'
import Song from './Song'

const SongCollection = props => {

  const [selectedId, setSelectedId] = useState(null)

  let songs = props.songs.map(song => {

    const handleClick = () => {
      setSelectedId(song.id)
    }

    let className

    if (selectedId === song.id) {
      className = 'selected'
    }

    return (
      <Song
        key = {song.id}
        name = {song.name}
        artist = {song.artist}
        handleClick = {handleClick}
        className = {className}
      />
    )
  })

  return (
    <div>
      {songs}
    </div>
  )
}

export default SongCollection
