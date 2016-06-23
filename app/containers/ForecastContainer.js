var React = require('react');
var Forecast = require('../components/Forecast');
var apiUtils = require('../utils/openweatherapi');

var ForecastContainer = React.createClass({
    getInitialState: function () {
         return (
            {
                isLoading: true,
                place: '',
                forecastInfo: {}
            }
         );  
    },
    componentDidMount: function () {
           var place = this.props.routeParams.city;
           
           console.log("I'm going to get the forecast for %s", place);
           apiUtils.getFiveDayForecast(place)
                .then(function (data) {
                    console.log('Details: city: ' + data.city.name + " " + data.city.country);
                    console.log("Forecast data1 %o", data.list[0]);
                    this.setState({
                        isLoading: false,
                        forecastInfo: data
                    });
           }.bind(this))
           
    },
    onClickDetails: function (e) {
        var dayIdArr = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'];
        var dayIndex;
        console.log('Handling Click Details of div id %o', e.target);
        dayIndex = dayIdArr.indexOf(e.target.id);
        console.log('Id of element ' + e.target.id + ' index ' + dayIndex);
        console.log('Forecast data for day %d %o', dayIndex,  this.state.forecastInfo.list[dayIndex]);
    },
    render: function () {
        return (
            <Forecast 
                isLoading={this.state.isLoading}
                forecastInfo={this.state.forecastInfo} 
                handleClickDetails={this.onClickDetails}/>
        );
    }
});

module.exports = ForecastContainer;