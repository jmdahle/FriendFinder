// import friends data
friends = require('../data/friends');

// make apiRoutes available to server
module.exports = function (app) {
    // 'get' path to '/api/friends' returns friends array as json
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });
    // 'post' path to 'api/friends' runs compatability check
    app.post('./api/friends', (req, res) => {
        res.send('Running compatability check');
    });
}