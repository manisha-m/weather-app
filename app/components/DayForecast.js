var React = require('react');
var PropTypes = React.PropTypes;
var MyNavBar = require('./MyNavBar');
var background = require('../styles').background;
var alignJumbo = require('../styles').alignForecastPgJumbo;

function DayForecast(props) {
    console.log('Rendering for day %o', props.dayForecast);
    if(props.isLoading == true) {
        return (
            <div> LOADING... </div>
        );

    }
    var day = new Date(props.dayForecast.dt*1000);
    return (
        <div> 
            <MyNavBar handleSubmitPlace={props.handleSubmitPlace}/>
            <div className='jumbotron col-sm-12' style={alignJumbo}>
            <span className='col-sm-offset-3 text-center'>
            <h1>{props.city}</h1>
            <h2>{day.toDateString()}</h2>
            </span>
            <span className='col-sm-offset-3 text-center'>
            <h2>{props.dayForecast.weather[0].description}</h2>
            <h2>day temperature: {Math.round(props.dayForecast.temp.day - 273.15)} degrees</h2>
            <h2> humidity: {props.dayForecast.humidity}</h2>
            <h2> pressure: {props.dayForecast.pressure}</h2>
            </span>
            </div>
        </div>
        );
    
}


module.exports = DayForecast;