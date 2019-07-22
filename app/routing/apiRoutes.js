// import friends data
friends = require('../data/friends');

// make apiRoutes available to server
module.exports = function (app) {
    // 'get' path to '/api/friends' returns friends array as json
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });
    // 'post' path to 'api/friends' runs compatability check
    app.post('/api/friends', (req, res) => {
        let newPerson = req.body;
        let isDuplicate = false;  // for excluding duplicate person
        let duplicateIndex = -1; // for excluding duplicate person
        // compare survey to friends        
        let minDiff = 41;  // highest possible value is 4 * 10; since matches are tested based on the LOWEST difference, we can start with 1 greater than the maximum and always substitute with any lower one
        let bestMatches = []; // an array for matches in case there is a tie/more than one
        for (let i = 0; i < friends.length; i++) {
            let diff = 0;
            // skip if duplicate
            if (friends[i].name === newPerson.name) {
                isDuplicate = true;  // duplicates are skipped
                duplicateIndex = i; // retain location of duplicate for excluding from being re-added
            } else {
                isDuplicate = false;  // no duplicate, evaluate compatability
                for (p = 0; p < friends[i].surveyScores.length; p++) {
                    diff += Math.abs(parseInt(friends[i].surveyScores[p]) - parseInt(newPerson.surveyScores[p]));
                }
                if (diff === minDiff) {
                    // duplicate of lowest difference; add to the match array
                    bestMatches.push(friends[i]);
                } else if (diff < minDiff) {
                    // new lowest difference; set array equal to this match and set new minimum difference
                    bestMatches = [friends[i]];
                    minDiff = diff;
                }
            }
        }
        // add newPerson (if not a duplicate)
        if (duplicateIndex < 0) {
            // add newPerson... not a duplicate
            friends.push(newPerson);
        }
        res.send(bestMatches);
    });
}