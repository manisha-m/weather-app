var React = require('react');
var PropTypes = React.PropTypes;
var MyNavBar = require('./MyNavBar');
var background = require('../styles').background;
var alignJumbo = require('../styles').alignForecastPgJumbo;

function Forecast(props) {
            console.log('Rendering %o', props.forecastInfo);
    if(props.isLoading == true) {
        return (<div> LOADING </div>);
    }
    return (
        <div> 
            <MyNavBar handleSubmitPlace={props.handleSubmitPlace}/>
            <div className='jumbotron col-sm-12' style={alignJumbo}>
            <span className='col-sm-offset-3 text-center'><h1> {props.forecastInfo.city.name}, {props.forecastInfo.city.country}</h1></span>
                <div> &nbsp; </div>
                <div className="col-sm-3 col-sm-offset-1"><h2>Day1: {props.forecastInfo.list[0].weather[0].main}</h2></div>
                <div className="col-sm-3 col-sm-offset-1"><h2>Day2: {props.forecastInfo.list[1].weather[0].main}</h2></div>
                <div className="col-sm-3 col-sm-offset-1"><h2>Day3: {props.forecastInfo.list[2].weather[0].main}</h2></div>
                <div className="col-sm-3 col-sm-offset-1"><h2>Day4: {props.forecastInfo.list[3].weather[0].main}</h2></div>
                <div className="col-sm-3 col-sm-offset-5"><h2>Day5: {props.forecastInfo.list[4].weather[0].main}</h2></div>
            </div>
        </div>
            
    );
}


module.exports = Forecast;