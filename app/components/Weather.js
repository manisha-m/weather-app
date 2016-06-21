var React = require('react');
var PropTypes = React.PropTypes;
var MyNavBar = require('./MyNavBar');
var background = require('../styles').background;
var alignJumbo = require('../styles').alignHomeJumbo;

function Weather(props) {
            console.log('Rendering %o', props.weatherInfo);
    if(props.isLoading == true) {
        return (<div> LOADING... </div>);
    }
    return (
        <div> 
            <MyNavBar handleSubmitPlace={props.handleSubmitPlace}/>
            <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={alignJumbo}>
            <span><h1> {props.weatherInfo.name}, {props.weatherInfo.sys.country}</h1></span>
            <h2>{props.weatherInfo.weather[0].description}</h2>
            <h2>temperature: {Math.round(props.weatherInfo.main.temp - 273.15)} degrees</h2>
            <h2> humidity: {props.weatherInfo.main.humidity}</h2>
            </div>
        </div>
            
    );
}


module.exports = Weather;
