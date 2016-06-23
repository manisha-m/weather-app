var React = require('react');
var Forecast = require('../components/Forecast');
var apiUtils = require('../utils/openweatherapi');

var ForecastContainer = React.createClass({
        contextTypes: {
        router: React.PropTypes.object.isRequired
    },
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
           var place = this.props.routeParams.city ;
           
           console.log("I'm going to get the forecast for %s", place);
           apiUtils.getFiveDayForecast(place)
                .then(function (data) {
                    console.log('Details: city: ' + data.city.name + " " + data.city.country);
                    console.log("Forecast data1 %o", data.list[0]);
                    this.setState({
                        isLoading: false,
                        place: data.city.name + ", "+ data.city.country,
                        forecastInfo: data
                    });     
           }.bind(this))
           
    },
    onClickDetails: function (e) {
        var dayIdArr = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'];
        var dayIndex;
        dayIndex = dayIdArr.indexOf(e.target.id);
        console.log('Forecast data for place %s day %d %o', this.state.place, dayIndex,  this.state.forecastInfo.list[dayIndex]);
        this.context.router.push({
               pathname: '/dayForecast',
               query: {
                   city: this.state.place,
                   dayForecast: JSON.stringify(this.state.forecastInfo.list[dayIndex])
               }
            });
        
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