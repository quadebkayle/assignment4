import React from 'react';

function GameDisplay({addTeam1, addTeam2, team1Name, team2Name, team1Score,team2Score, team1Home, team2Home, gameType}) {
    return (
        <div>
        <div className="row">
            <div className="col" style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
                <h3 className="display-3">
                    {gameType}
                </h3>
            </div>
        </div>
            <div className="row">
            <div className="col" style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
                <h3 className="display-3">
                    {team1Name}
                </h3>
                </div>
                <div className="col" style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
                <h4 className="display-3">
                    VS
                </h4>
                </div>
                <div className="col" style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
                <h3 className="display-3">
                    {team2Name}
                </h3>
                </div>
            </div>
            <div className="row">
                <div className="col" style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
                <h5 className="display-4">
                    {team1Home}
                </h5>
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
                <h5 className="display-4">
                    {team2Home}
                </h5>
                </div>
            </div>
            <div className="row">
                <div className="col" style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
                <h5 className="display-4">
                    {team1Score}
                </h5>
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
                <h5 className="display-4">
                    {team2Score}
                </h5>
                </div>
            </div>
            </div>
    );
}

export default GameDisplay;