// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {

    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    // componentDidMount() {
    //     this.timer = setInterval(
    //         () => this.tick(),
    //         1000
    //     )
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer)
    // }


    writeText() {
        if (this.state.secondsLeft === 0){
            return 'Boom!'
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    // tick() {
    //     this.setState((state, props) => ({
    //         secondsLeft: state.secondsLeft - 1
    //     }))
    // }

    render () {
        return (
            <div>{this.writeText()}</div>
        )
    }
}