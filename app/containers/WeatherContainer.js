var React = require('react');
var Weather = require('../components/Weather');
var apiUtils = require('../utils/openweatherapi');

var WeatherContainer = React.createClass({
    getInitialState: function () {
         return (
            {
                isLoading: true,
                place: '',
                weatherInfo: {}
            }
         );  
    },
    componentDidMount: function () {
           var place = this.props.routeParams.city;
           
           console.log("I'm going to get the weather for %s", place);
           apiUtils.getCurrentWeather(place)
                .then(function (data) {
                    console.log('Details: city: ' + data.name + " " + data.sys.country + " " + data.weather[0].description + ' temperature: ' + (data.main.temp - 273.15) + ' Humidity: ' + data.main.humidity);
                    this.setState({
                        isLoading: false,
                        weatherInfo: data
                    });
           }.bind(this))
           
    },
    render: function () {
       return (
           <Weather 
                isLoading={this.state.isLoading}
                weatherInfo={this.state.weatherInfo}/>
       );
   } 
});
       
       
module.exports = WeatherContainer;