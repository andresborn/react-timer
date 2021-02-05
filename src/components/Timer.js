import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            minFirst: "0",
            minLast: "0",
            secFirst: "0",
            secLast: "0",
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.count(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    count() {
        this.setState((state) => ({
            counter: state.counter + 1,
            hours: Math.floor(state.counter / 60 / 60),
            minutes: Math.floor((state.counter / 60) - state.hours * 60),
            seconds: (state.counter % 60),
            minFirst: state.minutes.toString().slice(0,1),
            minLast: state.minutes.toString().slice(1,2),
            secFirst: state.seconds.toString().slice(0,1),
            secLast: state.seconds.toString().slice(1,2),

        }))
    }
    
    static propTypes = {
        hours: PropTypes.number,
        minutes: PropTypes.number,
        seconds: PropTypes.number,
        minFirst: PropTypes.string,
        minLast: PropTypes.string, 
        secFirst: PropTypes.string,
        secLast: PropTypes.string, 
    }

    render() {
        return (
            <div className="timer">
                <div className="timer-box"><i className="bi-alarm"></i></div>
            <div className="timer-box">{this.state.minFirst}</div>
            <div className="timer-box">{this.state.minLast}</div>
            <div className="timer-box">{this.state.secFirst}</div>
            <div className="timer-box">{this.state.secLast}</div>
            </div>
        )
    }
}

export default Timer
