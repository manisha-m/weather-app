var React = require('react');
var Home = require('../components/Home');


var HomeContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
   getInitialState: function () {
       return ( {
           place: ''
       })
   },
   onUpdatePlace: function (e) {
       console.log('Handling on Update Place');
       this.setState({
            place: e.target.value     
       })
   },
   onSubmitPlace: function (e) {
       //go to /city route
       console.log("Need to wire up Get Weather");
       //this.context.router.push('/cityWeather/' + this.state.place);
       this.context.router.push('/forecast/' + this.state.place);
       
   },
   render: function () {
       return (
            <Home 
                place={this.state.place} handleUpdatePlace={this.onUpdatePlace} handleSubmitPlace={this.onSubmitPlace} />
       );
   } 
});


module.exports = HomeContainer;