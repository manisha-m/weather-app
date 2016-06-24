# weather-app
Weather App using React, Node, Express and Webpack. Deployable on Heroku.

Development builds:
- npm install
- npm start
- visit "http://localhost:3000/build/"

Any code changes will be picked up by the running server and bundled for quick development.

Deploying to Heroku:
The app is set up for deployment to Heroku.

Heroku will follow the postinstall command in the package.json and compile assets with webpack.production.config.js. 
It runs the Express web server in server.js.

For deploying to heroku, run the following after installing heroku toolbelt:
- NODE_ENV=production webpack -p --config webpack.production.config.js
- heroku local web (for testing before triggering the deploy to heroku)
- git push heroku master (to deploy to heroku)
