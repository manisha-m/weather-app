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
    var days = [];
    for(i = 0; i < 5; i++) {
        days[i] = new Date(props.forecastInfo.list[i].dt*1000);
    }
    return (
        <div> 
            <MyNavBar handleSubmitPlace={props.handleSubmitPlace}/>
            <div className='jumbotron col-sm-12' style={alignJumbo}>
            <span className='col-sm-offset-3 text-center'><h1> {props.forecastInfo.city.name}, {props.forecastInfo.city.country}</h1></span>
                <div> &nbsp; </div>
                <div className="col-sm-3 col-sm-offset-1" onClick={props.handleClickDetails} id="Day1">
                {days[0].toDateString()}: {props.forecastInfo.list[0].weather[0].main}
                </div>
                <div className="col-sm-3 col-sm-offset-1" onClick={props.handleClickDetails} id="Day2">
                {days[1].toDateString()}: {props.forecastInfo.list[1].weather[0].main}
                </div>
                <div className="col-sm-3 col-sm-offset-1" onClick={props.handleClickDetails} id="Day3">
                {days[2].toDateString()}: {props.forecastInfo.list[2].weather[0].main}
                </div>
                <div className="col-sm-3 col-sm-offset-1" onClick={props.handleClickDetails} id="Day4">
                {days[3].toDateString()}: {props.forecastInfo.list[3].weather[0].main}
                </div>
                <div className="col-sm-3 col-sm-offset-5" onClick={props.handleClickDetails} id="Day5">
                {days[4].toDateString()}: {props.forecastInfo.list[4].weather[0].main}
                </div>
            </div>
        </div>
            
    );
}


module.exports = Forecast;