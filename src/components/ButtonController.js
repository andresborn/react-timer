import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from "./Button.js";

export class ButtonController extends Component {
    constructor(props) {
        super(props);
        this.handleStartTimer = this.handleStartTimer.bind(this);
        this.handleStopTimer = this.handleStopTimer.bind(this);
        this.state = {isStarted: false}
    }

    handleStartTimer() {
        this.setState({isStarted: true})
    }

    handleStopTimer() {
        this.setState({isStarted: false})
    }

    static propTypes = {

    }

    render() {
        const isStarted = this.state.isStarted;
        let button;
        if (isStarted) {
            button = <Button content="Stop" onClick={this.handleStartTimer}/>
        } else {
            button = <Button content="Start" onClick={this.handleStopTimer}/>
        }

        return (
            <div>
                {button}
                <Button content="Reset" />
            </div>
        )
    }
}

export default ButtonController
