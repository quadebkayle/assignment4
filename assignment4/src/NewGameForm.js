import React from 'react';

function NewGameForm(props) {

    function onFormSubmit(e) {
        e.preventDefault();

        const newGame = {
            team1:{
                name: e.target.team1Name.value,
                score: 0,
                home: e.target.team1Home.value
            },
            team2:{
                name: e.target.team2Name.value,
                score: 0,
                home: e.target.team2Home.value
            },
            gameType: e.target.gameType.value,
            location: e.target.Location.value,
            date: new Date().toISOString(),
            Logs: [],
        };

        e.target.team1Name.value = "";
        e.target.team2Name.value = "";
        e.target.team1Home.value = "";
        e.target.team2Home.value = "";
        e.target.gameType.value = "";
        e.target.Location.value = "";

        console.log(newGame);
        
        props.onAddGame(newGame);
    }

    return (
        <div>
            <h4>
                Enter in information about another CS legend:
            </h4>

            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="team1Name">Team1</label>
                    <input type="text" className="form-control" name="team1Name" id="team1Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="team1Home">Home or Visitor?</label>
                    <input type="text" className="form-control" name="team1Home" id="team1Home" />
                </div>
                <div className="form-group">
                    <label htmlFor="team2Name">Team2</label>
                    <input type="text" className="form-control" name="team2Name" id="team2Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="team2Home">Home or Visitor?</label>
                    <input type="text" className="form-control" name="team2Home" id="team2Home" />
                </div>
                <div className="form-group">
                    <label htmlFor="gameType">Game Type</label>
                    <input type="text" className="form-control" name="gameType" id="gameType" />
                </div>
                <div className="form-group">
                    <label htmlFor="Location">Location</label>
                    <input type="text" className="form-control" name="Location" id="Location" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default NewGameForm;