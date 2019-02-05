// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let text = ""
    if (this.state.secondsLeft > 0){
      text = `${this.state.secondsLeft} seconds left before I go boom!`
    }else{
      text = `Boom!`
    }
    return(<div>{text}</div>)
  }
}
