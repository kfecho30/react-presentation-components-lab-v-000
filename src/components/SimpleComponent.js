import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      mood: 'happy',
    }
  }

  handleClick = () => {
    this.setState({this.state.mood === 'happy' ? 'sad': 'happy'})
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.mood}</button>
      </div>
    )
  }
}
