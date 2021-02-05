import React from 'react'
import PlayListCollection from './PlayListCollection'

const App = (props) => {

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <PlayListCollection playlists={props.data.playlists}/>
    </div>
  );
}

export default App
