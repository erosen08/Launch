import React from 'react';
import Tweet from './Tweet'

class TwitterFeed extends React.Component {
  render () {
    debugger
    let twitter = this.props.data.map(tweet => {
      return(
        <Tweet
          key = {tweet.id_str}
          text = {tweet.text}
          id_str = {tweet.id_str}
          user = {tweet.user.name}
        />
    )}
  )

    return(
      <div>
        {twitter}
      </div>
    )
  }
};

export default TwitterFeed;
