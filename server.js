// require package express
const express = require('express');
// create and configure express app
const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// routes from routing files
const htmlRoutes = require('./app/routing/htmlRoutes')(app);
const apiRoutes = require('./app/routing/apiRoutes')(app);
// listener
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });