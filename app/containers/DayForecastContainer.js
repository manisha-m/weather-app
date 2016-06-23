var React = require('react');
var DayForecast = require('../components/DayForecast');

var DayForecastContainer = React.createClass({
    getInitialState: function () {
        return (
            {
                isLoading: true,
                city: '',
                dayForecast: {}
            }
        );
    },
    componentDidMount: function () {
        var query = this.props.location.query;
        console.log("Query object %o", query);
        this.setState({
                isLoading: false,
                city: query.city,
                dayForecast: JSON.parse(query.dayForecast)
        });
        console.log("Query object %o", query);
    },
    render: function () {
        console.log("In Render");
        return (
        <DayForecast 
            isLoading={this.state.isLoading}
            city={this.state.city}
            dayForecast={this.state.dayForecast} />
        );
    }
});


module.exports = DayForecastContainer;
