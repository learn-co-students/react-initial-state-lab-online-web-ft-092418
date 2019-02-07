

import React from 'react';

export default class ImageSlider extends React.Component {

constructor(props){

  super(props)
  this.state = {secondsLeft: this.props.initialCount}
}


render(){

  let message = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"

  return (<div>{message}</div>)
}




}
