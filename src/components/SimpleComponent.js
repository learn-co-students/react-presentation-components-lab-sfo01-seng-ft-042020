import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    state = {
        mood: "happy"
    }
    
    handleClick = () => {
        let moods = {"happy": "sad", "sad": "happy"}
        this.setState({mood: moods[this.state.mood]})
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    } 
}