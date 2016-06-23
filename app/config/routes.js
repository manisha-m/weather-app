var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var HomeContainer = require('../containers/HomeContainer');
var WeatherContainer = require('../containers/WeatherContainer');
var ForecastContainer = require('../containers/ForecastContainer');
var DayForecastContainer = require('../containers/DayForecastContainer');


var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>           
            <IndexRoute component={HomeContainer} />
            <Route path='cityWeather/:city' component={WeatherContainer} />
            <Route path='forecast/:city' component={ForecastContainer} />
            <Route path='dayForecast' component={DayForecastContainer} />
        </Route>
    </Router>
);


module.exports = routes;