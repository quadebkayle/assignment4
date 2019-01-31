import React, { Component } from 'react';
import TimeDisplay from './TimeDisplay';
import ToggleRunning from './ToggleRunning';
import NewGameForm from './NewGameForm';
import GameDisplay from './GameDisplay';
import AddScores from './AddScores';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clockRunning: false,
      minutes: props.initialMinutes,
      seconds: props.initialSeconds,
      ms: 0,
      intervalId: null,
      intervalDuration: 1000,
      timerExpired: false,
      team1Name: "",
      team1Home: "",
      team1Score: "-",
      team2Name: "",
      team2Home: "",
      team2Score: "-",
      Location: "",
      gameType: "",
      Logs : []
    };
  }

  tick = () => {
    //console.log("tick");
    const currentMinutes = this.state.minutes;
    const currentSeconds = this.state.seconds;
    const currentMs = this.state.ms;
    let newState = {};

    if(currentMinutes === 0) {
      if(currentSeconds === 0 && currentMs === 1) {
        newState["clockRunning"] = false;
        clearInterval(this.state.intervalId);
        newState["intervalId"] = null;
        newState["ms"] = 0;
        newState["timerExpired"] = true;

      } else {
        if(currentMs === 0) {
          newState["ms"] = 9;
          newState["seconds"] = currentSeconds - 1
        } else {
          newState["ms"] = currentMs - 1;
        }
      }
    } else {
      if(currentSeconds === 0) {
        newState["seconds"] = 59;
        newState["minutes"] = currentMinutes - 1;
      
        if(currentMinutes === 1) {
          clearInterval(this.state.intervalId);
          newState["intervalDuration"] = 100;
          newState["intervalId"] = setInterval(this.tick, 100);
          newState["ms"] = 9;
        } 
      } else {
        newState["seconds"] = currentSeconds - 1;
      }
    }
    this.setState(newState);
  }

  startGame = (game) => {
    console.log(game);
    const team1 = game.team1.name;
    const team2 = game.team2.name;
    const t1home = game.team1.home;
    const t2home = game.team2.home;
    const gametype = game.gameType;
    const location = game.location;

    let newState = {}

    newState["team1Name"] = team1;
    newState["team2Name"] = team2;
    newState["team1Home"] = t1home;
    newState["team2Home"] = t2home;
    newState["team1Score"] = 0;
    newState["team2Score"] = 0;
    newState["gameType"] = gametype;
    newState["Location"] = location;

    this.setState(newState);  
  }

  addTeam1 = () => {
    let newState = {}

    newState["team1Score"] = this.state.team1Score + 1;

    this.setState(newState);
  }

  addTeam2 = () => {
    let newState = {}

    newState["team2Score"] = this.state.team2Score + 1;

    this.setState(newState);
  }

  toggleClock = () => {

    let newIntervalId;

    if(this.state.clockRunning) {
      clearInterval(this.state.intervalId);
      newIntervalId = null;
    } else {
      newIntervalId = setInterval(this.tick, this.state.intervalDuration);
    }

    this.setState((currentState) => {

      const newState = {
        clockRunning: !currentState.clockRunning,
        intervalId: newIntervalId
      };

      return newState;
    });
  }

  render() {
    return (
      <div className="container">
        <GameDisplay addTeam1={this.addTeam1} addTeam2={this.addTeam2} gameType={this.state.gameType} team1Name={this.state.team1Name} team2Name={this.state.team2Name} team1Home={this.state.team1Home} team2Home={this.state.team2Home} team1Score={this.state.team1Score} team2Score={this.state.team2Score}/>
        <AddScores addTeam1={this.addTeam1} addTeam2={this.addTeam2}/>
        
        <div className="row">
        <div className="col"style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
          <TimeDisplay minutes={this.state.minutes} seconds={this.state.seconds} ms={this.state.ms} />
        </div>
        </div>
        <div className="row">
        <div className="col"style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'              
                }}>
        <ToggleRunning clockRunning={this.state.clockRunning} onToggleClock={this.toggleClock} timerExpired={this.state.timerExpired}/>
        
        </div>
        </div>

        
        
        <NewGameForm onAddGame={this.startGame}/>
      </div>
    );
  }
}

export default App;