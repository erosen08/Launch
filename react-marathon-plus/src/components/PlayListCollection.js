import React from 'react';
import Playlist from './Playlist'

const PlayListCollection = props => {

  let playlists = props.playlists.map(playlist => {
    return (
      <Playlist
        key = {playlist.id}
        name = {playlist.name}
      />
    )
  })

  return (
    <div>
      <h2>Playlists</h2>
      {playlists}
    </div>
  )
}

export default PlayListCollection
