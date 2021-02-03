import React from 'react';


class Tweet extends React.Component {
  render () {
    return(
      <div>
        {this.props.text}
        {this.props.user}
      </div>
    )
  }
};

export default Tweet;
