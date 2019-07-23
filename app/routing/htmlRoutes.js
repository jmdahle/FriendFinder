// path package permits navigating local machine path to files
// path.join connects an 'absolute path' to a 'relative path'
const path = require('path');

// make htmlRoutes available to server
module.exports = function (app) {
    // 'get' route to '/' maps to '../public/home.html'
    app.get('/', (req, res) => {
        // console.log('Go to Home')
        res.sendFile(path.join(__dirname,'../public/home.html'));
    });
    // 'get' route to '/survey' maps to '../public.html'
    app.get('/survey', (req, res) => {
        // console.log('Go to Survey')
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}