var React = require('react');
var PropTypes = React.PropTypes;
var MyNavBar = require('./MyNavBar');
var alignJumbo = require('../styles').alignForecastPgJumbo;
var textFont = require('../styles').forecastFont;

function Forecast(props) {
            console.log('Rendering %o', props.forecastInfo);
    if(props.isLoading == true) {
        return (<div> LOADING </div>);
    }
    var days = [];
    var iconURL = [];
    for(i = 0; i < 5; i++) {
        days[i] = new Date(props.forecastInfo.list[i].dt*1000);
        var iconCode = props.forecastInfo.list[i].weather[0].icon;
        iconURL[i] = "http://openweathermap.org/img/w/" + iconCode + ".png";
    }
    return (
        <div> 
            <MyNavBar handleSubmitPlace={props.handleSubmitPlace}/>
            <div className='jumbotron col-sm-12' style={alignJumbo}>
            <span className='col-sm-offset-3 text-center'><h1> {props.forecastInfo.city.name}, {props.forecastInfo.city.country}</h1></span>
                <div> &nbsp; </div>
                <div className="col-sm-3 col-sm-offset-1" onClick={props.handleClickDetails} id="Day1" style={textFont}>
                <div className="row text-center" id="Day1">{days[0].toDateString()}</div>
                <div className="row text-center" id="Day1"><img src={iconURL[0]} />
                {props.forecastInfo.list[0].weather[0].main} </div>
                </div>
                <div className="col-sm-3 col-sm-offset-1" onClick={props.handleClickDetails} id="Day2" style={textFont}>
                <div className="row text-center" id="Day2">{days[1].toDateString()}</div>
                <div className="row text-center" id="Day2"><img src={iconURL[1]} />
                {props.forecastInfo.list[1].weather[0].main}</div>
                </div>
                <div className="col-sm-3 col-sm-offset-1" onClick={props.handleClickDetails} id="Day3" style={textFont}>
                <div className="row text-center" id="Day3">{days[2].toDateString()}</div>
                <div className="row text-center" id="Day3"><img src={iconURL[2]} />
                {props.forecastInfo.list[2].weather[0].main}</div>
                </div>
                <div> &nbsp; </div>
                <div className="col-sm-3 col-sm-offset-1" onClick={props.handleClickDetails} id="Day4" style={textFont}>
                <div className="row text-center" id="Day4">{days[3].toDateString()}</div>
                <div className="row text-center" id="Day4"><img src={iconURL[3]} />
                {props.forecastInfo.list[3].weather[0].main}</div>
                </div>
                <div className="col-sm-3 col-sm-offset-5" onClick={props.handleClickDetails} id="Day5" style={textFont}>
                <div className="row text-center" id="Day5">{days[4].toDateString()}</div>
                <div className="row text-center" id="Day5"><img src={iconURL[4]} />
                {props.forecastInfo.list[4].weather[0].main}</div>
                </div>
            </div>
        </div>
            
    );
}


module.exports = Forecast;