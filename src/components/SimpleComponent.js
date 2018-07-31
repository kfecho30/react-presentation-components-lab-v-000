import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      mood: 'happy',
    }
  }

  render(){
    return(
      <div>
        {this.state.mood}
      </div>
    )
  }
}
