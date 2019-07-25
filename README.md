# FriendFinder

## About FriendFinder
FriendFinder is a compatability calculator that compares a user's answers to a quiestionnaire to find "friends" with similar responses.

## Installation
FriendFinder relies on Node.js and the Express.js framework package to respond to requests.  You will need to [download](https://nodejs.org/en/download/) and install Node.js and the following packages:

1. [express](https://www.npmjs.com/package/express) framework package - for responding to requests at defined route paths and serving data back to the requesting client.
2. [path](https://www.npmjs.com/package/path) package for locating resources on a local installation.

If there is a package.json file in the repository (and there **should** be), you can install all the necessary packages from the command prompt at the FriendFinder root directory using ```npm i```.  If you need to install the packages from scratch for some reason, use the command ```npm install expresss path``` to install the two packages.

## Usage
FriendFinder will calculate a user's "best match" for a compatible friend by comparing the user's survey answers to those of the other individuals in the server data.  The user completes a 10 question survey and submits those answers to the server.  The server compares the user's responses to each candidate "friend" and sends back all of the "friend(s)" whose survey answers are most compatible. (In the case of multiple "friends" with the same compatability score, all of those "friends" are returned").

### Server
To start the server, from the command line prompt, run ```node server.js``.  The server will indicate it is running and output the port the server is using to communicate.

### Client
To use FriendFinder, client browsers should point to the host and port of the server.  Installed on your local machine, this will generally be ```localhost:3000```.

The server will respond to requests at the following endpoints:

* a GET request at ```/``` - the home page
* a GET request at ```/survey``` - take the survey
* a GET request at ```/api/friends``` - returns the current "friends" data
* a POST request to ```/api/friends``` - iniated by completing the survey, posts the new user data to the server; the server returns the best "match" among all candidate "friends" in the server data.

## Tecnhical Notes
* The application checks the name provided by the user to the users in the 'database' (json object) and excludes results from a 'friend' in the 'database' with the same name.  This is a clunky way to avoid potential duplicates and doesn't result in any new survey answers from being 'saved' for the user.  This check for duplicates was not part of the project requirements.

## Resources
* All original code as of 8/2019, John Dahle, related to class exercise except where explicitly noted
* Code is found at [GitHub Repository](https://github.com/jmdahle/FriendFinder)
