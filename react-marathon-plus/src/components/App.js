import React from 'react'
import PlayListCollection from './PlayListCollection'
import SongCollection from './SongCollection'

const App = (props) => {

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className='grid-x'>
        <div className='cell small-6'>
          <h3>Playlists</h3>
          <PlayListCollection playlists={props.data.playlists}/>
        </div>
        <div className='cell small-6'>
          <h3>Songs</h3>
          <SongCollection songs={props.data.songs} />
        </div>
      </div>
    </div>
  );
}

export default App
