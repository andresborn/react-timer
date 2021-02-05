import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {  // set initial state
            counter: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            hourFirst: "0",
            hourLast: "0",
            minFirst: "0",
            minLast: "0",
            secFirst: "0",
            secLast: "0",
        }
    }

    componentDidMount() {   // Starting inmediately after the component has been mounted in DOM
        this.timerID = setInterval(  // and call count() every second
        () => this.count(), 1000 
        )
    }

    componentWillUnmount() { // If component isn't being used in DOM, stop count(). For performance
        clearInterval(this.timerID);
    }

    count() {
        this.setState((state) => ({
            counter: state.counter + 1,
            hours: Math.floor(state.counter / 60 / 60),
            minutes: Math.floor((state.counter / 60) - state.hours * 60),
            seconds: (state.counter % 60),
            hourFirst: state.hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}).slice(0,1),
            hourLast: state.hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}).slice(1,2),
            minFirst: state.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}).slice(0,1),
            minLast: state.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}).slice(1,2),
            secFirst: state.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}).slice(0,1),
            secLast: state.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}).slice(1,2),
            // toLocaleString takes number and makes it into a string with 2 integers.
            // .slice() returns the integer we want to display 
        }))
    }
    
    static propTypes = {
        hours: PropTypes.number,
        minutes: PropTypes.number,
        seconds: PropTypes.number,
        hourFirst: PropTypes.string,
        hoursLast: PropTypes.string,
        minFirst: PropTypes.string,
        minLast: PropTypes.string, 
        secFirst: PropTypes.string,
        secLast: PropTypes.string, 
    }

    render() {
        return (
            <div className="timer">
                <div className="timer-box"><i className="bi-alarm"></i></div>
                <div className="timer-box">{this.state.hourFirst}</div>
                <div className="timer-box">{this.state.hourLast}</div>
                <div className="timer-box">{this.state.minFirst}</div>
                <div className="timer-box">{this.state.minLast}</div>
                <div className="timer-box">{this.state.secFirst}</div>
                <div className="timer-box">{this.state.secLast}</div> 
                {/*display of single integer per box*/}
            </div>
        )
    }
}

export default Timer
