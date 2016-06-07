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
    render: function () {
        return (
            <Forecast 
                isLoading={this.state.isLoading}
                forecastInfo={this.state.forecastInfo} />
        );
    }
});

module.exports = ForecastContainer;