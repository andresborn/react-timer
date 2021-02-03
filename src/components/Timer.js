import React from 'react';
import PropTypes from 'prop-types';

export const Timer = props => {
    return (
        <div className="timer">
            <div className="timer-box"><i className="bi-alarm"></i></div>
            <div className="timer-box">{props.hours}</div>
            <div className="timer-box">{props.minutes}</div>
            <div className="timer-box">{props.seconds}</div>
        </div>
    )
}

Timer.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};