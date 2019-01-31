import React, { Component } from 'react';

class AddScores extends Component {
    
    scoreTeam1 = () => {
        this.props.addTeam1();
    }

    scoreTeam2 = () => {
        this.props.addTeam2();
    }

    render() {
        let retval;

        retval = (
            <div className="row">
                <div className="col" style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
                <button className="btn btn-primary" onClick={this.scoreTeam1}>Score!</button>
                </div>
                <div className="col" style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
                </div>
                <div className="col" style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
                <button className="btn btn-primary" onClick={this.scoreTeam2}>Score!</button>
                </div>
            </div>
        )

        return retval;
    }
}

export default AddScores;