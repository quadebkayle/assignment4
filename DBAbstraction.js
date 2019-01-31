const MongoClient = require('mongodb').MongoClient;

class DBAbstraction {
    constructor(dbUrl) {
        this.dbUrl = dbUrl;
    }

    init() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.dbUrl, { useNewUrlParser: true }, (err, client) => {
                if (err) {
                    reject(err);
                } else {
                    client.close();
                    resolve();
                }
            });
        });
    }

    async getGame(GameID) {
        
        let allLegends = [];
        try {
            const client = await MongoClient.connect(this.dbUrl, { useNewUrlParser: true });
            const db = client.db('ScoreboardDB');

            game = await db.collection('Games').findOne({"_id": ObjectID(GameID)});
            client.close();
        } catch (err) {
            console.log('There was a problem finding the legends');
            throw err;
        }
        return game;
    }


    /**- Every time the clock stops record that it has stopped in an event log. 
     * The scoreboard operator has the option to write in some text about why it is stopping. 
     * This might be used to record who scored a goal or who received a penalty.
     * Each entry in the event log should hold the name of the unit like "Period 1", 
     * current date and time, the time on the clock, the scores for both teams, and the optional text from the scoreboard operator. */
    async addLog(GameID, Log) {
        try {
            const Log = {
                unitName: Log.unitName,
                date: Log.date,
                time: Log.time,
                gameClock: Log.gameClock,
                scores: { team1: {
                    name: Log.scores.team1.name,
                    score: Log.scores.team1.score
                }, 
                    team2: {
                        name: Log.scores.team2.name,
                        score:Log.scores.team2.score
                }
            },
                text: Log.text,
                fullLog: `EVENT LOG: During ${Log.unitName} on ${Log.date} at ${Log.time}, the game was stopped at ${Log.gameClock} with ${Log.scores.team1.name} at ${Log.scores.team1.score} and ${Log.scores.team2.name} at ${Log.scores.team2.score} because ${Log.text}.`
            }

            const client = await MongoClient.connect(this.dbUrl, { useNewUrlParser: true });
            const db = client.db('LegendsDB');

            await db.collection('CSLegends').insertOne(newLegend); 
            client.close();
        } catch(err) {
            console.log('There was a problem with the insert');
            throw err;
        }
    }

    async getLegendByLastName(lastName) {
        
        let legend = null;
        try {
            const client = await MongoClient.connect(this.dbUrl, { useNewUrlParser: true });
            const db = client.db('LegendsDB');

            legend = await db.collection('CSLegends').findOne({"LastName": lastName});
            client.close();
        } catch (err) {
            console.log('There was a problem finding the legend');
            throw err;
        }
        return legend;
    }

    async getAllLegendsBornOnOrAfter(year) {
        let legends = [];
        
        if(!Number.isInteger(year)) {
            return legends;
        }

        try {
            const client = await MongoClient.connect(this.dbUrl, { useNewUrlParser: true });
            const db = client.db('LegendsDB');

            legends = await db.collection('CSLegends').find({"BirthDate": {$gte: `${year}-01-01`}}).toArray();
            client.close();
        } catch (err) {
            console.log('There was a problem finding the legend');
            throw err;
        }
        return legends;
    }
}
module.exports = DBAbstraction;