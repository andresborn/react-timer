import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.js";


class Timer extends Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.state = {
      // set initial state
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourFirst: "0",
      hourLast: "0",
      minFirst: "0",
      minLast: "0",
      secFirst: "0",
      secLast: "0",
    };
  }

  startTimer() {
    const init = Date.now()  // Store initial time
    this.timerID = setInterval(()=>{
      
      let delta = Date.now() - init; // Get the time that has currently passed in milliseconds
      this.setState(state => ({
        hours: Math.floor(delta / (1000 * 60 * 60 )) % 24,  // Get times from milliseconds
        minutes: Math.floor(delta / (1000 * 60)),
        seconds: Math.floor(delta / 1000) % 60,
        hourFirst: state.hours
          .toLocaleString("en-US", {  // Format to single digits
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
          .slice(0, 1),
        hourLast: state.hours
          .toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
          .slice(1, 2),
        minFirst: state.minutes
          .toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
          .slice(0, 1),
        minLast: state.minutes
          .toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
          .slice(1, 2),
       secFirst: state.seconds.toLocaleString("en-US", {minimumIntegerDigits:2, useGrouping: false,}).slice(0,1),
       secLast: state.seconds
         .toLocaleString("en-US", {
           minimumIntegerDigits: 2,
           useGrouping: false,
         })
         .slice(1, 2),
        // toLocaleString takes number and makes it into a string with 2 integers.
        // .slice() returns the integer we want to display
      }))},
      100  // Update every 0.1 second.
           // We get our "counter" from the set time, which is more reliable.
           // This interval updates the values, does not keep track of time.
    );
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  resetTimer() {
      this.setState({ 
        // reset initial state
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
      })
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
  };

  render() {
    return (
      <div>
        <div className="timer">
          <div className="timer-box">
            <i className="bi-alarm"></i>
          </div>
          <div className="timer-box">{this.state.hourFirst}</div>
          <div className="timer-box">{this.state.hourLast}</div>
          <div className="timer-box">{this.state.minFirst}</div>
          <div className="timer-box">{this.state.minLast}</div>
          <div className="timer-box">{this.state.secFirst}</div>
          <div className="timer-box">{this.state.secLast}</div>
          {/*display of single integer per box*/}
        </div>
        <div>
        <Button content="Start" onClick={this.startTimer} />
        <Button content="Stop"  onClick={this.stopTimer} />
        <Button content="Reset"  onClick={this.resetTimer} />
        </div>
      </div>
    );
  }
}

export default Timer;
