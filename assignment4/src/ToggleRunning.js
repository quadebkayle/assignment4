import React, { Component } from 'react';

class ToggleRunning extends Component {
    
    toggle = () => {
        this.props.onToggleClock();
    }

    render() {
        let retVal;
        if(this.props.timerExpired) {
            retVal = (<button disabled>Start</button>);
        }
        else if(this.props.clockRunning) {
            retVal = (<button className="btn btn-danger" onClick={this.toggle}>Stop</button>);
        } else {
            retVal = (<button className="btn btn-primary" onClick={this.toggle}>Start</button>);
        }

        return retVal;
    }
}

export default ToggleRunning;