# weather-app
Weather App using React, Node, Express and Webpack. Deployable on Heroku. Docker image available to be run in a docker container.

##Development builds:
- npm install
- npm start
- visit "http://localhost:3000/build/"

Any code changes will be picked up by the running server and bundled for quick development.

##Deploying to Heroku:

The app is set up for deployment to Heroku.

Heroku will follow the postinstall command in the package.json and compile assets with webpack.production.config.js. 
It runs the Express web server in server.js.

For deploying to heroku, run the following after installing heroku toolbelt:
- NODE_ENV=production webpack -p --config webpack.production.config.js
- heroku local web (for testing before triggering the deploy to heroku)
- git push heroku master (to deploy to heroku)

##Docker hub image:
An image of the app is available at docker hub.
- Use "docker pull manisha/node-weather-app" to pull the image
- Use "docker run -p \<HOST_PORT\>:5000 -d manisha/node-weather-app" to run the pulled image in a container
- Access app using "http://localhost:\<HOST_PORT\>" from browser
